import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Tracks } from "@/components/sections/Tracks";
import { Rfs } from "@/components/sections/Rfs";
import { FirmProfiles } from "@/components/sections/FirmProfiles";
import { FundingLadder } from "@/components/sections/FundingLadder";
import { Teams } from "@/components/sections/Teams";
import { PrizesJudges } from "@/components/sections/PrizesJudges";
import { RunOfShow } from "@/components/sections/RunOfShow";
import { Venue } from "@/components/sections/Venue";
import { Partners } from "@/components/sections/Partners";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Tracks />
        <Rfs />
        <FirmProfiles />
        <FundingLadder />
        <Teams />
        <PrizesJudges />
        <RunOfShow />
        <Venue />
        <Partners />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
