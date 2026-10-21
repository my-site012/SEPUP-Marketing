import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  BRAND,
  FOUNDER_INFO,
  CORE_VALUES,
  ADVANTAGES,
  INDUSTRIES,
  HERO_TRUST_ITEMS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Step Up Marketing - Mississauga & GTA Marketing Partner",
  description:
    "Learn about Step Up Marketing, our founder Garvita Uppal, our boutique Canadian approach, core values, and hands-on marketing execution for growing SMBs.",
  keywords: [
    "About Step Up Marketing",
    "Garvita Uppal",
    "Digital Marketing Agency Mississauga",
    "Boutique Marketing Toronto",
    "GTA Marketing Consultant",
    "Small Business Marketing Canada",
  ],
  alternates: {
    canonical: "https://www.stepupmarketing.ca/about",
  },
  openGraph: {
    title: "About Us | Step Up Marketing - Boutique Digital Growth Partner",
    description:
      "Founded by Garvita Uppal, Step Up Marketing helps Canadian SMBs in Mississauga & GTA scale with honest guidance, practical strategy, and end-to-end execution.",
    url: "https://www.stepupmarketing.ca/about",
    siteName: BRAND.name,
    images: [
      {
        url: "/founder.png",
        width: 800,
        height: 1000,
        alt: "Garvita Uppal - Founder & Principal Consultant at Step Up Marketing",
      },
    ],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Step Up Marketing",
    description: BRAND.shortOverview,
    url: "https://www.stepupmarketing.ca/about",
    mainEntity: {
      "@type": "Organization",
      name: BRAND.name,
      founder: {
        "@type": "Person",
        name: FOUNDER_INFO.name,
        jobTitle: FOUNDER_INFO.title,
        image: `https://www.stepupmarketing.ca${FOUNDER_INFO.photo}`,
        sameAs: BRAND.socialLinks.founderLinkedin,
      },
      foundingDate: FOUNDER_INFO.foundedYear,
      address: {
        "@type": "PostalAddress",
        streetAddress: "3504 Hurontario Street #3008",
        addressLocality: "Mississauga",
        addressRegion: "Ontario",
        postalCode: "L5B 0B9",
        addressCountry: "CA",
      },
      telephone: BRAND.phoneTel,
      email: BRAND.email,
    },
  };

  return (
    <>
      <Header />
      <main className="w-full pt-20 pb-20 md:pb-0 bg-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />


        {/* Hero Section */}
        <section className="relative w-full pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#fff5f5] via-surface to-surface">
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#f87b7b]/20 via-[#4ecdc4]/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
            aria-hidden="true"
          />

          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-[#f87b7b]/20 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f87b7b] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f43f5e]"></span>
                </span>
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-[#e11d48] uppercase font-bold text-xs">
                  About Step Up Marketing • Mississauga & GTA
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.18]">
                Supporting Growing Businesses Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e]">
                  Scale With Marketing
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Step Up Marketing is a boutique digital marketing agency supporting small and medium-sized businesses in GTA (Greater Toronto Area) with practical marketing strategies, creative solutions, and hands-on execution.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {HERO_TRUST_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#f87b7b]/20 shadow-xs text-xs font-semibold text-slate-800"
                  >
                    <span
                      className="material-symbols-outlined text-[16px]"
                      style={{ color: item.color }}
                    >
                      check_circle
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e] hover:opacity-95 text-white font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <span>Book Free Discovery Call</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <a
                  href="#founder"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold shadow-xs transition-all"
                >
                  <span>Meet Our Founder</span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Spotlight: Garvita Uppal */}
        <section className="w-full py-16 lg:py-24 bg-surface" id="founder">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Founder Image Frame */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-3 bg-gradient-to-tr from-rose-200/50 via-amber-100/40 to-teal-100/50 rounded-[2.5rem] blur-xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={FOUNDER_INFO.photo}
                      alt="Garvita Uppal - Founder & Principal Consultant of Step Up Marketing"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-white/60">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e] animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-900">10+ Years Marketing Experience</span>
                  </div>

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-xl flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {FOUNDER_INFO.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#e11d48]">
                        {FOUNDER_INFO.title}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        Mississauga, Ontario, Canada • Founded in {FOUNDER_INFO.foundedYear}
                      </p>
                    </div>
                    <a
                      href={BRAND.socialLinks.founderLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#0077b5] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                      aria-label="Garvita Uppal LinkedIn Profile"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder Story & Message */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffe4e6] text-[#e11d48] font-bold text-xs uppercase tracking-wider w-max">
                  Founder Spotlight
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  How and Why Step Up Marketing Was Started
                </h2>

                <div className="text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed">
                  <p>
                    Step Up Marketing was founded in 2025 by <strong className="text-slate-900 font-bold">Garvita Uppal</strong>, a marketing professional with close to a decade of experience in digital marketing, advertising, and business growth.
                  </p>
                  <p>
                    After working closely with businesses across different industries, Garvita recognized a common challenge: many business owners are excellent at what they do but struggle to find the time, expertise, or reliable support needed to market their businesses effectively.
                  </p>
                  <p>
                    Some don&apos;t know where to start. Others have invested in marketing without understanding where their money went or what results they received.
                  </p>
                  <p>
                    <strong>Step Up Marketing was created to bridge that gap.</strong> The goal was to make professional marketing more accessible, transparent, and practical for growing businesses, giving them access to experienced marketing support without the cost of building an entire in-house department.
                  </p>
                </div>

                {/* Founder Biography Box */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                  <h3 className="text-base font-bold text-slate-900">
                    About Garvita Uppal
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {FOUNDER_INFO.bio}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all"
                  >
                    <span>Connect With Garvita</span>
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                  </Link>
                  <a
                    href={`tel:${BRAND.phoneTel}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-rose-50 hover:bg-rose-100 text-primary font-semibold text-sm border border-rose-200/70 transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    <span>{BRAND.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-16 bg-[#fff5f5]/60 border-y border-[#f87b7b]/15">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e11d48]">
                Purpose & Direction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Mission Card */}
              <div className="p-8 rounded-3xl bg-white border border-[#f87b7b]/20 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f87b7b] to-[#f43f5e] text-white flex items-center justify-center shadow-md mb-6">
                  <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
                </div>
                <span className="text-xs font-bold text-[#e11d48] uppercase tracking-wider">
                  Our Mission
                </span>
                <p className="text-lg text-slate-800 leading-relaxed font-semibold mt-2">
                  &ldquo;{FOUNDER_INFO.mission}&rdquo;
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-8 rounded-3xl bg-white border border-[#4ecdc4]/30 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#4ecdc4] to-[#0d9488] text-white flex items-center justify-center shadow-md mb-6">
                  <span className="material-symbols-outlined text-[28px]">visibility</span>
                </div>
                <span className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">
                  Our Vision
                </span>
                <p className="text-lg text-slate-800 leading-relaxed font-semibold mt-2">
                  &ldquo;{FOUNDER_INFO.vision}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values (Exactly 6 Values from Client Document) */}
        <section className="w-full py-16 lg:py-24 bg-surface" id="values">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e11d48]">
                Guiding Principles
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Our Core Values
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                The principles that govern our interactions with every business owner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#fff5f5] text-[#e11d48] border border-[#f87b7b]/20 flex items-center justify-center mb-5 shadow-xs">
                      <span className="material-symbols-outlined text-[24px]">
                        {val.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#e11d48] uppercase tracking-wider">
                    <span>Value #{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main USP / What Makes Step Up Marketing Different (7 Points from Client Doc) */}
        <section className="w-full py-16 lg:py-24 bg-white border-t border-slate-100" id="different">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e11d48]">
                What Makes Us Different
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Your Outsourced Marketing Department
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Step Up Marketing supports business owners who have worked hard to build something real and want a trusted partner to help more people find it. We combine strategic marketing guidance with hands-on execution — without the full-time overhead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADVANTAGES.map((adv, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:shadow-md hover:border-[#f87b7b]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl ${adv.iconBg} ${adv.iconColor} flex items-center justify-center shadow-xs`}>
                        <span className="material-symbols-outlined text-[22px]">
                          {adv.icon}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200/80 shadow-2xs">
                        {adv.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served (Exact 8 Sectors from Client Document) */}
        <section className="w-full py-16 bg-[#fff5f5]/50 border-t border-[#f87b7b]/15">
          <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#e11d48]">
                  Industries Served
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Customer Types & Industries We Support
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Supporting established small and medium-sized businesses across Mississauga, Toronto, and Canada.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e11d48] hover:underline shrink-0"
              >
                <span>View Our Services</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#f87b7b]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#e11d48] uppercase tracking-wider block mb-1">
                      {ind.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {ind.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>{ind.statBadge}</span>
                    <span className="material-symbols-outlined text-[14px] text-emerald-500">check</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
