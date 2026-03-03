"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const comparisonData = [
  {
    label: "Equipe",
    traditional: "7 desenvolvedores",
    wxcode: "1 desenvolvedor",
  },
  { label: "Prazo", traditional: "3 anos", wxcode: "6 meses" },
  {
    label: "Custo",
    traditional: "R$ 3.780.000",
    wxcode: "R$ 90.000",
  },
  { label: "Produtividade", traditional: "1x", wxcode: "42x" },
];

export default function ROI() {
  return (
    <section id="roi" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-cyan/5 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-purple/5 blur-[120px]" />
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
            ROI Comprovado
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Produtividade{" "}
            <span className="gradient-text">Incomparável</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Números reais. Economia mensurável. Resultados que transformam o
            negócio.
          </p>
        </motion.div>

        {/* Big numbers */}
        <div className="mb-16 grid gap-6 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass glow-cyan rounded-2xl p-8 text-center"
          >
            <div className="mb-2 text-5xl font-bold text-cyan sm:text-6xl">
              <AnimatedNumber target={42} suffix="x" />
            </div>
            <p className="text-sm text-muted">Mais produtivo</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass glow-purple rounded-2xl p-8 text-center"
          >
            <div className="mb-2 text-5xl font-bold text-purple sm:text-6xl">
              R$ <AnimatedNumber target={3} suffix="M+" />
            </div>
            <p className="text-sm text-muted">De economia</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="mb-2 text-5xl font-bold text-green-400 sm:text-6xl">
              <AnimatedNumber target={83} suffix="%" />
            </div>
            <p className="text-sm text-muted">Redução de prazo</p>
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong overflow-hidden rounded-2xl"
        >
          <div className="grid grid-cols-3 border-b border-white/10 p-4 text-center text-sm font-semibold sm:p-6">
            <div className="text-muted" />
            <div className="flex items-center justify-center gap-2 text-red-400">
              <TrendingDown size={16} />
              Tradicional
            </div>
            <div className="flex items-center justify-center gap-2 text-cyan">
              <TrendingUp size={16} />
              Com WXCode
            </div>
          </div>
          {comparisonData.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid grid-cols-3 border-b border-white/5 p-4 text-center last:border-b-0 sm:p-6"
            >
              <div className="text-sm font-medium text-muted">{row.label}</div>
              <div className="text-sm text-red-400/80">{row.traditional}</div>
              <div className="text-sm font-semibold text-cyan">
                {row.wxcode}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-sm text-muted/60"
        >
          * Posicionamento comercial conservador: 10x. Na prática, a ferramenta
          entrega até 42x de ganho real.
        </motion.p>
      </div>
    </section>
  );
}
