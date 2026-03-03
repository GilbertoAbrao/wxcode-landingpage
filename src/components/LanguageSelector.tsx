"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useTranslation, LOCALES, LOCALE_LABELS, LOCALE_FLAGS } from "@/i18n";
import type { Locale } from "@/i18n";

export default function LanguageSelector() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted transition-colors duration-200 hover:text-foreground"
        aria-label="Select language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
      </button>

      {open && (
        <div className="glass-strong absolute right-0 top-full mt-2 min-w-[160px] overflow-hidden rounded-xl border border-white/10 py-1 shadow-xl">
          {LOCALES.map((l: Locale) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={`flex w-full cursor-pointer items-center gap-2.5 px-4 py-2.5 text-left text-sm transition-colors duration-150 ${
                l === locale
                  ? "bg-cyan/10 text-cyan"
                  : "text-muted hover:bg-white/5 hover:text-foreground"
              }`}
            >
              <span className="text-base">{LOCALE_FLAGS[l]}</span>
              <span>{LOCALE_LABELS[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
