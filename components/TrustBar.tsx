import React from "react";
import { TRUST_BAR_STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section className="w-full bg-[#fff5f5] py-8 overflow-hidden shadow-sm border-y border-[#f87b7b]/15">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center items-center divide-y md:divide-y-0 md:divide-x divide-[#f87b7b]/20">
          {TRUST_BAR_STATS.map((stat, idx) => {
            const isLast = idx === TRUST_BAR_STATS.length - 1;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-4 pt-2 md:pt-0 ${
                  isLast ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <span
                  className={`font-headline-lg text-headline-lg font-extrabold tracking-tight ${
                    stat.color || "text-on-surface"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
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
