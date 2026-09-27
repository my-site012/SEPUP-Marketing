import React from "react";
import { TRUST_BAR_STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section className="w-full bg-[#fff5f5] py-6 sm:py-8 overflow-hidden shadow-sm border-y border-[#f87b7b]/15">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 text-center items-center">
          {TRUST_BAR_STATS.map((stat, idx) => {
            const isLast = idx === TRUST_BAR_STATS.length - 1;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/70 border border-[#f87b7b]/15 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${
                  isLast ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span
                  className={`font-headline-lg text-2xl sm:text-headline-lg font-extrabold tracking-tight ${
                    stat.color || "text-on-surface"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="font-label-md text-[11px] sm:text-label-md text-on-surface-variant uppercase tracking-wider mt-0.5">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
