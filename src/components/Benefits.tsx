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
import { useTranslation } from "@/i18n";

const benefitIcons = [BookOpen, Database, Shield, Zap, Users, Lightbulb];

export default function Benefits() {
  const { t } = useTranslation();

  const benefits = [
    { icon: benefitIcons[0], title: t("benefits.title1"), description: t("benefits.desc1"), highlight: t("benefits.highlight1") },
    { icon: benefitIcons[1], title: t("benefits.title2"), description: t("benefits.desc2"), highlight: t("benefits.highlight2") },
    { icon: benefitIcons[2], title: t("benefits.title3"), description: t("benefits.desc3"), highlight: t("benefits.highlight3") },
    { icon: benefitIcons[3], title: t("benefits.title4"), description: t("benefits.desc4"), highlight: t("benefits.highlight4") },
    { icon: benefitIcons[4], title: t("benefits.title5"), description: t("benefits.desc5"), highlight: t("benefits.highlight5") },
    { icon: benefitIcons[5], title: t("benefits.title6"), description: t("benefits.desc6"), highlight: t("benefits.highlight6") },
  ];

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
            {t("benefits.sectionLabel")}
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t("benefits.heading")} <span className="gradient-text">{t("benefits.headingHighlight")}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            {t("benefits.subheading")}
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
