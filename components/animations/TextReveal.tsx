"use client";

import { useEffect, useRef } from "react";
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
 * Recursively walks DOM nodes, splitting every text node into
 * individually animated `<span class="char">` elements while
 * preserving non-text children (like styled <span> tags).
 */
function splitTextNodes(parent: HTMLElement): HTMLSpanElement[] {
  const chars: HTMLSpanElement[] = [];

  // snapshot children before mutation
  const nodes = Array.from(parent.childNodes);
  // clear parent
  parent.innerHTML = "";

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      text.split("").forEach((ch) => {
        const wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.verticalAlign = "bottom";
        if (ch === " ") wrapper.style.whiteSpace = "pre";

        const charSpan = document.createElement("span");
        charSpan.className = "char";
        charSpan.textContent = ch;
        charSpan.style.display = "inline-block";
        charSpan.style.willChange = "transform";

        wrapper.appendChild(charSpan);
        parent.appendChild(wrapper);
        chars.push(charSpan);
      });
    } else if (node.nodeName === "BR") {
      parent.appendChild(document.createElement("br"));
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Clone the element (preserving class / style) but recurse into it
      const el = node as HTMLElement;
      const clone = document.createElement(el.tagName.toLowerCase());
      // Copy all attributes (class, style, data-*, etc.)
      Array.from(el.attributes).forEach((attr) => {
        clone.setAttribute(attr.name, attr.value);
      });
      parent.appendChild(clone);
      // Recurse — fill the clone with wrapped chars
      // temporarily move original children into clone so we can split them
      clone.innerHTML = el.innerHTML;
      const nested = splitTextNodes(clone);
      chars.push(...nested);
    }
  });

  return chars;
}

export default function TextReveal({
  children,
  Tag = "h2",
  className = "",
  stagger = 0.03,
  duration = 0.6,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Split all text nodes into individually wrapped chars
    const chars = splitTextNodes(el);

    // Set initial state — chars pushed below their wrapper
    gsap.set(chars, { y: "110%" });

    // Animate on scroll
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
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={{ opacity: 1 }}
    >
      {children}
    </Tag>
  );
}
