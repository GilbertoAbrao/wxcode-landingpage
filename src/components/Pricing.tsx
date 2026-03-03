"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Clock,
  Eye,
  HandshakeIcon,
} from "lucide-react";

const steps = [
  {
    icon: Clock,
    title: "30 dias com seu projeto real",
    description:
      "Selecionamos uma amostra representativa do seu legado e executamos a conversão completa — com a mesma qualidade do projeto final.",
  },
  {
    icon: Eye,
    title: "Você acompanha tudo",
    description:
      "Acesso ao cockpit com dashboards de progresso, KB gerada, regras de negócio extraídas e código convertido em tempo real.",
  },
  {
    icon: ShieldCheck,
    title: "Resultado mensurável",
    description:
      "Ao final, você recebe um relatório completo: código funcional, testes automatizados, KB parcial e métricas de ROI reais do seu cenário.",
  },
  {
    icon: HandshakeIcon,
    title: "Decisão sem pressão",
    description:
      "Se o resultado falar por si, seguimos juntos. Se não, você fica com todo o conhecimento gerado. Sem contrato, sem compromisso.",
  },
];

const includes = [
  "Conversão de amostra real do seu projeto",
  "Knowledge Base parcial gerada",
  "Regras de negócio extraídas e documentadas",
  "Testes unitários automáticos",
  "Relatório de ROI com dados reais",
  "Suporte dedicado durante os 30 dias",
];

export default function Pricing() {
  return (
    <section id="precos" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-cyan">
            Test Drive
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">30 dias</span> para você ter
            certeza
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Nenhuma promessa substitui ver o resultado com seus próprios olhos.
            Por isso, oferecemos um PoC de 30 dias com seu projeto real — sem
            compromisso de contratação.
          </p>
        </motion.div>

        {/* How the PoC works */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group cursor-default rounded-2xl p-6 transition-all duration-300 hover:bg-white/8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10">
                <step.icon size={20} className="text-cyan" />
              </div>
              <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What's included + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong overflow-hidden rounded-2xl"
        >
          <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <h3 className="mb-2 text-2xl font-bold">
                O que está incluso no PoC
              </h3>
              <p className="mb-6 text-sm text-muted">
                Tudo o que você precisa para avaliar o WXCode com confiança.
              </p>
              <ul className="space-y-3">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-green-400"
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 text-center">
              <div className="mb-2 text-5xl font-bold text-cyan">30</div>
              <div className="mb-1 text-lg font-semibold">dias de teste</div>
              <p className="mb-6 text-sm text-muted">
                com seu projeto real, sem compromisso
              </p>
              <a
                href="#contato"
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-purple px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
              >
                Solicitar meu Test Drive
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <p className="mt-4 text-xs text-muted/60">
                Sem contrato. Sem cartão de crédito. Sem letra miúda.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
