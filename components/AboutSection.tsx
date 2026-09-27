import React from "react";
import Image from "next/image";
import { ABOUT_FEATURES } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="w-full py-space-2xl bg-surface" id="about">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Visual Storytelling Column */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-[#fff1f2]">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1Vnnmg69-2ESZN_vyRZ1kxFDfXZqS-F_IxGA_ADElbe7m0d-CtpLQT5JJfRCbRJr55a8tu7TTUn4SZEDsXxNVAMDgCUNFh75QzejTHF5h6IZ7752kYVjh8r7Fa9lTFGl5r_2N1Vo3FP8vb4lDITuiZpOomFepVHDK-kcZF-5unxB9CuYBCJfs_kOSfzWyyj_sRiMyERanmD5L77tVZ3A3Pz8kljApbMcLobLZh22RC8zO7L7KmVRH8ti_Q"
                alt="Multicultural international leadership advisory team having an executive strategy meeting inside a sleek high floor corporate boardroom overlooking an illuminated modern skyline during dusk"
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-on-primary">
                <div>
                  <p className="font-headline-sm text-headline-sm font-bold">Step Up Strategy Labs</p>
                  <p className="font-body-sm text-body-sm text-[#fecdd3]">New Delhi • London • Singapore</p>
                </div>
                <div 
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[#4ecdc4]"
                  aria-label="Verified enterprise credentials"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    verified
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-panel Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-[#f87b7b]/20 shadow-sm flex flex-col justify-between">
                <span className="font-label-eyebrow text-label-eyebrow text-[#e11d48] uppercase font-bold">
                  Revenue Impact
                </span>
                <p className="font-headline-lg text-headline-lg text-on-surface font-extrabold pt-2">
                  $140M+
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Direct client pipeline generated
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f87b7b] to-[#ea580c] text-on-primary shadow-sm flex flex-col justify-between">
                <span className="font-label-eyebrow text-label-eyebrow text-white/90 uppercase font-bold">
                  Execution Cadence
                </span>
                <p className="font-headline-lg text-headline-lg text-on-primary font-extrabold pt-2">
                  2-Week
                </p>
                <p className="font-body-sm text-body-sm text-white/80">
                  Continuous delivery sprints
                </p>
              </div>
            </div>
          </div>

          {/* Positioning Copy Column */}
          <div className="lg:col-span-6 flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffe4e6] text-[#e11d48] font-label-eyebrow text-label-eyebrow uppercase font-bold w-max">
              Step Up To Market Dominance
            </div>

            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
              Your Growth. Our Digital Expertise.
            </h2>

            <p className="font-body-lead text-body-lead text-on-surface-variant">
              At Step Up Marketing, we reject fragmented agency models. We combine high-velocity engineering, deep generative search optimization, modern AI automated workflows, and ruthless conversion rate optimization into a unified growth engine.
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Every deliverable is crafted to solve high-intent enterprise challenges: driving lower customer acquisition costs, amplifying brand authority across traditional and generative engines, and building digital infrastructure that scales effortlessly.
            </p>

            {/* 3 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-space-xs">
              {ABOUT_FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  className={`p-5 rounded-2xl ${feat.bg} border ${feat.border} shadow-sm`}
                >
                  <span className={`material-symbols-outlined ${feat.iconColor} text-[28px] mb-2`} aria-hidden="true">
                    {feat.icon}
                  </span>
                  <h3 className="font-headline-sm text-[17px] font-bold text-on-surface">
                    {feat.title}
                  </h3>
                  <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
