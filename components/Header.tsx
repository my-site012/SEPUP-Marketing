"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, BRAND } from "@/lib/constants";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
          {/* Logo & Brand Mark */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group py-1" aria-label="Step Up Marketing Home">
            <div className="relative h-9 w-24 sm:h-10 sm:w-28 md:h-11 md:w-32 shrink-0 transition-transform duration-200 group-hover:scale-[1.03]">
              <Image
                src={BRAND.headerLogo}
                alt="Step Up Marketing Logo"
                fill
                sizes="(max-width: 640px) 100px, 130px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-md" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={item.isActive ? "page" : undefined}
                className={
                  item.isActive
                    ? "transition-colors py-1 text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg"
                    : "font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors py-1"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-space-sm shrink-0">
            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e] hover:opacity-95 text-on-primary font-label-lg text-label-lg px-6 py-2.5 shadow-md hover:shadow-lg transition-all font-bold"
            >
              Get Free Consultation
            </a>

            {/* Hamburger Button for Mobile/Tablet */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
