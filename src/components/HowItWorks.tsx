"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  Code2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "@/i18n";

const stepIcons = [Upload, Brain, Code2, ShieldCheck];
const stepColors = ["cyan", "cyan", "purple", "green"] as const;

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: stepIcons[0],
      title: t("how.step1Title"),
      description: t("how.step1Desc"),
      details: [t("how.step1Detail1"), t("how.step1Detail2"), t("how.step1Detail3"), t("how.step1Detail4")],
      color: stepColors[0],
    },
    {
      number: "02",
      icon: stepIcons[1],
      title: t("how.step2Title"),
      description: t("how.step2Desc"),
      details: [t("how.step2Detail1"), t("how.step2Detail2"), t("how.step2Detail3"), t("how.step2Detail4")],
      color: stepColors[1],
    },
    {
      number: "03",
      icon: stepIcons[2],
      title: t("how.step3Title"),
      description: t("how.step3Desc"),
      details: [t("how.step3Detail1"), t("how.step3Detail2"), t("how.step3Detail3"), t("how.step3Detail4")],
      color: stepColors[2],
    },
    {
      number: "04",
      icon: stepIcons[3],
      title: t("how.step4Title"),
      description: t("how.step4Desc"),
      details: [t("how.step4Detail1"), t("how.step4Detail2"), t("how.step4Detail3"), t("how.step4Detail4")],
      color: stepColors[3],
    },
  ];

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
            {t("how.sectionLabel")}
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t("how.heading")} <span className="gradient-text">{t("how.headingHighlight")}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            {t("how.subheading")}
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
