"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
    };

    const params = new URLSearchParams(data);
    router.push(`/questionario?${params.toString()}`);
  }

  return (
    <section id="contato" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-cyan">
            Contato
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Pronto para <span className="gradient-text">Modernizar</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Preencha seus dados e em seguida responda algumas perguntas rápidas
            para que possamos preparar uma análise personalizada para o seu
            cenário.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/25"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  E-mail corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/25"
                  placeholder="seu@empresa.com"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/25"
                  placeholder="Nome da empresa"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium"
                >
                  Cargo
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/25"
                  placeholder="Seu cargo"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-purple px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25 disabled:opacity-50"
            >
              {submitting ? "Redirecionando..." : "Continuar"}
              <Send
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <p className="text-center text-xs text-muted/50">
              Ao continuar, você será direcionado para um breve questionário de
              qualificação.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
