"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#E8A598");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedColor = localStorage.getItem("colorSecondary");
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    document.documentElement.style.setProperty("--color-secondary", newColor);
    localStorage.setItem("colorSecondary", newColor);
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    if (/^#[0-9A-F]{6}$/i.test(newColor) || /^#[0-9A-F]{3}$/i.test(newColor)) {
      document.documentElement.style.setProperty("--color-secondary", newColor);
      localStorage.setItem("colorSecondary", newColor);
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border border-white/10 backdrop-blur-sm",
          isOpen ? "bg-white/10 rotate-180" : "bg-black/80 hover:scale-110"
        )}
        style={{
          boxShadow: `0 0 20px ${color}30`,
        }}
        aria-label="Toggle Color Picker"
      >
        <div 
          className="w-5 h-5 rounded-full transition-all duration-300"
          style={{ backgroundColor: color }}
        />
      </button>

      {isOpen && (
        <div className="bg-black/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex flex-col gap-3 mb-1 animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-200">
          <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest px-1">Theme Color</label>
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-white/20">
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className="absolute -top-2 -left-2 w-16 h-16 cursor-pointer opacity-0"
              />
              <div 
                className="w-full h-full pointer-events-none" 
                style={{ backgroundColor: color }}
              />
            </div>
            <input
              type="text"
              value={color}
              onChange={handleHexChange}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono w-[100px] focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all uppercase"
              placeholder="#E8A598"
            />
          </div>
        </div>
      )}
    </div>
  );
}
