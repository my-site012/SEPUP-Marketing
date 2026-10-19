import React from "react";
import { INDUSTRIES, OTHER_SECTORS } from "@/lib/constants";
import IndustryCard from "@/components/IndustryCard";

export default function IndustriesGrid() {
  return (
    <section className="w-full py-space-2xl bg-surface" id="industries">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col items-start gap-space-xs mb-space-xl max-w-3xl">
          <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
            Target Industries
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-on-surface tracking-tight leading-snug">
            Marketing Tailored to Your Specific Business Model.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant">
            We work with established small and medium-sized service businesses across Mississauga, Toronto, and the GTA. We understand the specific customer acquisition journey for each industry.
          </p>
        </div>

        {/* 8-Card Grid (2x4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>

        {/* Additional Industry Micro-Strip */}
        <div className="mt-8 p-6 rounded-3xl bg-[#fff5f5] border border-[#f87b7b]/20 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <span className="font-label-lg text-label-lg text-on-surface font-bold">
            Also Supporting Growing Canadian Businesses in:
          </span>
          <div className="flex flex-wrap items-center gap-2.5">
            {OTHER_SECTORS.map((sector) => (
              <span
                key={sector}
                className="px-4 py-2 rounded-full bg-white shadow-2xs font-label-md text-xs text-slate-800 border border-[#f87b7b]/15 font-semibold"
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
