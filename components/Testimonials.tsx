import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="w-full py-space-2xl bg-[#fff5f5]">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col items-center text-center gap-space-xs mb-space-xl max-w-2xl mx-auto">
          <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
            Executive Feedback
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            Trusted By Industry Leaders.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant">
            Hear how Step Up Marketing has accelerated pipeline expansion across international luxury, life sciences, and commerce brands.
          </p>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
