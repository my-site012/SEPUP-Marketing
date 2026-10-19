import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_TRUST_ITEMS, BRAND } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative w-full pt-8 pb-16 lg:pt-14 lg:pb-28 overflow-hidden bg-surface">
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
              <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-[#e11d48] uppercase font-bold">
                Boutique Digital Marketing Agency • Mississauga &amp; GTA
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-[28px] sm:text-4xl lg:text-[44px] font-extrabold text-on-surface tracking-tight leading-[1.16] max-w-2xl">
              Supporting Businesses Ready To Scale With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f87b7b] via-[#fb923c] to-[#4ecdc4]">
                Marketing Strategy &amp; Execution
              </span>
              .
            </h1>

            {/* Body Description */}
            <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-on-surface-variant max-w-xl">
              Step Up Marketing is your outsourced marketing department without the full-time overhead. We support small and medium-sized businesses across Mississauga, Toronto, and the GTA with practical strategies, creative solutions, and hands-on execution.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-space-sm pt-space-xs w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e] hover:opacity-95 text-on-primary font-label-lg text-label-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group font-bold text-center"
              >
                <span>Book a Free Strategy Call</span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-surface-container-lowest hover:bg-[#fff1f2] border border-[#f87b7b]/20 text-on-surface font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all duration-200 font-semibold text-center"
              >
                <span>Explore Our 11 Services</span>
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

          {/* Right Column: Canadian Boutique Growth Hub Preview */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-rose-200/40 via-amber-100/30 to-teal-100/40 rounded-[2.5rem] blur-2xl -z-10" />

            {/* Main Stage Frame */}
            <div className="rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Studio Window Header */}
              <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                    stepupmarketing.ca • mississauga, on
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-semibold text-emerald-300">
                    Boutique Marketing Hub
                  </span>
                </div>
              </div>

              {/* Stage Body */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Agency Snapshot Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50/70 to-teal-50/50 border border-slate-200/60">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Your Outsourced Marketing Team
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white text-[11px] font-bold text-rose-600 border border-rose-100 shadow-2xs">
                      1 Point of Contact
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strategy, website management, Google local rankings, social media, content shoots, and advertising coordinated for you.
                  </p>
                </div>

                {/* 4 Pillars Quick Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#f43f5e] mb-1">
                      <span className="material-symbols-outlined text-[15px]">campaign</span>
                      <span>ATTRACT</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Branding, Websites, Local SEO &amp; AI Search
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d9488] mb-1">
                      <span className="material-symbols-outlined text-[15px]">groups</span>
                      <span>ENGAGE</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Social Media, Reels &amp; Photo/Video Shoots
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#ea580c] mb-1">
                      <span className="material-symbols-outlined text-[15px]">ads_click</span>
                      <span>CONVERT</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Google Search Ads, Meta Ads &amp; Landing Pages
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#6366f1] mb-1">
                      <span className="material-symbols-outlined text-[15px]">sync</span>
                      <span>RETAIN</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Email Marketing, Reviews &amp; Client Loyalty
                    </p>
                  </div>
                </div>

                {/* Founder Assurance Strip */}
                <div className="p-3.5 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-rose-300 shrink-0">
                      <Image
                        src="/founder.png"
                        alt="Garvita Uppal, Founder"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">
                        Garvita Uppal
                      </p>
                      <p className="text-[10px] text-slate-300">
                        Principal Consultant | 10 Yrs Exp.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="#contact"
                    className="text-[11px] font-bold text-[#fda4af] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Talk Directly</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
