import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND, FOOTER_SECTIONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fff5f5] border-t border-[#f87b7b]/20 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-space-2xl pb-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg pb-space-xl">
          {/* Brand Info & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start gap-space-sm">
            <Link href="/" className="flex items-center gap-space-xs" aria-label="Step Up Marketing Home">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src={BRAND.footerLogo}
                  alt="Step Up Marketing Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                Step Up <span className="text-[#f87b7b]">Marketing</span>
              </span>
            </Link>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Digital growth &amp; technology partner for ambitious enterprises worldwide. Turning digital presence into compounding revenue.
            </p>

            <div className="flex items-center gap-space-xs pt-space-xs">
              <a
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-on-surface-variant hover:bg-[#f87b7b] hover:text-white transition-colors"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  share
                </span>
              </a>
              <a
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-on-surface-variant hover:bg-[#f87b7b] hover:text-white transition-colors"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  tag
                </span>
              </a>
              <a
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-on-surface-variant hover:bg-[#f87b7b] hover:text-white transition-colors"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  code
                </span>
              </a>
              <a
                aria-label="Dribbble"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-on-surface-variant hover:bg-[#f87b7b] hover:text-white transition-colors"
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  palette
                </span>
              </a>
              <a
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-on-surface-variant hover:bg-[#f87b7b] hover:text-white transition-colors"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  smart_display
                </span>
              </a>
            </div>
          </div>

          {/* 5 Column Navigation */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
            {/* Company */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface font-bold tracking-wider uppercase mb-space-xs">
                Company
              </span>
              {FOOTER_SECTIONS.company.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="font-label-eyebrow text-[10px] uppercase px-1.5 py-0.5 rounded-full bg-[#ffe4e6] text-[#e11d48] font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Services */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface font-bold tracking-wider uppercase mb-space-xs">
                Services
              </span>
              {FOOTER_SECTIONS.services.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Industries */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface font-bold tracking-wider uppercase mb-space-xs">
                Industries
              </span>
              {FOOTER_SECTIONS.industries.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface font-bold tracking-wider uppercase mb-space-xs">
                Resources
              </span>
              {FOOTER_SECTIONS.resources.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Global Hubs */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface font-bold tracking-wider uppercase mb-space-xs">
                Global Hubs
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">New Delhi &amp; Bengaluru</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Singapore</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">London</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">San Francisco</p>
              <a
                className="font-body-sm text-body-sm text-[#e11d48] hover:underline pt-space-xs break-all font-semibold"
                href={`mailto:${BRAND.email}`}
              >
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-space-md border-t border-[#f87b7b]/20 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 Step Up Marketing Partners Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-space-sm">
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/sitemap.xml">
              Sitemap
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
              Cookie Settings
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
              Security Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
