"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MARKETING_FUNNEL } from "@/lib/constants";

export default function MarketingFunnel() {
  const [activeMobileTab, setActiveMobileTab] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="w-full py-space-2xl bg-gradient-to-b from-white via-[#fff5f5]/50 to-white relative overflow-hidden" id="framework">
      {/* Decorative ambient background blur */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-rose-200/20 via-amber-100/20 to-teal-100/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-space-xs mb-space-xl max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffe4e6] text-[#e11d48] font-label-eyebrow text-label-eyebrow uppercase font-bold tracking-widest">
            The 4-Pillar Customer Lifecycle
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-on-surface tracking-tight leading-snug">
            How We Step Up Your Business at Every Stage.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl">
            From initial awareness to long-term client retention, every touchpoint is intentionally planned and executed. Hover or tap each card below to explore our connected ecosystem.
          </p>
        </div>

        {/* 1. DESKTOP VIEW: 4 Interactive 3D Flip Cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {MARKETING_FUNNEL.map((pillar, index) => {
            const isFlipped = flippedCards[index];
            return (
              <div
                key={pillar.stage}
                className="group h-[380px] [perspective:1000px] cursor-pointer"
                onMouseEnter={() => setFlippedCards((prev) => ({ ...prev, [index]: true }))}
                onMouseLeave={() => setFlippedCards((prev) => ({ ...prev, [index]: false }))}
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] rounded-3xl shadow-md hover:shadow-xl ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl p-8 bg-white border border-slate-200/80 flex flex-col justify-between overflow-hidden">
                    {/* Top Stage Indicator */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                          PHASE 0{index + 1}
                        </span>
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: pillar.color }} />
                      </div>
                      <h3
                        className="text-3xl font-black tracking-tight"
                        style={{ color: pillar.color }}
                      >
                        {pillar.stage}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700 mt-1">
                        {pillar.subtitle}
                      </p>
                    </div>

                    {/* Middle Description */}
                    <p className="text-[14px] text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Bottom Prompt */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-primary transition-colors">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">touch_app</span>
                        Hover to reveal services
                      </span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE (Revealed on hover/flip) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-7 bg-slate-900 text-white flex flex-col justify-between border border-slate-800 shadow-2xl">
                    <div>
                      <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {pillar.stage} Services
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white font-mono">
                          {pillar.services.length} Capabilities
                        </span>
                      </div>

                      <ul className="space-y-2 mt-3">
                        {pillar.services.map((svc) => (
                          <li key={svc} className="flex items-start gap-2 text-xs text-slate-200 leading-snug">
                            <span className="material-symbols-outlined text-[14px] shrink-0 mt-0.5" style={{ color: pillar.color }}>
                              check_circle
                            </span>
                            <span>{svc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <Link
                        href="#services"
                        className="inline-flex items-center justify-center w-full py-2 px-4 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-90 shadow-sm"
                        style={{ backgroundColor: pillar.color }}
                      >
                        Explore Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. MOBILE / TABLET VIEW: Interactive Tabbed Accordion */}
        <div className="block lg:hidden">
          {/* Tab Buttons */}
          <div className="grid grid-cols-4 gap-1 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mb-4">
            {MARKETING_FUNNEL.map((pillar, idx) => (
              <button
                key={pillar.stage}
                onClick={() => setActiveMobileTab(idx)}
                className={`py-2 px-1 text-center rounded-xl font-bold text-xs transition-all ${
                  activeMobileTab === idx
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {pillar.stage}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          {(() => {
            const active = MARKETING_FUNNEL[activeMobileTab];
            return (
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    PHASE 0{activeMobileTab + 1}
                  </span>
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: active.color }} />
                </div>
                <h3 className="text-2xl font-black" style={{ color: active.color }}>
                  {active.stage}
                </h3>
                <p className="text-xs font-semibold text-slate-700 mt-0.5 mb-2">
                  {active.subtitle}
                </p>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {active.description}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Associated Services &amp; Execution:
                  </p>
                  <ul className="space-y-2">
                    {active.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="material-symbols-outlined text-[16px]" style={{ color: active.color }}>
                          check_circle
                        </span>
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-full text-xs font-bold text-white shadow-sm"
                    style={{ backgroundColor: active.color }}
                  >
                    View All {active.stage} Services
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
