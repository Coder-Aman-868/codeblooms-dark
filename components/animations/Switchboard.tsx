'use client';

import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const CHAR_MAP: Record<string, number[][]> = {
  C: [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 1]
  ],
  O: [
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0]
  ],
  D: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 0]
  ],
  E: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1]
  ],
  B: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0]
  ],
  L: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1]
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1]
  ],
  S: [
    [0, 1, 1],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 0]
  ],
};

const ROWS = 7;
const COLS = 45;

const createMask = () => {
  const mask = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  const word = "CODEBLOOMS";
  let startCol = 2; // 2 cols padding
  const startRow = 1; // 1 row padding

  for (const char of word) {
    const map = CHAR_MAP[char];
    if (map) {
      for (let r = 0; r < map.length; r++) {
        for (let c = 0; c < map[r].length; c++) {
          mask[startRow + r][startCol + c] = map[r][c];
        }
      }
      startCol += map[0].length + 1;
    }
  }
  return mask;
};

const mask = createMask();

interface SwitchboardProps {
  className?: string;
}

export const Switchboard = ({ className }: SwitchboardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dotStates, setDotStates] = useState<string[]>(Array(ROWS * COLS).fill('off'));

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isHovered) {
      // Light up from left to right
      let col = 0;
      intervalId = setInterval(() => {
        setDotStates(prev => {
          const next = [...prev];
          for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c <= col; c++) {
              if (c < COLS) {
                const idx = r * COLS + c;
                if (mask[r][c] === 1) {
                  next[idx] = 'high';
                } else {
                  next[idx] = 'off';
                }
              }
            }
          }
          return next;
        });
        col += 2; // Speed of reveal
        if (col >= COLS + 2) clearInterval(intervalId);
      }, 30);
    } else {
      // Random twinkling
      intervalId = setInterval(() => {
        setDotStates(prev => {
          const next = [...prev];
          // Pick a few random dots to turn on
          const numChanges = Math.floor(Math.random() * 8) + 2;
          for (let i = 0; i < numChanges; i++) {
            const idx = Math.floor(Math.random() * next.length);
            const rand = Math.random();
            if (rand > 0.8) next[idx] = 'high';
            else if (rand > 0.4) next[idx] = 'medium';
            else next[idx] = 'off';
          }
          // Also slowly fade out some active dots
          for (let i = 0; i < next.length; i++) {
            if (next[i] !== 'off' && Math.random() > 0.8) {
              next[i] = next[i] === 'high' ? 'medium' : 'off';
            }
          }
          return next;
        });
      }, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    }
  }, [isHovered]);

  return (
    <div
      className={twMerge("relative p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group cursor-crosshair", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="grid w-full h-fit max-w-full"
        style={{
          gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          gap: 'min(1.2vw, 8px)'
        }}
      >
        {dotStates.map((state, i) => (
          <div key={i} className="flex items-center justify-center w-full aspect-square">
            <div
              data-state={state}
              className={clsx(
                "rounded-full transition-all duration-300",
                state === 'off' && "w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] bg-white/10",
                state === 'medium' && "w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.4)]",
                state === 'high' && "w-[4px] h-[4px] sm:w-[3px] sm:h-[3px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
