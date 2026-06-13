import Hero from "@/components/common/Hero";
import dynamic from 'next/dynamic';

const BuiltScale = dynamic(() => import("@/components/homepage/BuiltScale"));
const CtaSection = dynamic(() => import("@/components/common/CtaSection"));
const FoundersSaying = dynamic(() => import("@/components/homepage/FoundersSaying"));
const Methodology = dynamic(() => import("@/components/homepage/Methodology"));
const WorkNeedle = dynamic(() => import("@/components/homepage/WorkNeedle"));

export default function Home() {
  return (
    <>
      <Hero badge="Premium Web Development Studio" heading="Building High-Performance Sites for" headingClassName="max-w-[900px]" para=" Stop losing users to slow load times and generic templates. Clear Orbit designs and develops custom, lightning-fast digital experiences using Next.js and React to scale your MRR and turn visitors into loyal users." btn1="Start Your Project" btn1Link="/contact" btn2=" View Our Work" btn2Link="/portfolio" highlightLabelText="SaaS & Tech." />
      <BuiltScale />
      <WorkNeedle />
      <Methodology />
      <FoundersSaying />
      <CtaSection />
    </>
  );
}
