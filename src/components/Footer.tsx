"use client";

import Image from "next/image";

export default function Footer() {
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
              { label: "Como Funciona", href: "#como-funciona" },
              { label: "Benefícios", href: "#beneficios" },
              { label: "ROI", href: "#roi" },
              { label: "Plataforma", href: "#plataforma" },
              { label: "Test Drive", href: "#precos" },
              { label: "Contato", href: "#contato" },
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
            &copy; {new Date().getFullYear()} WXCode. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
