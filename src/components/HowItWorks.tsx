"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  Code2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Importação Inteligente",
    description:
      "Importe seu projeto WinDev/WebDev completo: código planificado (ZIP), PDFs de documentação, SQL DDL e Stored Procedures.",
    details: [
      "Wizard com sessão rastreável",
      "Progresso em tempo real",
      "Retomada após falhas",
      "Workspace isolado por projeto",
    ],
    color: "cyan",
  },
  {
    number: "02",
    icon: Brain,
    title: "Construção da KB",
    description:
      "Uma base de conhecimento inteligente é construída automaticamente, criando o gêmeo cognitivo do seu legado.",
    details: [
      "Parsing por domínio especializado",
      "Grafo de dependências completo",
      "Extração de regras de negócio",
      "Diagramas automáticos (Mermaid)",
    ],
    color: "cyan",
  },
  {
    number: "03",
    icon: Code2,
    title: "Conversão com IA",
    description:
      "Agentes especializados geram código moderno usando 61 ferramentas MCP e todo o contexto da Knowledge Base.",
    details: [
      "Multi-stack (FastAPI, SPA, Full-stack)",
      "3 opções de UI disponíveis",
      "Agentes por papel (análise, execução)",
      "Código limpo e manutenível",
    ],
    color: "purple",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Qualidade Assegurada",
    description:
      "Validação determinística em camadas garante que cada regra de negócio seja preservada na conversão.",
    details: [
      "2000+ testes unitários automáticos",
      "Verificação por milestone",
      "Governança auditável de regras",
      "Live View para stakeholders",
    ],
    color: "green",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple/5 blur-[120px]" />
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
            Pipeline
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Um pipeline em 4 passos que transforma seu legado em código moderno
            com qualidade garantida.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, i) => {
            const colorMap = {
              cyan: {
                bg: "bg-cyan/10",
                text: "text-cyan",
                border: "border-cyan/20",
                glow: "group-hover:shadow-cyan/10",
              },
              purple: {
                bg: "bg-purple/10",
                text: "text-purple",
                border: "border-purple/20",
                glow: "group-hover:shadow-purple/10",
              },
              green: {
                bg: "bg-green-400/10",
                text: "text-green-400",
                border: "border-green-400/20",
                glow: "group-hover:shadow-green-400/10",
              },
            };
            const c = colorMap[step.color as keyof typeof colorMap];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass group cursor-default rounded-2xl p-6 transition-all duration-300 hover:bg-white/8 hover:shadow-lg ${c.glow}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-muted/50">
                    {step.number}
                  </span>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.bg}`}
                  >
                    <step.icon size={20} className={c.text} />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <ChevronRight
                        size={14}
                        className={`mt-0.5 shrink-0 ${c.text}`}
                      />
                      <span className="text-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
