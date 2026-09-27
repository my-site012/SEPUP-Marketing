import React from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section className="w-full py-space-2xl bg-[#fff5f5]" id="solutions">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
            Engineered Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-on-surface tracking-tight leading-snug mt-1">
            From Strategy To Compounding Growth.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
            A disciplined 4-phase delivery system ensuring immediate operational clarity, flawless execution, and verified pipeline expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className={`p-8 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group border ${step.borderHover} transition-colors`}
            >
              <div
                className={`text-5xl font-black tracking-tighter mb-6 transition-colors ${step.numberColor}`}
              >
                {step.step}
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-2">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>
              <div
                className={`mt-6 pt-4 flex items-center gap-2 ${step.deliverableColor} font-label-md text-label-md font-semibold`}
              >
                <span className={`w-2 h-2 rounded-full ${step.deliverableDot}`} />
                <span>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
