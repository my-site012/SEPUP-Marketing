import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_TRUST_ITEMS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative w-full pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-surface">
      {/* Ambient Radial Glow with Brand Colors */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#f87b7b]/25 via-[#4ecdc4]/15 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-space-sm z-10">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-low border border-[#f87b7b]/20 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f87b7b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f43f5e]" />
              </span>
              <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-[#e11d48] uppercase">
                Step Up Marketing • Digital Growth Partner
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-[28px] sm:text-4xl lg:text-[46px] font-extrabold text-on-surface tracking-tight leading-[1.15] max-w-2xl">
              Turn Your Digital Presence Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f87b7b] via-[#fb923c] to-[#4ecdc4]">
                Real Business Growth
              </span>
              .
            </h1>

            {/* Body Description */}
            <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-on-surface-variant max-w-xl">
              We build high-performing websites, search strategies, AI-powered experiences, and targeted acquisition campaigns designed to capture demand, accelerate qualified pipelines, and scale enterprise revenue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-space-sm pt-space-xs w-full sm:w-auto">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e] hover:opacity-95 text-on-primary font-label-lg text-label-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group font-bold text-center"
              >
                <span>Get a Free Strategy Call</span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-surface-container-lowest hover:bg-[#fff1f2] border border-[#f87b7b]/20 text-on-surface font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all duration-200 font-semibold text-center"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Trust Badges Under CTA */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-space-md text-on-surface-variant">
              {HERO_TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-2 font-label-md text-label-md">
                  <span
                    className="material-symbols-outlined text-[18px] material-symbols-filled"
                    style={{ color: item.color }}
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Stage with Floating Glass Cards */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1WZUyDCDm5z35boHaN70aKIVV9EjdbU5xEG5H1P45y9Av-QgrKO2SqtFouf4nhOnC8B0rS58D0Zohhi6dvFYo3UHZmKH7OAT8BPG9VyjoLdnelOfHQzWEmfR_0PYynu5l6HdKdorXGUL6UV2Ptd8WBv9csFuFlI_aJNtd1mtPcx0c7ElknyKoIIwkUupU9YEVik_YjfmSISG6PHgH74ZH1TC2gMovyULaTibVZBUUBJ7FlY7xpVB50GLck"
                alt="Two modern technology leaders analyzing analytical charts and architecture blueprints inside a glass oceanfront boardroom with floor to ceiling windows over coastal cliffs"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent pointer-events-none" />

              {/* Overlaid Top Meta on Background - Clear of bottom floating card */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 text-on-primary flex items-center justify-between z-10 pointer-events-none">
                <div className="bg-slate-950/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm max-w-[70%] sm:max-w-none">
                  <p className="font-label-eyebrow text-[10px] sm:text-[11px] uppercase tracking-wider text-[#fda4af] font-semibold truncate flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f87b7b] shrink-0" />
                    Step Up Execution Snapshot • Q3 Global Omnichannel
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-on-primary font-label-md text-[10px] sm:text-[11px] border border-white/15 font-semibold shrink-0">
                  99.8% SLA
                </span>
              </div>
            </div>

            {/* Floating Glass Card 1 (Top Left Overlap - responsive bounds) */}
            <div
              className="absolute -top-3 left-1 sm:-top-5 sm:-left-8 bg-surface-container-lowest/95 backdrop-blur-xl p-2.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3.5 max-w-[190px] sm:max-w-[260px] border border-[#f87b7b]/20 z-20"
            >
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-[#ffe4e6] flex items-center justify-center text-[#e11d48] shrink-0">
                <span className="material-symbols-outlined text-[16px] sm:text-[22px]" aria-hidden="true">
                  trending_up
                </span>
              </div>
              <div>
                <p className="font-label-md text-[11px] sm:text-label-md text-on-surface font-bold leading-tight">
                  +240% Organic Lift
                </p>
                <p className="font-body-sm text-[10px] sm:text-[12px] text-on-surface-variant">
                  Top-tier search authority
                </p>
              </div>
            </div>

            {/* Floating Glass Card 2 (Bottom Right Overlap - clean, non-overlapping) */}
            <div className="absolute -bottom-4 right-1 sm:-bottom-6 sm:-right-6 bg-surface-container-lowest/95 backdrop-blur-xl p-2.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3.5 max-w-[200px] sm:max-w-[270px] border border-[#4ecdc4]/30 z-20">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-[#ccfbf1] flex items-center justify-center text-[#0d9488] shrink-0">
                <span className="material-symbols-outlined text-[16px] sm:text-[22px]" aria-hidden="true">
                  smart_toy
                </span>
              </div>
              <div>
                <p className="font-label-md text-[11px] sm:text-label-md text-on-surface font-bold leading-tight">
                  Ranked #1 in GEO
                </p>
                <p className="font-body-sm text-[10px] sm:text-[12px] text-on-surface-variant">
                  SearchGPT &amp; Perplexity citations
                </p>
              </div>
            </div>

            {/* Floating Pill 3 (Top Right Corner - hidden on small phones) */}
            <div className="hidden sm:flex absolute top-10 -right-4 bg-gradient-to-r from-[#f87b7b] to-[#f43f5e] text-on-primary px-3.5 py-1.5 rounded-full shadow-lg items-center gap-2 z-20">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                bolt
              </span>
              <span className="font-label-md text-[12px] font-bold">
                3.8x Pipeline Velocity
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
