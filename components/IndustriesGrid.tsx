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
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            Digital Growth Across High-Impact Industries.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant">
            We don&apos;t do generic marketing. We deploy specialized vertical playbooks calibrated for the distinct customer acquisition pathways of select domains.
          </p>
        </div>

        {/* 4-Column Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
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
