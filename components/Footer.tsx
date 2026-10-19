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
            <Link href="/" className="flex items-center gap-3" aria-label="Step Up Marketing Home">
              <div className="relative h-9 w-24 sm:h-10 sm:w-28 shrink-0">
                <Image
                  src={BRAND.footerLogo}
                  alt="Step Up Marketing Logo"
                  fill
                  sizes="120px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="font-body-md text-sm text-on-surface-variant max-w-sm leading-relaxed">
              {BRAND.tagline}. Boutique digital marketing agency based in Mississauga, Ontario, supporting growing businesses across the Greater Toronto Area and Canada.
            </p>

            <div className="text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">{BRAND.address}</p>
              <p>Phone: <a href={`tel:${BRAND.phoneTel}`} className="hover:text-primary transition-colors font-medium">{BRAND.phoneDisplay}</a></p>
              <p>Email: <a href={`mailto:${BRAND.email}`} className="hover:text-primary transition-colors font-medium">{BRAND.email}</a></p>
              <p>Hours: {BRAND.hours}</p>
            </div>

            {/* Official Social Links from Client Doc */}
            <div className="flex items-center gap-2 pt-2">
              {/* Instagram */}
              <a
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-slate-700 hover:bg-[#e1306c] hover:text-white transition-colors shadow-2xs"
                href={BRAND.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-slate-700 hover:bg-[#1877f2] hover:text-white transition-colors shadow-2xs"
                href={BRAND.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-slate-700 hover:bg-[#0077b5] hover:text-white transition-colors shadow-2xs"
                href={BRAND.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66Z" />
                </svg>
              </a>

              {/* Google Business Profile */}
              <a
                aria-label="Google Business Profile"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-slate-700 hover:bg-[#4285f4] hover:text-white transition-colors shadow-2xs"
                href={BRAND.socialLinks.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">location_on</span>
              </a>

              {/* WhatsApp */}
              <a
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white border border-[#f87b7b]/20 flex items-center justify-center text-[#16a34a] hover:bg-[#16a34a] hover:text-white transition-colors shadow-2xs"
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4 Column Navigation */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* Company */}
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-xs text-on-surface font-bold tracking-wider uppercase mb-1">
                Company
              </span>
              {FOOTER_SECTIONS.company.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-slate-600 hover:text-primary transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Core Services 1 */}
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-xs text-on-surface font-bold tracking-wider uppercase mb-1">
                Services
              </span>
              {FOOTER_SECTIONS.services.slice(0, 6).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-slate-600 hover:text-primary transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Core Services 2 */}
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-xs text-on-surface font-bold tracking-wider uppercase mb-1">
                More Services
              </span>
              {FOOTER_SECTIONS.services.slice(6).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-slate-600 hover:text-primary transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Industries */}
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-xs text-on-surface font-bold tracking-wider uppercase mb-1">
                Industries
              </span>
              {FOOTER_SECTIONS.industries.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-slate-600 hover:text-primary transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved. Mississauga, Ontario, Canada.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Supporting businesses ready to scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
