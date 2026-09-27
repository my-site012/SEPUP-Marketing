"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS, BRAND } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#f87b7b]/15">
            <span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">
              Step Up <span className="text-[#f87b7b]">Marketing</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              aria-label="Close Navigation Menu"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 pt-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`py-2 px-3 rounded-xl font-label-lg text-label-lg transition-colors ${
                  item.isActive
                    ? "bg-[#fff1f2] text-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col gap-4 pt-6 border-t border-[#f87b7b]/15">
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2 px-3"
          >
            <span className="material-symbols-outlined text-[20px] text-primary">call</span>
            <span>{BRAND.phoneDisplay}</span>
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="w-full text-center rounded-full bg-gradient-to-r from-[#f87b7b] via-[#fb7185] to-[#f43f5e] hover:opacity-95 text-on-primary font-label-lg text-label-lg px-6 py-3 shadow-md hover:shadow-lg transition-all"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
