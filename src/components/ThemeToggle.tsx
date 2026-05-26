"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSun, TbMoon } from "react-icons/tb";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(32);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
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
    // Call once to set initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        position: 'fixed',
        bottom: `${bottomOffset}px`,
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'var(--foreground)',
        color: 'var(--background)',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.2s ease',
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <TbSun size={24} /> : <TbMoon size={24} />}
    </button>
  );
}
