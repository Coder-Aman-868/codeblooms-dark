"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "../common/Icons";
import Button from "../common/Button";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Tabs, { TabItem } from "../common/Tabs";
import LiquidGlass from "../common/LiquidGlass";
import { Project, Tab } from "@/types/type";
import { PROJECTS } from "@/helper/helper";
import Badge from "../common/Badge";

/* ─────────────────── Data ─────────────────── */

const TABS = ["All", "Web Design", "E-Commerce", "SaaS", "Branding"] as const;

/* ─────────────────── Sub-components ─────────────────── */

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-border group relative after:rounded-2xl before:rounded-2xl rounded-2xl overflow-hidden flex flex-col gap-3 p-1 relative">
      <LiquidGlass className="rounded-2xl!" />
      {/* Body */}
      <div className="flex relative duration-300 bg-black/10 flex-col flex-1 py-2! px-3! gap-3 w-full">
        <div className="flex items-center justify-between relative z-10">
          <Badge>{project.tags[0]}</Badge>
          <Link href={project.link} aria-label={`View ${project.title}`}>
            <div className="px-2! py-2! rounded-[999px] relative group">
              <LiquidGlass />
              <span className="transition-transform duration-200">
                <Icons className="rotate-[135deg] size-5 scale-120" icon="arrowIcon" />
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white/95 font-semibold text-base leading-snug">
            {project.title}
          </h3>
          <Paragraph className="line-clamp-2 text-xs!">{project.description}</Paragraph>
        </div>
      </div>
      {/* Image area */}
      <div className="relative h-40 overflow-hidden bg-white/5 rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

/* ─────────────────── Project grid ─────────────────── */

function ProjectGrid({ projects, animKey }: { projects: Project[]; animKey: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // Fade in whenever animKey changes (i.e. tab switches)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    const raf = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.25s ease, transform 0.25s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return () => cancelAnimationFrame(raf);
  }, [animKey]);

  return (
    <div ref={ref} className="pt-5 sm:pt-6" style={{ willChange: "opacity, transform" }}>
      {projects.length === 0 ? (
        <div className="text-white/30 text-center py-20 text-lg font-medium">
          No projects in this category yet.
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────── Main component ─────────────────── */

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [displayed, setDisplayed] = useState<Project[]>(PROJECTS);

  const handleTabChange = (id: string) => {
    const tab = id as Tab;
    if (tab === activeTab) return;
    setActiveTab(tab);
    const next = tab === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === tab);
    setDisplayed(next);
  };

  const tabItems: TabItem[] = TABS.map((tab) => ({
    id: tab,
    label: tab,
    badge:
      tab === "All"
        ? PROJECTS.length
        : PROJECTS.filter((p) => p.category === tab).length,
    content: null,
  }));

  return (
    <section className="lg:pb-37.5 md:pb-30 sm:pb-20 pb-15 px-5 relative overflow-x-clip">
      <div className="max-w-[988px] mx-auto w-full flex flex-col items-center gap-10">

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-3 max-w-[700px] mx-auto text-center">
          <Heading
            animate
            Tag="h2"
            className="lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-light text-center tracking-tight text-white! bg-transparent!"
          >
            Work that Moves the Needle.
          </Heading>
          <Paragraph animate>
            Every project is a case study in performance. Browse by category and
            see the data behind the design.
          </Paragraph>
        </div>

        {/* ── Tabs strip + Grid ── */}
        <div className="w-full flex flex-col">
          <Tabs
            tabs={tabItems}
            defaultActiveId="All"
            onTabChange={handleTabChange}
            className="w-full"
          />
          {/*
            key=activeTab forces React to fully unmount the old grid
            and mount a fresh one → old cards are guaranteed gone before
            new ones appear. The fade-in is handled inside ProjectGrid.
          */}
          <ProjectGrid key={activeTab} projects={displayed} animKey={activeTab} />
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <p className="text-white/40 text-sm">
            Have a project in mind? Let&apos;s talk.
          </p>
          <Link href="/contact">
            <Button secondary>Start Your Project →</Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
