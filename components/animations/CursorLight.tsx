"use client";

import { useEffect, useRef } from "react";

export default function CursorLight() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices to prevent forced reflows and performance issues on mobile
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      return;
    }
    // Set initial CSS variables
    document.body.style.setProperty("--cursor-x", "50vw");
    document.body.style.setProperty("--cursor-y", "50vh");

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    const tick = () => {
      document.body.style.setProperty("--cursor-x", `${mouse.current.x}px`);
      document.body.style.setProperty("--cursor-y", `${mouse.current.y}px`);

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <></>
  );
}
