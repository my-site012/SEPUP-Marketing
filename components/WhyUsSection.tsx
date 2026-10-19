import React from "react";
import { ADVANTAGES } from "@/lib/constants";

export default function WhyUsSection() {
  return (
    <section className="w-full py-space-2xl bg-surface" id="why-us">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
            The Step Up Difference
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-on-surface tracking-tight leading-snug mt-1">
            Why Growing Businesses Choose Step Up Marketing.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
            We are your outsourced marketing department without the full-time overhead. We combine strategic marketing guidance with hands-on execution.
          </p>
        </div>

        {/* 7 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className={`p-7 rounded-3xl ${adv.bg} border ${adv.border} shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${adv.iconBg} ${adv.iconColor} flex items-center justify-center mb-5`}
                >
                  <span className="material-symbols-outlined text-[26px]" aria-hidden="true">
                    {adv.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface font-bold mb-2">
                  {adv.title}
                </h3>
                <p className="font-body-md text-xs sm:text-[13px] text-on-surface-variant leading-relaxed">
                  {adv.description}
                </p>
              </div>
              <div className={`mt-6 pt-3 border-t border-black/5 ${adv.tagColor} font-label-md text-[11px] uppercase font-bold tracking-wider`}>
                {adv.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
