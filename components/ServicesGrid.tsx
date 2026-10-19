import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="w-full py-space-2xl bg-[#fff5f5]/80" id="services">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
          <div className="max-w-2xl">
            <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
              Our 11 Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-on-surface tracking-tight leading-snug mt-1">
              Everything Your Business Needs To Grow Online.
            </h2>
            <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
              From building a recognizable brand and modern website to managing advertising, content, and customer retention — we provide end-to-end digital marketing services for small and medium-sized businesses.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-800 font-label-md text-xs font-bold border border-slate-200 shadow-2xs">
              Individual Services
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 font-label-md text-xs font-bold border border-rose-200 shadow-2xs">
              Customized Marketing Plans
            </span>
          </div>
        </div>

        {/* 11-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              Not sure which services your business needs right now?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              We never recommend services you don&apos;t need. Schedule an honest conversation to audit your opportunities.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors"
          >
            Request Free Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
