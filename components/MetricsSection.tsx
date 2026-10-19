import React from "react";
import { TRUST_BAR_STATS } from "@/lib/constants";

export default function MetricsSection() {
  return (
    <section className="w-full py-space-2xl bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-label-eyebrow text-xs uppercase tracking-widest font-bold text-rose-300">
              Trusted Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Boutique Care. Proven Expertise.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We operate as your dedicated outsourced marketing team with honest recommendations and transparent execution.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {TRUST_BAR_STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
