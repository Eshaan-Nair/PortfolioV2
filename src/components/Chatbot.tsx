"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMessageChatbot, TbX, TbSend } from "react-icons/tb";
import ReactMarkdown from 'react-markdown';
import { usePathname } from 'next/navigation';

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: "assistant", content: "Hi! I'm Eshaan's AI Assistant. Ask me anything about his experience, projects, or skills!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(32);
  const [showTooltip, setShowTooltip] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTooltip(false);
      }
      const footer = document.querySelector('footer');
      if (!footer) return;
      
      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (footerRect.top < viewportHeight) {
        const visibleFooterHeight = viewportHeight - footerRect.top;
        setBottomOffset(32 + visibleFooterHeight);
      } else {
        setBottomOffset(32);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
      let aiContent = "";
      
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: "" }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        aiContent += value;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].content = aiContent;
          return updated;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: "assistant", content: "Sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (pathname === '/fun') {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: `${bottomOffset}px`,
          right: "2rem",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          transition: "transform 0.2s ease",
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? "none" : "auto",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <TbMessageChatbot size={28} />
      </button>

      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            style={{
              position: "fixed",
              bottom: `${bottomOffset + 70}px`,
              right: "2rem",
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 40,
              pointerEvents: "none",
              whiteSpace: "nowrap"
            }}
          >
            Chat with my AI
            {/* Tooltip triangle tail */}
            <div style={{
              position: "absolute",
              bottom: "-4px",
              right: "20px",
              width: "10px",
              height: "10px",
              backgroundColor: "var(--foreground)",
              transform: "rotate(45deg)",
              zIndex: -1
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              bottom: `${bottomOffset}px`,
              right: "2rem",
              width: "350px",
              height: "500px",
              maxWidth: "calc(100vw - 4rem)",
              backgroundColor: "var(--card-bg)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--border-color)",
              borderRadius: "16px",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              overflow: "hidden"
            }}
          >
            {/* Header */}
            <div style={{
              padding: "1rem",
              borderBottom: "1px solid var(--border-color)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.02)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TbMessageChatbot size={22} color="var(--primary)" />
                <span style={{ fontWeight: 600, fontFamily: "var(--font-sans)", fontSize: "1rem" }}>AI Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", display: "flex" }}
              >
                <TbX size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} style={{
              flex: 1,
              padding: "1rem",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              fontSize: "0.9rem",
              lineHeight: "1.4"
            }}>
              {messages.map((msg: Message) => (
                <div key={msg.id} style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.role === "user" ? "var(--foreground)" : "var(--accent)",
                  color: msg.role === "user" ? "var(--background)" : "var(--foreground)",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  borderBottomRightRadius: msg.role === "user" ? "4px" : "12px",
                  borderBottomLeftRadius: msg.role === "assistant" ? "4px" : "12px",
                  maxWidth: "85%",
                  whiteSpace: "pre-wrap"
                }}>
                  {msg.content}
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div style={{
                  alignSelf: "flex-start",
                  backgroundColor: "var(--accent)",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  borderBottomLeftRadius: "4px",
                  color: "var(--text-muted)"
                }}>
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    Typing...
                  </motion.div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSubmit}
              style={{
                padding: "1rem",
                borderTop: "1px solid var(--border-color)",
                display: "flex",
                gap: "0.5rem"
              }}
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my experience..."
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  borderRadius: "20px",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--background)",
                  color: "var(--foreground)",
                  outline: "none",
                  fontFamily: "var(--font-sans)"
                }}
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  color: "white",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                  opacity: isLoading || !input.trim() ? 0.6 : 1,
                  flexShrink: 0,
                  transition: "opacity 0.2s"
                }}
              >
                <TbSend size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
