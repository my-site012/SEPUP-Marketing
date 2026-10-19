import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MarketingFunnel from "@/components/MarketingFunnel";
import AboutSection from "@/components/AboutSection";
import ExtendedTeamBanner from "@/components/ExtendedTeamBanner";
import ServicesGrid from "@/components/ServicesGrid";
import IndustriesGrid from "@/components/IndustriesGrid";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 pb-20 md:pb-0 bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO SECTION */}
          <Hero />

          {/* SECTION 2: CANADIAN LOCAL PROOF STRIP */}
          <TrustBar />

          {/* SECTION 3: 4-PILLAR CUSTOMER LIFECYCLE (ATTRACT, ENGAGE, CONVERT, RETAIN) */}
          <MarketingFunnel />

          {/* SECTION 4: ABOUT US & FOUNDER SPOTLIGHT (GARVITA UPPAL) */}
          <AboutSection />

          {/* SECTION 5: "YOUR EXTENDED MARKETING TEAM" BANNER */}
          <ExtendedTeamBanner />

          {/* SECTION 6: 11 CORE SERVICES */}
          <ServicesGrid />

          {/* SECTION 7: SPECIALIZED CANADIAN SMB VERTICALS */}
          <IndustriesGrid />

          {/* SECTION 8: 4-STEP HONEST PROCESS */}
          <ProcessSection />

          {/* SECTION 9: WHY CLIENTS CHOOSE US (7 USPS) */}
          <WhyUsSection />

          {/* SECTION 10: PORTFOLIO & WORK SAMPLES (ROUND 2) */}
          <PortfolioGrid />

          {/* SECTION 11: TESTIMONIALS & REVIEWS (GOOGLE & LINKEDIN) */}
          <Testimonials />

          {/* SECTION 12: CALL TO ACTION BANNER */}
          <CTASection />

          {/* SECTION 13: CONTACT & MISSISSAUGA OFFICE LOCATION */}
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
