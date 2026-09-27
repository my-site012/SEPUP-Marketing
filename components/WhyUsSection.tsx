import React from "react";
import { ADVANTAGES } from "@/lib/constants";

export default function WhyUsSection() {
  return (
    <section className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
            The Step Up Advantage
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mt-1">
            Why Discerning Enterprises Partner With Us.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
            We bring high-end design sensibilities together with hard-edged engineering and commercial discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className={`p-8 rounded-3xl ${adv.bg} border ${adv.border} shadow-sm flex flex-col justify-between`}
            >
              <div
                className={`w-12 h-12 rounded-2xl ${adv.iconBg} ${adv.iconColor} flex items-center justify-center mb-6`}
              >
                <span className="material-symbols-outlined text-[26px]" aria-hidden="true">
                  {adv.icon}
                </span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-2">
                  {adv.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {adv.description}
                </p>
              </div>
              <div className={`mt-6 pt-4 ${adv.tagColor} font-label-md text-[12px] uppercase font-bold`}>
                {adv.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
