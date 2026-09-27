import React from "react";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="w-full py-space-2xl bg-[#fff5f5]" id="services">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
          <div className="max-w-2xl">
            <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
              Our Expertise
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mt-1">
              Everything You Need To Step Up &amp; Grow Online.
            </h2>
            <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
              Integrated capabilities engineered to capture demand, accelerate conversions, and automate operations across touchpoints.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-label-md text-label-md text-on-surface-variant">Also mastering:</span>
            <span className="px-3 py-1 rounded-full bg-[#fde047]/30 text-on-surface font-label-md text-[12px] font-medium border border-[#fbbf24]/40">
              Local SEO &amp; GBP
            </span>
            <span className="px-3 py-1 rounded-full bg-[#99f6e4]/40 text-on-surface font-label-md text-[12px] font-medium border border-[#4ecdc4]/40">
              Content Synergies
            </span>
          </div>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
