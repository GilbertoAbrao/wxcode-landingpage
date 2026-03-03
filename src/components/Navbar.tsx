"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "ROI", href: "#roi" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Test Drive", href: "#precos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center">
          <Image
            src="/wxcode-header.png"
            alt="WXCode"
            width={190}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan to-purple px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            Fale Conosco
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer text-foreground md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan to-purple px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
