import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import IndustriesGrid from "@/components/IndustriesGrid";
import ProcessSection from "@/components/ProcessSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import MetricsSection from "@/components/MetricsSection";
import WhyUsSection from "@/components/WhyUsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO SECTION */}
          <Hero />

          {/* SECTION 2: TRUST / PROOF STRIP */}
          <TrustBar />

          {/* SECTION 3: ABOUT / POSITIONING */}
          <AboutSection />

          {/* SECTION 4: CORE SERVICES */}
          <ServicesGrid />

          {/* SECTION 5: SPECIALIZED VERTICALS / INDUSTRIES */}
          <IndustriesGrid />

          {/* SECTION 6: ENGINEERED WORKFLOW / PROCESS */}
          <ProcessSection />

          {/* SECTION 7: SELECTED WORK / PORTFOLIO */}
          <PortfolioGrid />

          {/* SECTION 8: RESULTS & EXECUTIVE METRICS BANNER */}
          <MetricsSection />

          {/* SECTION 9: WHY BUSINESSES CHOOSE US */}
          <WhyUsSection />

          {/* SECTION 10: EXECUTIVE FEEDBACK / TESTIMONIALS */}
          <Testimonials />

          {/* SECTION 11: CALL TO ACTION (CTA) HERO BANNER */}
          <CTASection />

          {/* SECTION 12: INITIATE ENGAGEMENT / CONTACT */}
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
