import Hero from "@/components/common/Hero";
import BuiltScale from "@/components/homepage/BuiltScale";
import CtaSection from "@/components/common/CtaSection";
import FoundersSaying from "@/components/homepage/FoundersSaying";
import Methodology from "@/components/homepage/Methodology";
import WorkNeedle from "@/components/homepage/WorkNeedle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero badge="Premium Web Development Studio" heading="Building High-Performance <br class='sm:flex hidden' /> Sites for SaaS & Tech." para=" Stop losing users to slow load times and generic templates. CodeBlooms designs and develops custom, lightning-fast digital experiences using Next.js and React to scale your MRR and turn visitors into loyal users." btn1="Start Your Project" btn1Link="/start-project" btn2=" View Our Work" btn2Link="/work" />
      <BuiltScale />
      <WorkNeedle />
      <Methodology />
      <FoundersSaying />
      <CtaSection />
    </>
  );
}
