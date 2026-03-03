"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Clock,
  Eye,
  HandshakeIcon,
} from "lucide-react";
import { useTranslation } from "@/i18n";

const stepIcons = [Clock, Eye, ShieldCheck, HandshakeIcon];

export default function Pricing() {
  const { t } = useTranslation();

  const steps = [
    { icon: stepIcons[0], title: t("pricing.step1Title"), description: t("pricing.step1Desc") },
    { icon: stepIcons[1], title: t("pricing.step2Title"), description: t("pricing.step2Desc") },
    { icon: stepIcons[2], title: t("pricing.step3Title"), description: t("pricing.step3Desc") },
    { icon: stepIcons[3], title: t("pricing.step4Title"), description: t("pricing.step4Desc") },
  ];

  const includes = [
    t("pricing.include1"),
    t("pricing.include2"),
    t("pricing.include3"),
    t("pricing.include4"),
    t("pricing.include5"),
    t("pricing.include6"),
  ];

  return (
    <section id="precos" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/5 blur-[150px]" />
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
            {t("pricing.sectionLabel")}
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">{t("pricing.headingHighlight")}</span>{" "}
            {t("pricing.headingSuffix")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            {t("pricing.subheading")}
          </p>
        </motion.div>

        {/* How the PoC works */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group cursor-default rounded-2xl p-6 transition-all duration-300 hover:bg-white/8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10">
                <step.icon size={20} className="text-cyan" />
              </div>
              <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What's included + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong overflow-hidden rounded-2xl"
        >
          <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <h3 className="mb-2 text-2xl font-bold">
                {t("pricing.includedTitle")}
              </h3>
              <p className="mb-6 text-sm text-muted">
                {t("pricing.includedSubtitle")}
              </p>
              <ul className="space-y-3">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-green-400"
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 text-center">
              <div className="mb-2 text-5xl font-bold text-cyan">30</div>
              <div className="mb-1 text-lg font-semibold">{t("pricing.ctaDays")}</div>
              <p className="mb-6 text-sm text-muted">
                {t("pricing.ctaSublabel")}
              </p>
              <a
                href="#contato"
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-purple px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
              >
                {t("pricing.ctaButton")}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <p className="mt-4 text-xs text-muted/60">
                {t("pricing.ctaDisclaimer")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
