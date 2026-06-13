import { Project } from "@/types/type"

export const SECONDARY_COLOR = "#67E8F9"
export const BUILD_GROWTH_DATA = [
    {
        image: "/assets/images/webp/saas-website-img.webp",
        title: "SaaS Websites & Landing Pages",
        description: "High-converting, user-centric landing pages engineered to clearly articulate your value and drive immediate sign- ups."
    },
    {
        image: "/assets/images/webp/modern-frontend-development.webp",
        title: "Modern Frontend Development",
        description: "Scalable, headless frontend architectures built with React and Next.js for lightning-fast, native-like experiences."
    },
    {
        image: "/assets/images/webp/performance-optimization.webp",
        title: "Performance Optimization",
        description: "Strategic codebase refactoring to master Core Web Vitals, boosting SEO rankings and user retention."
    },
    {
        image: "/assets/images/webp/saas-website-img.webp",
        title: "SaaS Websites & Landing Pages",
        description: "High-converting, user-centric landing pages engineered to clearly articulate your value and drive immediate sign- ups."
    },
    {
        image: "/assets/images/webp/modern-frontend-development.webp",
        title: "Modern Frontend Development",
        description: "Scalable, headless frontend architectures built with React and Next.js for lightning-fast, native-like experiences."
    },
    {
        image: "/assets/images/webp/performance-optimization.webp",
        title: "Performance Optimization",
        description: "Strategic codebase refactoring to master Core Web Vitals, boosting SEO rankings and user retention."
    },
]
export const TECH_STACK_DATA = [
    {
        category: "Frontend:",
        technologies: "React, Next.js, TypeScript"
    },
    {
        category: "Styling:",
        technologies: "Tailwind CSS, Framer Motion"
    },
    {
        category: "CMS / Backend:",
        technologies: "Sanity, Strapi, Supabase"
    },
    {
        category: "Hosting & CI/CD:",
        technologies: "Vercel, AWS"
    }
]
export const METHODOLOGY_STEPS = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your target audience, business goals, and current bottlenecks. We define the technical architecture and user journey before a single line of code is written."
    },
    {
        number: "02",
        title: "High-Fidelity Prototyping",
        description: "We transform strategic insights into interactive wireframes and premium UI/UX designs, ensuring perfect alignment with your brand's DNA and conversion goals."
    },
    {
        number: "03",
        title: "Agile Development",
        description: "This is where the magic happens. We build your site using modern, scalable frameworks (Next.js/React). You get weekly progress updates and staging links to see your product come to life."
    },
    {
        number: "04",
        title: "QA, Optimization & Launch",
        description: "Rigorous cross-browser testing, accessibility audits, and Core Web Vitals optimization. We ensure a flawless deployment that search engines love and users trust."
    }
]
export const NAV_LINKS = [
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
]
export const ETHOS_DATA = [
    {
        title: "Our Mission",
        description: "To empower visionary tech founders by providing world-class, conversion-engineered digital platforms that accelerate growth and dominate markets."
    },
    {
        title: "Our Vision",
        description: "To be the definitive technical partner for the next generation of unicorn SaaS companies, setting the gold standard for modern web performance."
    },
    {
        title: "Core Values",
        values: [
            { label: "Performance First:", text: "Speed is a feature." },
            { label: "Radical Transparency:", text: "No black-box development." },
            { label: "Pixel-Perfect Precision:", text: "Detail obsession." }
        ]
    }
]
export const FEATURES_DATA = [
    {
        title: "Business-First Engineering",
        description: "We don't write code in a vacuum. Every technical decision—from framework choice to animation logic—is tied directly to your MRR, lead generation, and user retention goals."
    },
    {
        title: "Modern, Scalable Architecture",
        description: "Say goodbye to bloated legacy builders. We utilize the modern JAMstack, ensuring your site is secure, infinitely scalable, and incredibly fast worldwide."
    },
    {
        title: "Seamless Founder Experience",
        description: "We speak startup. We understand burn rates, funding rounds, and the need for rapid iterations. Our communication is asynchronous, clear, and focused on momentum."
    }
]
export const TESTIMONIALS_DATA = [
    {
        quote: "Working together was a seamless experience. The designs were beautiful and user-focused, and our website traffic improved noticeably.",
        name: "Thoms Alva",
        title: "Ceo Of Bingo",
        image: "/assets/images/webp/client_avatar_1.webp",
        angle: 5,
    },
    {
        quote: "The team delivered beyond expectations. Their attention to detail and creative vision transformed our entire digital presence.",
        name: "David Chen",
        title: "Ceo Of Bingo",
        image: "/assets/images/webp/client_avatar_2.webp",
        angle: -7,
    },
    {
        quote: "Exceptional collaboration from start to finish. The final product exceeded all our benchmarks and delighted our users.",
        name: "Elena Rodriguez",
        title: "Ceo Of Bingo",
        image: "/assets/images/webp/client_avatar_3.webp",
        angle: -6,
    },
    {
        quote: "Professional, creative, and incredibly responsive. They turned our vague ideas into a stunning reality that drives results.",
        name: "Marcus Johnson",
        title: "Ceo Of Bingo",
        image: "/assets/images/webp/client_avatar_4.webp",
        angle: 9,
    },
]
export const FAQ_DATA = [
    {
        id: 1,
        question: "Do you work with WordPress or Webflow?",
        answer: "We are strictly a code-first studio. We specialize in React and Next.js because they offer unparalleled performance, security, and scalability that visual builders cannot match for enterprise or high-growth tech brands."
    },
    {
        id: 2,
        question: "What are your payment terms?",
        answer: "Typically, we operate on a 50% upfront deposit to secure your spot in our development schedule, followed by 25% at a major project milestone, and the final 25% prior to deployment."
    },
    {
        id: 3,
        question: "Will I be able to edit the content myself?",
        answer: "Absolutely. For the Growth and Premium tiers, we integrate a modern headless CMS (like Sanity) tailored to your exact data structure. This gives your marketing team complete control over copy and images without touching code."
    },
    {
        id: 4,
        question: "How long does a typical project take?",
        answer: "Project timelines vary by scope. Starter projects typically take 3-4 weeks, Growth projects 6-8 weeks, and Premium custom applications 10+ weeks. We will provide a crystal clear timeline before kicking off."
    },
    {
        id: 5,
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer flexible post-launch retainer options and maintenance packages to ensure your platform remains secure, up-to-date, and continues to evolve with your business."
    }
]
export const PRICING_DATA = [
    {
        id: "starter",
        title: "Starter",
        price: "$150",
        prevPrice: "$250",
        features: [
            "High-converting single-page architecture",
            "Custom UI/UX Design (No templates)",
            "Next.js & Tailwind CSS development",
            "Lead capture form integration",
            "Basic on-page SEO setup"
        ],
    },
    {
        id: "growth",
        title: "Growth",
        price: "$400",
        prevPrice: "$550",
        features: [
            "Up to 8-page custom architecture",
            "Premium animations & interactions",
            "Headless CMS integration",
            "Blog / Resource center setup",
            "Advanced technical SEO & schema",
            "Core Web Vitals guarantee"
        ]
    },
    {
        id: "premium",
        title: "Premium",
        price: "Custom",
        prevPrice: "Custom",
        features: [
            "Unlimited pages / App views",
            "Complex API integrations",
            "User authentication & UI",
            "E-commerce / Headless Shopify",
            "Dedicated QA & testing",
            "Post-launch retainer options"
        ]
    }
]
export const SERVICES_DATA = [
    {
        id: "custom-web",
        title: "Custom Website Development",
        description: "We architect bespoke websites from the ground up — tailored to your user personas, optimized for search engines, and built with clean, scalable code.",
        benefits: ["100% unique brand positioning", "Future-proof architecture", "Seamless API integrations"],
        cta: "Build Your Custom Site"
    },
    {
        id: "saas-landing",
        title: "SaaS Landing Page Development",
        description: "Conversion-focused landing pages built with behavioral psychology. We structure content, micro-interactions, and CTAs to guide users toward conversion.",
        benefits: ["Lower acquisition cost", "Higher lead quality", "A/B testing ready"],
        cta: "Optimize Conversions"
    },
    {
        id: "frontend-dev",
        title: "Frontend Development",
        description: "We leverage React and Next.js to build modular, component-driven interfaces. Separating data from presentation for ultimate speed and flexibility.",
        benefits: ["App-like speed", "Reusable components", "Enhanced dev velocity"],
        cta: "Upgrade Your Frontend"
    },
    {
        id: "redesign",
        title: "Website Redesign",
        description: "A strategic overhaul — we rethink the user experience, update the tech stack, and align the aesthetic with your premium market positioning.",
        benefits: ["Modernized perception", "Improved credibility", "Enterprise-ready"],
        cta: "Revamp Your Brand"
    },
    {
        id: "performance",
        title: "Performance Optimization",
        description: "A deep-dive technical audit. We optimize image delivery, eliminate render-blocking resources, and implement advanced caching strategies.",
        benefits: ["Near-instant loads", "Higher SEO rankings", "Decreased bounce rates"],
        cta: "Boost Your Speed"
    }
]
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "ShopMetrics Dashboard",
        category: "E-Commerce",
        description:
            "A high-performance analytics dashboard that cut acquisition costs by 38% with real-time conversion insights.",
        tags: ["Next.js", "TypeScript", "Recharts"],
        image: "/assets/images/webp/project-img-1.webp",
        metric: "+38%",
        metricLabel: "Conversion Rate",
        link: "#",
    },
    {
        id: 2,
        title: "FlowAI Landing Page",
        category: "SaaS",
        description:
            "Crafted a stunning SaaS landing page with micro-animations that boosted sign-up rates by 52%.",
        tags: ["React", "GSAP", "Framer Motion"],
        image: "/assets/images/webp/project-img-2.webp",
        metric: "+52%",
        metricLabel: "Sign-up Rate",
        link: "#",
    },
    {
        id: 3,
        title: "Luxe Storefront",
        category: "E-Commerce",
        description:
            "A premium luxury fashion store with immersive product experiences that increased AOV by 61%.",
        tags: ["Shopify", "Liquid", "GSAP"],
        image: "/assets/images/webp/project-img-3.webp",
        metric: "+61%",
        metricLabel: "Avg. Order Value",
        link: "#",
    },
    {
        id: 4,
        title: "Nexus Agency Site",
        category: "Web Design",
        description:
            "A bold creative agency portfolio with scroll-driven storytelling and 3D canvas interactions.",
        tags: ["Next.js", "Three.js", "Lenis"],
        image: "/assets/images/webp/project-img-4.webp",
        metric: "3.2s",
        metricLabel: "Avg. Session Time",
        link: "#",
    },
    {
        id: 5,
        title: "Cloth Store",
        category: "Web Design",
        description:
            "A bold creative agency portfolio with scroll-driven storytelling and 3D canvas interactions.",
        tags: ["Next.js", "Three.js", "Lenis"],
        image: "/assets/images/webp/project-img-5.webp",
        metric: "3.2s",
        metricLabel: "Avg. Session Time",
        link: "#",
    },
    {
        id: 6,
        title: "Frosty Delights Corn",
        category: "Branding",
        description:
            "A bold creative agency portfolio with scroll-driven storytelling and 3D canvas interactions.",
        tags: ["Next.js", "Three.js", "Lenis"],
        image: "/assets/images/webp/project-img-6.webp",
        metric: "3.2s",
        metricLabel: "Avg. Session Time",
        link: "#",
    }
];