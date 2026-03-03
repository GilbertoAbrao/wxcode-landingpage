"use client";

import { motion } from "framer-motion";
import { Eye, Layers, Thermometer, CheckCircle } from "lucide-react";
import { useTranslation } from "@/i18n";

const challengeIcons = [Layers, Eye, Thermometer, CheckCircle];

export default function Transparency() {
  const { t } = useTranslation();

  const challenges = [
    {
      icon: challengeIcons[0],
      challenge: t("transparency.challenge1"),
      description: t("transparency.desc1"),
      solution: t("transparency.solution1"),
    },
    {
      icon: challengeIcons[1],
      challenge: t("transparency.challenge2"),
      description: t("transparency.desc2"),
      solution: t("transparency.solution2"),
    },
    {
      icon: challengeIcons[2],
      challenge: t("transparency.challenge3"),
      description: t("transparency.desc3"),
      solution: t("transparency.solution3"),
    },
    {
      icon: challengeIcons[3],
      challenge: t("transparency.challenge4"),
      description: t("transparency.desc4"),
      solution: t("transparency.solution4"),
    },
  ];

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
            {t("transparency.sectionLabel")}
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t("transparency.heading")} <span className="gradient-text">{t("transparency.headingHighlight")}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            {t("transparency.subheading")}
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
                    <span className="font-medium">{t("transparency.challengeLabel")}</span>{" "}
                    {item.description}
                  </p>
                </div>
                <div className="rounded-lg bg-green-400/5 p-3">
                  <p className="text-sm text-green-400/80">
                    <span className="font-medium">{t("transparency.solutionLabel")}</span>{" "}
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
            <span className="font-semibold text-foreground">{t("transparency.resultLabel")}</span>{" "}
            {t("transparency.resultText")}{" "}
            <span className="text-cyan">{t("transparency.resultHighlight")}</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
