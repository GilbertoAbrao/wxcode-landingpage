"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="flex items-center">
            <Image
              src="/wxcode-footer.png"
              alt="WXCode"
              width={150}
              height={38}
              className="h-8 w-auto"
            />
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: t("footer.howItWorks"), href: "#como-funciona" },
              { label: t("footer.benefits"), href: "#beneficios" },
              { label: t("footer.roi"), href: "#roi" },
              { label: t("footer.platform"), href: "#plataforma" },
              { label: t("footer.testDrive"), href: "#precos" },
              { label: t("footer.contact"), href: "#contato" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer text-xs text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted/50">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
