import React from "react";
import { TestimonialItem } from "@/lib/constants";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between border border-slate-200/80 relative overflow-hidden h-full`}>
      {/* Decorative Quote Mark Watermark */}
      <span className="absolute -top-2 right-4 text-7xl font-serif text-slate-100 select-none pointer-events-none">
        &ldquo;
      </span>

      <div className="flex flex-col gap-4 relative z-10">
        {/* Star Rating & Verified Pill */}
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-1 ${testimonial.starColor}`}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-[18px] sm:text-[20px] material-symbols-filled"
                aria-hidden="true"
              >
                star
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Verified Client
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-5 mt-5 flex items-center gap-3.5 border-t border-slate-100 relative z-10">
        <div
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${testimonial.avatarBg} text-white flex items-center justify-center font-bold text-base sm:text-lg shrink-0 shadow-md ring-2 ring-white`}
          aria-label={`${testimonial.author} monogram avatar`}
          role="img"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-bold text-[15px] sm:text-[16px] text-slate-900 leading-tight">
            {testimonial.author}
          </p>
          <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5">
            {testimonial.role}
          </p>
          <p className={`text-[10px] sm:text-[11px] ${testimonial.locationColor} uppercase font-bold mt-0.5 tracking-wider`}>
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
