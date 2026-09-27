import React from "react";
import { TestimonialItem } from "@/lib/constants";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={`p-8 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border ${testimonial.borderColor}`}>
      <div className="flex flex-col gap-4">
        {/* 5 Filled Stars */}
        <div className={`flex items-center gap-1 ${testimonial.starColor}`}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-[20px] material-symbols-filled"
              aria-hidden="true"
            >
              star
            </span>
          ))}
        </div>
        <p className="font-body-lead text-body-lead text-on-surface italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-6 mt-6 flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full ${testimonial.avatarBg} text-on-primary flex items-center justify-center font-bold text-lg shrink-0 shadow-sm`}
          aria-label={`${testimonial.author} monogram avatar`}
          role="img"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-headline-sm text-[16px] font-bold text-on-surface">
            {testimonial.author}
          </p>
          <p className="font-body-sm text-[13px] text-on-surface-variant">
            {testimonial.role}
          </p>
          <p className={`font-label-eyebrow text-[10px] ${testimonial.locationColor} uppercase font-bold`}>
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
