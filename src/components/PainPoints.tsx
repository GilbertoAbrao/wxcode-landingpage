"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  Lock,
  FileQuestion,
  AlertTriangle,
} from "lucide-react";

const pains = [
  {
    icon: DollarSign,
    title: "Custo Exorbitante",
    description:
      "Equipes grandes mantendo código que ninguém domina completamente. Orçamentos que só crescem.",
  },
  {
    icon: Users,
    title: "Escassez de Talentos",
    description:
      "Cada vez mais difícil encontrar desenvolvedores WinDev. O mercado está secando.",
  },
  {
    icon: Lock,
    title: "Aprisionamento Tecnológico",
    description:
      "Preso a um ecossistema sem evolução. Sem acesso a novas tecnologias e integrações modernas.",
  },
  {
    icon: FileQuestion,
    title: "Falta de Documentação",
    description:
      'O conhecimento existe só na cabeça de poucos especialistas — os "heróis tecnológicos".',
  },
  {
    icon: AlertTriangle,
    title: "Migrações que Falham",
    description:
      "Projetos de migração que estouram orçamento, prazo, ou são abandonados completamente.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Você conhece <span className="gradient-text">essa dor</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Manter um legado WinDev é caro, arriscado e insustentável.
            Você não está sozinho.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group cursor-default rounded-2xl p-6 transition-all duration-300 hover:bg-white/8 hover:shadow-lg hover:shadow-red-500/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                <pain.icon size={24} className="text-red-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold">{pain.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
