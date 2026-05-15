"use client"

import Image from 'next/image'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'
import WorkNeedle from '../homepage/WorkNeedle'

const caseStudiesData = [
  {
    id: "finflow",
    title: "FinFlow",
    category: "AI FinTech SaaS",
    image: "/images/cs-finflow.jpg",
    description: "Rebuilt a sluggish template site into a hyper-focused, conversion-driven landing page with interactive financial chart animations.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    results: [
      { metric: "215%", label: "More Sign-ups" },
      { metric: "98", label: "Lighthouse Score" },
    ]
  },
  {
    id: "nexus",
    title: "Nexus AI",
    category: "Startup Web App",
    image: "/images/cs-nexus.jpg",
    description: "Launched a premium dark-mode MVP frontend in 4 weeks, helping secure $12M Series A with zero downtime during scale.",
    techStack: ["React", "TypeScript", "D3.js"],
    results: [
      { metric: "4 Wks", label: "To MVP Launch" },
      { metric: "$12M", label: "Series A Raised" },
    ]
  },
  {
    id: "lumina",
    title: "Lumina",
    category: "Headless E-Commerce",
    image: "/images/cs-lumina.jpg",
    description: "Migrated a legacy CMS to Jamstack architecture, delivering 3x faster loads and flawless performance during 100k+ visitor spikes.",
    techStack: ["Next.js SSG", "Shopify API", "Sanity CMS"],
    results: [
      { metric: "3x", label: "Faster Load" },
      { metric: "28%", label: "More Conversions" },
    ]
  },
  {
    id: "medvault",
    title: "MedVault",
    category: "HealthTech Platform",
    image: "/images/cs-medvault.jpg",
    description: "Built a HIPAA-compliant patient portal with real-time analytics, reducing data retrieval time by 60% for healthcare providers.",
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    results: [
      { metric: "60%", label: "Faster Retrieval" },
      { metric: "99.9%", label: "Uptime" },
    ]
  }
]

const Portfolio = () => {
  return (
    <div className='lg:pt-50 md:pt-40 sm:pt-30 pt-20 px-5 relative overflow-x-clip'>
      <div className="max-w-[1036px] mx-auto w-full">
        <WorkNeedle />
      </div>
    </div>
  )
}

export default Portfolio