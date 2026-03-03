"use client";

import { motion } from "framer-motion";
import { Eye, Layers, Thermometer, CheckCircle } from "lucide-react";

const challenges = [
  {
    icon: Layers,
    challenge: "Idempotência e Duplicidade",
    description: "LLMs podem gerar a mesma informação com nomes diferentes.",
    solution: "Deduplicação em camadas — determinística + semântica.",
  },
  {
    icon: Eye,
    challenge: "Gestão de Contexto",
    description: "Janelas de contexto limitadas para projetos grandes.",
    solution: "KB + MCP Server + 61 ferramentas especializadas.",
  },
  {
    icon: Thermometer,
    challenge: "Variação nas Respostas",
    description: "Cada execução pode gerar resultados diferentes.",
    solution: "KB como fonte de verdade + estabilização via MCP.",
  },
  {
    icon: CheckCircle,
    challenge: "Código Imperfeito",
    description: "Saídas de LLM precisam de verificação.",
    solution: "Geração massiva de testes + verificação por milestone.",
  },
];

export default function Transparency() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-purple">
            Diferencial de Credibilidade
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Transparência <span className="gradient-text">Técnica</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Nenhum concorrente fala abertamente sobre os desafios da IA.
            Nós falamos — e mostramos como resolvemos cada um.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {challenges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group cursor-default rounded-2xl p-6 transition-all duration-300 hover:bg-white/8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple/10">
                  <item.icon size={20} className="text-purple" />
                </div>
                <h3 className="text-base font-semibold">{item.challenge}</h3>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg bg-red-500/5 p-3">
                  <p className="text-sm text-red-400/80">
                    <span className="font-medium">Desafio:</span>{" "}
                    {item.description}
                  </p>
                </div>
                <div className="rounded-lg bg-green-400/5 p-3">
                  <p className="text-sm text-green-400/80">
                    <span className="font-medium">Solução:</span>{" "}
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-strong mt-8 rounded-2xl p-6 text-center"
        >
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">Resultado:</span>{" "}
            Saída controlada, validada por testes determinísticos e verificação
            por milestone. IA probabilística com{" "}
            <span className="text-cyan">resultados determinísticos</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
