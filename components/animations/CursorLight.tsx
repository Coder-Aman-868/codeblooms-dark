"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorLight() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial CSS variables
    document.body.style.setProperty("--cursor-x", "50vw");
    document.body.style.setProperty("--cursor-y", "50vh");

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Update CSS vars for radial gradient spotlight (instant, no lag)
      document.body.style.setProperty("--cursor-x", e.clientX + "px");
      document.body.style.setProperty("--cursor-y", e.clientY + "px");
    };

    window.addEventListener("mousemove", handleMouseMove);

    // GSAP ticker for smooth trailing cursor dot
    const tick = () => {
      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.15;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.15;

      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: smoothMouse.current.x,
          y: smoothMouse.current.y,
          xPercent: -50,
          yPercent: -50,
        });
      }
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-dot"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "#fff",
        boxShadow: "0 0 12px 3px rgba(255,255,255,0.6), 0 0 40px 8px rgba(126,244,221,0.25)",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
}
