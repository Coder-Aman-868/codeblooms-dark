'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import LiquidGlass from './LiquidGlass'

export interface TabItem {
  id: string
  label: string
  badge?: number
  icon?: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}

interface TabsProps {
  tabs: TabItem[]
  defaultActiveId?: string
  /** Fires after the active tab changes — use for external side-effects like GSAP */
  onTabChange?: (id: string) => void
  className?: string
}

const Tabs = ({ tabs, defaultActiveId, onTabChange, className = '' }: TabsProps) => {
  const [activeId, setActiveId] = useState(
    defaultActiveId ?? tabs.find((t) => !t.disabled)?.id ?? ''
  )

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const stripRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [glider, setGlider] = useState({ left: 0, width: 0 })
  const [ready, setReady] = useState(false)

  // Measure glider position — accounts for horizontal scroll offset
  const measureGlider = useCallback(() => {
    const activeIndex = tabs.findIndex((t) => t.id === activeId)
    const el = tabRefs.current[activeIndex]
    const strip = stripRef.current
    const scroll = scrollRef.current
    if (!el || !strip || !scroll) return

    // offsetLeft is relative to the scrollable container — unaffected by scroll position
    setGlider({
      left: el.offsetLeft,
      width: el.offsetWidth,
    })
  }, [activeId, tabs])

  // Re-measure on activeId change
  useEffect(() => {
    measureGlider()
    if (!ready) requestAnimationFrame(() => setReady(true))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, tabs.length])

  // Re-measure on resize (font scaling, orientation change, etc.)
  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const ro = new ResizeObserver(() => measureGlider())
    ro.observe(strip)
    return () => ro.disconnect()
  }, [measureGlider])

  // Scroll active tab into view on mobile
  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.id === activeId)
    const el = tabRefs.current[activeIndex]
    const scroll = scrollRef.current
    if (!el || !scroll) return
    // Centre the active tab in the scroll container if possible
    const scrollLeft = el.offsetLeft - scroll.offsetWidth / 2 + el.offsetWidth / 2
    scroll.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [activeId, tabs])

  const handleSelect = (id: string) => {
    setActiveId(id)
    onTabChange?.(id)
  }

  const activeTab = tabs.find((t) => t.id === activeId)
  const activeIndex = tabs.findIndex((t) => t.id === activeId)
  const firstTabIsActive = activeIndex === 0

  return (
    <div className={`flex flex-col max-w-max ${className}`} role="tablist">

      {/* ── Scroll wrapper — hides overflow, never wraps ── */}
      <div
        ref={scrollRef}
        style={{
          overflowX: 'auto',
          overflowY: 'visible',
          // Hide scrollbar on all browsers
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        // Hide scrollbar for Webkit
        className="[&::-webkit-scrollbar]:hidden"
      >
        {/* ── Tab strip (pill) ── */}
        <div
          ref={stripRef}
          className="relative flex items-center"
          style={{
            borderRadius: '99px',
            padding: '4px',
            gap: '2px',
            width: 'max-content',   // shrink to content, never wraps
            minWidth: '100%',       // but stretch to full width if content is narrow
          }}
        >
          <LiquidGlass />

          {/* Sliding glider pill */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              top: 4,
              bottom: 4,
              left: glider.left,
              width: glider.width,
              borderRadius: '99px',
              transition: ready
                ? 'left 0.28s cubic-bezier(0.34,1.2,0.64,1), width 0.28s cubic-bezier(0.34,1.2,0.64,1)'
                : 'none',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            <LiquidGlass shadowColor='shadow-[inset_2px_2px_2px_0_var(--color-secondary),inset_-2px_-2px_2px_0_var(--color-secondary)]!' />
          </span>

          {tabs.map((tab, i) => {
            const isActive = tab.id === activeId
            const isDisabled = tab.disabled

            return (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[i] = el }}
                role="tab"
                aria-selected={isActive}
                disabled={isDisabled}
                onClick={() => !isDisabled && handleSelect(tab.id)}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '99px',
                  border: 'none',
                  background: 'transparent',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  opacity: isDisabled ? 0.4 : 1,
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  lineHeight: 1,
                  whiteSpace: 'nowrap',  // tabs never wrap internally either
                  userSelect: 'none',
                  color: isActive ? 'var(--color-secondary)' : 'rgba(255,255,255,0.5)',
                  transition: 'color 0.2s ease',
                  outline: 'none',
                  flexShrink: 0,        // prevent individual tabs from squishing
                }}
              >
                {/* Optional icon */}
                {tab.icon && (
                  <span style={{ display: 'flex', flexShrink: 0 }}>
                    {tab.icon}
                  </span>
                )}

                {/* Label */}
                <span>{tab.label}</span>

                {/* Optional count badge */}
                {tab.badge !== undefined && (
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '99px',
                      background: isActive ? 'rgba(232,165,152,0.18)' : 'rgba(255,255,255,0.08)',
                      color: isActive ? 'var(--color-secondary)' : 'rgba(255,255,255,0.35)',
                      transition: 'background 0.2s ease, color 0.2s ease',
                      lineHeight: 1.4,
                    }}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Tab panel ────────────────────────────────────────────── */}
      {activeTab?.content != null && (
        <div
          className="flex-1 mt-4"
          style={{
            borderLeft:   '1px solid rgba(255,255,255,0.08)',
            borderRight:  '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            borderTop:    '1px solid rgba(255,255,255,0.08)',
            borderRadius: firstTabIsActive ? '0 8px 8px 8px' : '8px 8px 8px 8px',
            background: 'rgba(10,10,10,0.95)',
          }}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  )
}

export default Tabs
