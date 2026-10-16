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

          {/* Right Column: Sleek Executive Growth Command Station */}
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
                    stepupmarketing.ca • analytics
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-semibold text-emerald-300">
                    Active Telemetry
                  </span>
                </div>
              </div>

              {/* High-Resolution Visual Stage */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=85&w=1600&auto=format&fit=crop"
                  alt="Senior digital growth strategist analyzing live omnichannel campaign analytics"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top-Left In-Frame Metric Pill */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-white/40">
                  <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-ping" />
                  <span className="text-[11px] font-bold text-slate-900">
                    +240% Organic Inbound
                  </span>
                </div>

                {/* Top-Right Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium border border-white/10">
                  <span className="material-symbols-outlined text-[14px] text-amber-400">
                    verified
                  </span>
                  <span>Top 1% Authority</span>
                </div>

                {/* Bottom Integrated Live Metrics Bar */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#4ecdc4] to-[#0d9488] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        smart_toy
                      </span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                        Ranked #1 in GEO
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                        SearchGPT &amp; Perplexity Citations
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#f87b7b] to-[#f43f5e] text-white text-[11px] font-bold shadow-xs">
                      <span className="material-symbols-outlined text-[13px]">bolt</span>
                      3.8x Speed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
