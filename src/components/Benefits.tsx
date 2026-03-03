"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Database,
  Shield,
  Zap,
  Users,
  Lightbulb,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Independência de Conhecimento",
    description:
      'Elimine a dependência dos "heróis tecnológicos". A KB extrai regras de negócio automaticamente e qualquer pessoa pode consultar via agente RAG.',
    highlight: "Democratize o conhecimento",
  },
  {
    icon: Database,
    title: "Ativo de Conhecimento Vivo",
    description:
      "A KB documenta um legado que nunca teve documentação. Regras de negócio, workflows, diagramas e notas de conversão — tudo organizado e pesquisável.",
    highlight: "Legado finalmente documentado",
  },
  {
    icon: Shield,
    title: "Redução de Riscos",
    description:
      "Testes determinísticos, verificação por milestone e governança auditável. Decisão consciente sobre débitos técnicos, não surpresas.",
    highlight: "Validação em camadas",
  },
  {
    icon: Zap,
    title: "Agilidade Tecnológica",
    description:
      "Liberdade de escolha de stack sem aprisionamento. Equipe focada em inovação, não manutenção de legado.",
    highlight: "Liberdade de stack",
  },
  {
    icon: Users,
    title: "Atração de Talentos",
    description:
      "Stacks modernas atraem e retêm os melhores profissionais. Abandone a dificuldade de contratar especialistas WinDev.",
    highlight: "Equipe motivada",
  },
  {
    icon: Lightbulb,
    title: "Curva de Produtividade Crescente",
    description:
      "Cada tela convertida enriquece a KB e acelera a próxima. Metodologia bottom-up com dependências resolvidas progressivamente.",
    highlight: "Cada passo acelera o próximo",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-cyan">
            Valor Estratégico
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Além da <span className="gradient-text">Produtividade</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            O WXCode não apenas converte código. Ele transforma o conhecimento
            do seu legado em ativo estratégico.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group cursor-default rounded-2xl p-6 transition-all duration-300 hover:bg-white/8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/10 to-purple/10">
                <benefit.icon size={24} className="text-cyan" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
              <span className="inline-block rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                {benefit.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
