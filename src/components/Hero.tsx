"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: string;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {value}
      {suffix}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-purple/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-cyan">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
              Plataforma de Modernização com IA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            O Passaporte Definitivo para a{" "}
            <span className="gradient-text">Modernização</span> do seu Legado{" "}
            <span className="gradient-text">WinDev</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-muted sm:text-xl"
          >
            Um desenvolvedor.{" "}
            <span className="font-semibold text-cyan">42x mais produtivo</span>.
            Transforme{" "}
            <span className="font-semibold text-purple">3 anos de projeto</span>{" "}
            em{" "}
            <span className="font-semibold text-foreground">6 meses</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-16 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contato"
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-purple px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
            >
              Solicite uma Demonstração
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#como-funciona"
              className="glass group flex cursor-pointer items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-foreground transition-all duration-200 hover:bg-white/10"
            >
              <Play size={18} className="text-cyan" />
              Veja Como Funciona
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { value: "42x", label: "Mais produtivo" },
              { value: "6", label: "Meses de projeto", suffix: " meses" },
              { value: "1", label: "Desenvolvedor", suffix: " dev" },
              { value: "2000+", label: "Testes automáticos" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl px-4 py-6 text-center"
              >
                <div className="mb-1 text-2xl font-bold sm:text-3xl">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-muted sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pipeline animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 w-full max-w-4xl"
          >
            <div className="glass-strong relative overflow-hidden rounded-2xl p-6 sm:p-8">
              <div className="scanline relative flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                {[
                  { icon: "{ }", label: "Código WinDev", color: "text-muted" },
                  { icon: "→", label: "", color: "text-cyan/50" },
                  { icon: "KB", label: "Knowledge Base", color: "text-cyan" },
                  { icon: "→", label: "", color: "text-cyan/50" },
                  { icon: "AI", label: "Conversão IA", color: "text-purple" },
                  { icon: "→", label: "", color: "text-purple/50" },
                  {
                    icon: "</>",
                    label: "Código Moderno",
                    color: "text-green-400",
                  },
                ].map((step, i) =>
                  step.label === "" ? (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className={`hidden font-mono text-lg ${step.color} sm:block`}
                    >
                      {step.icon}
                    </motion.span>
                  ) : (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 font-mono text-lg font-bold ${step.color}`}
                      >
                        {step.icon}
                      </div>
                      <span className="text-xs text-muted">{step.label}</span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
