"use client";

import React, { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalReviews = TESTIMONIALS.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Automatic slide rotation on mobile
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, totalReviews]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 45; // in px

      if (diffX > minSwipeDistance) {
        // Swiped Left -> Next
        nextSlide();
      } else if (diffX < -minSwipeDistance) {
        // Swiped Right -> Prev
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <section className="w-full py-space-2xl bg-[#fff5f5]/70" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-space-xs mb-space-xl max-w-2xl mx-auto">
          <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase tracking-widest font-bold">
            Executive Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-on-surface tracking-tight leading-snug">
            Trusted By Industry Leaders.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant">
            Hear how Step Up Marketing has accelerated pipeline expansion across international luxury, life sciences, and commerce brands.
          </p>
        </div>

        {/* 1. DESKTOP VIEW: Full 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* 2. MOBILE VIEW: Interactive Touch Slider */}
        <div
          className="block md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Active Testimonial Card Stage */}
          <div className="overflow-hidden min-h-[360px] flex items-stretch">
            <div
              className="w-full transition-all duration-300 ease-out transform"
              key={TESTIMONIALS[activeIndex].id}
            >
              <TestimonialCard testimonial={TESTIMONIALS[activeIndex]} />
            </div>
          </div>

          {/* Mobile Slider Controls */}
          <div className="flex items-center justify-between mt-5 px-1">
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>

            {/* Pagination Dots with Active Indicator */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-7 bg-primary"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>

          {/* Swipe Hint Helper */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-3 font-medium">
            <span className="material-symbols-outlined text-[14px]">swipe</span>
            <span>Swipe or tap arrows to view more reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
