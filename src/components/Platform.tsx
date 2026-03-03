"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Bot,
  LayoutDashboard,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

const pillars = [
  {
    icon: Factory,
    title: "Output Projects",
    description:
      "Fábrica de modernização por produto, com ambientes gerenciáveis e entrega por milestones de negócio.",
    features: [
      "Identidade isolada por produto",
      "Ambiente pronto para CI/CD",
      "Milestones de negócio objetivos",
    ],
  },
  {
    icon: Bot,
    title: "Botfy Coder",
    description:
      "Orquestrador de conversão com método estruturado, automação com governança e checkpoints de qualidade.",
    features: [
      "Agentes especializados por papel",
      "Fluxo padronizado de decisão",
      "Checkpoints a cada milestone",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Cockpit Unificado",
    description:
      "Observabilidade executiva com dashboards de progresso e comunicação clara para liderança.",
    features: [
      "Dashboards em tempo real",
      "Visibilidade para executivos",
      "Métricas de cobertura de regras",
    ],
  },
  {
    icon: RefreshCw,
    title: "Operação Contínua",
    description:
      "Retomada após interrupções, replanejamento sem perder histórico e cadência sustentável de entrega.",
    features: [
      "Retomada de contexto completa",
      "Replanejamento sem perda",
      "Cadência sustentável",
    ],
  },
];

export default function Platform() {
  return (
    <section id="plataforma" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <div className="absolute bottom-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan/3 blur-[120px]" />
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
            Arquitetura
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Plataforma</span>, não Ferramenta
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            WXCode industrializa a modernização de legado com método, velocidade,
            governança e entrega contínua de valor.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group cursor-default rounded-2xl border border-cyan/20 p-6 transition-all duration-300 hover:border-purple/30 hover:bg-white/8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/10 to-purple/10">
                  <pillar.icon size={24} className="text-cyan" />
                </div>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <ChevronRight
                      size={14}
                      className="shrink-0 text-purple"
                    />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
