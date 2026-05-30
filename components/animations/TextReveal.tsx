"use client";

import React, {
  useEffect,
  useRef,
  useMemo,
  Children,
  isValidElement,
  cloneElement,
  ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  stagger?: number;
  duration?: number;
}

/**
 * React-level text splitter.
 * Walks children, splits every string into individual <span> chars
 * wrapped in overflow-hidden containers. Preserves non-text elements
 * (like styled <span> tags) and recurses into them.
 */
let charKey = 0;
function splitChildren(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    // String text → split into per-char spans
    if (typeof child === "string" || typeof child === "number") {
      const text = String(child);
      return text.split("").map((ch) => (
        <span
          key={`c-${charKey++}`}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            ...(ch === " " ? { whiteSpace: "pre" as const } : {}),
          }}
        >
          <span
            className="tr-char"
            style={{
              display: "inline-block",
              willChange: "transform",
            }}
          >
            {ch}
          </span>
        </span>
      ));
    }

    // React element → clone it and recurse into its children
    if (isValidElement(child)) {
      const props = child.props as { children?: ReactNode };
      if (props.children != null) {
        return cloneElement(
          child,
          {} as Record<string, unknown>,
          splitChildren(props.children)
        );
      }
      return child;
    }

    return child;
  });
}

export default function TextReveal({
  children,
  Tag = "h2",
  className = "",
  stagger = 0.03,
  duration = 0.6
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  // Split at the React level — no DOM manipulation needed
  const processed = useMemo(() => {
    charKey = 0;
    return splitChildren(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".tr-char");
    if (!chars.length) return;

    // Initial state — push chars below their overflow-hidden wrapper
    gsap.set(chars, { y: "110%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });

    tl.to(chars, {
      y: "0%",
      duration,
      stagger,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [duration, stagger]);

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={className}
    >
      {processed}
    </Tag>
  );
}
