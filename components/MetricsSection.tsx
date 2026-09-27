import React from "react";
import { EXECUTIVE_METRICS } from "@/lib/constants";

export default function MetricsSection() {
  return (
    <section className="w-full py-space-2xl bg-[#1e293b] text-on-primary relative overflow-hidden">
      {/* Diffused Background Lights */}
      <div 
        className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#f87b7b]/20 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -left-20 -top-20 w-80 h-80 bg-[#4ecdc4]/20 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Left Summary */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-label-eyebrow text-label-eyebrow text-[#fecdd3] uppercase tracking-widest font-bold">
              Verifiable Impact
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-on-primary tracking-tight leading-snug">
              Compounding Numbers. Zero Speculation.
            </h2>
            <p className="font-body-md text-body-md text-slate-300">
              We operate as an extension of your growth committee with quantifiable revenue metrics mapped directly to your balance sheet.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {EXECUTIVE_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-inner hover:bg-white/10 transition-colors"
              >
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold ${metric.color}`}>
                  {metric.value}
                </p>
                <p className="font-label-lg text-label-lg font-semibold text-white mt-1">
                  {metric.label}
                </p>
                <p className="font-body-sm text-[12px] text-slate-300 mt-1">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
