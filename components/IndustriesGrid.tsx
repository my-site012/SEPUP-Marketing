import React from "react";
import { INDUSTRIES, OTHER_SECTORS } from "@/lib/constants";
import IndustryCard from "@/components/IndustryCard";

export default function IndustriesGrid() {
  return (
    <section className="w-full py-space-2xl bg-surface" id="industries">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col items-start gap-space-xs mb-space-xl max-w-3xl">
          <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
            Specialized Verticals
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-on-surface tracking-tight leading-snug">
            Digital Growth Across High-Impact Industries.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant">
            We don&apos;t do generic marketing. We deploy specialized vertical playbooks calibrated for the distinct customer acquisition pathways of select domains.
          </p>
        </div>

        {/* Mobile App Swipe Indicator */}
        <div className="flex sm:hidden items-center justify-between text-xs text-slate-500 font-medium mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Swipe sectors
          </span>
          <span className="material-symbols-outlined text-[16px] text-primary">arrow_forward</span>
        </div>

        {/* 4-Column Visual Cards / Mobile Touch Swiper */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-3 sm:pb-0 snap-x snap-mandatory no-scrollbar -mx-margin-mobile px-margin-mobile sm:mx-0 sm:px-0">
          {INDUSTRIES.map((industry) => (
            <div key={industry.id} className="min-w-[80vw] sm:min-w-0 snap-center shrink-0">
              <IndustryCard industry={industry} />
            </div>
          ))}
        </div>

        {/* Additional Industry Micro-Strip */}
        <div className="mt-8 p-6 rounded-2xl bg-[#fff5f5] border border-[#f87b7b]/20 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <span className="font-label-lg text-label-lg text-on-surface font-bold">
            Other Core Sectors We Dominate:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {OTHER_SECTORS.map((sector) => (
              <span
                key={sector}
                className="px-4 py-2 rounded-xl bg-surface-container-lowest shadow-sm font-label-md text-label-md text-on-surface border border-[#f87b7b]/10"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
