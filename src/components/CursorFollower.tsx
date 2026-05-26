"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // To avoid React state updates on every frame, we use refs and direct DOM manipulation
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorSize = isHovering ? 50 : 32;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      // Linear interpolation for smooth follow
      currentX += (mousePos.current.x - currentX) * 0.15;
      currentY += (mousePos.current.y - currentY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX - cursorSize / 2}px, ${currentY - cursorSize / 2}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: cursorSize,
        height: cursorSize,
        border: "1.5px solid var(--foreground)",
        backgroundColor: "transparent",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        opacity: 0.6
      }}
    />
  );
}
