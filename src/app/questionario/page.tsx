"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  CircleDot,
} from "lucide-react";
import { useTranslation } from "@/i18n";

interface QuestionDef {
  id: string;
  labelKey: string;
  type: "single" | "multi";
  options: { value: string; optKey: string; points: number }[];
}

const questionDefs: QuestionDef[] = [
  {
    id: "team_size",
    labelKey: "questionnaire.q1Label",
    type: "single",
    options: [
      { value: "1-2", optKey: "questionnaire.q1Opt1", points: 1 },
      { value: "3-5", optKey: "questionnaire.q1Opt2", points: 2 },
      { value: "6-10", optKey: "questionnaire.q1Opt3", points: 3 },
      { value: "10+", optKey: "questionnaire.q1Opt4", points: 4 },
    ],
  },
  {
    id: "codebase_size",
    labelKey: "questionnaire.q2Label",
    type: "single",
    options: [
      { value: "small", optKey: "questionnaire.q2Opt1", points: 1 },
      { value: "medium", optKey: "questionnaire.q2Opt2", points: 2 },
      { value: "large", optKey: "questionnaire.q2Opt3", points: 3 },
      { value: "enterprise", optKey: "questionnaire.q2Opt4", points: 4 },
    ],
  },
  {
    id: "urgency",
    labelKey: "questionnaire.q3Label",
    type: "single",
    options: [
      { value: "exploring", optKey: "questionnaire.q3Opt1", points: 1 },
      { value: "planning", optKey: "questionnaire.q3Opt2", points: 2 },
      { value: "decided", optKey: "questionnaire.q3Opt3", points: 4 },
      { value: "urgent", optKey: "questionnaire.q3Opt4", points: 5 },
    ],
  },
  {
    id: "pain",
    labelKey: "questionnaire.q4Label",
    type: "multi",
    options: [
      { value: "cost", optKey: "questionnaire.q4Opt1", points: 1 },
      { value: "talent", optKey: "questionnaire.q4Opt2", points: 1 },
      { value: "docs", optKey: "questionnaire.q4Opt3", points: 1 },
      { value: "risk", optKey: "questionnaire.q4Opt4", points: 2 },
      { value: "speed", optKey: "questionnaire.q4Opt5", points: 1 },
      { value: "integration", optKey: "questionnaire.q4Opt6", points: 1 },
    ],
  },
  {
    id: "decision_role",
    labelKey: "questionnaire.q5Label",
    type: "single",
    options: [
      { value: "evaluator", optKey: "questionnaire.q5Opt1", points: 1 },
      { value: "influencer", optKey: "questionnaire.q5Opt2", points: 2 },
      { value: "decision_maker", optKey: "questionnaire.q5Opt3", points: 4 },
      { value: "budget_owner", optKey: "questionnaire.q5Opt4", points: 5 },
    ],
  },
  {
    id: "previous_attempts",
    labelKey: "questionnaire.q6Label",
    type: "single",
    options: [
      { value: "no", optKey: "questionnaire.q6Opt1", points: 1 },
      { value: "evaluated", optKey: "questionnaire.q6Opt2", points: 2 },
      { value: "failed", optKey: "questionnaire.q6Opt3", points: 4 },
      { value: "partial", optKey: "questionnaire.q6Opt4", points: 3 },
    ],
  },
];

function QuestionnaireContent() {
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const contactData = {
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
    company: searchParams.get("company") || "",
    role: searchParams.get("role") || "",
  };

  const question = questionDefs[current];
  const progress = ((current + 1) / questionDefs.length) * 100;

  function selectSingle(value: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  }

  function toggleMulti(value: string) {
    setAnswers((prev) => {
      const current = (prev[question.id] as string[]) || [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [question.id]: next };
    });
  }

  function canAdvance() {
    const answer = answers[question.id];
    if (!answer) return false;
    if (Array.isArray(answer)) return answer.length > 0;
    return true;
  }

  function handleNext() {
    if (current < questionDefs.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  }

  async function handleSubmit() {
    let score = 0;
    for (const q of questionDefs) {
      const answer = answers[q.id];
      if (!answer) continue;
      if (Array.isArray(answer)) {
        for (const v of answer) {
          const opt = q.options.find((o) => o.value === v);
          if (opt) score += opt.points;
        }
      } else {
        const opt = q.options.find((o) => o.value === answer);
        if (opt) score += opt.points;
      }
    }

    // Fire-and-forget: failure does not block the user
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact: contactData, answers, score }),
    }).catch(() => {});

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-strong mx-auto max-w-lg rounded-2xl p-10 text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-400/10">
              <CheckCircle size={32} className="text-green-400" />
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-bold">
            {t("questionnaire.successTitle").replace("{name}", contactData.name.split(" ")[0])}
          </h2>
          <p className="mb-6 text-muted">
            {t("questionnaire.successBody1")}{" "}
            <span className="font-medium text-foreground">
              {contactData.company}
            </span>
            {t("questionnaire.successBody2")}{" "}
            <span className="font-medium text-cyan">{contactData.email}</span>.
          </p>
          <a
            href="/"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-purple px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
          >
            {t("questionnaire.successBack")}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      {/* Header */}
      <div className="mb-10 text-center">
        <a href="/" className="mb-6 inline-flex items-center">
          <Image
            src="/wxcode-logo.png"
            alt="WXCode"
            width={140}
            height={35}
            className="h-8 w-auto"
            priority
          />
        </a>
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
          {t("questionnaire.headerTitle")} <span className="gradient-text">{t("questionnaire.headerHighlight")}</span>
        </h1>
        <p className="text-sm text-muted">
          {t("questionnaire.headerSubtitle")
            .replace("{count}", String(questionDefs.length))}
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-8 w-full max-w-xl">
        <div className="mb-2 flex justify-between text-xs text-muted">
          <span>
            {t("questionnaire.progressLabel")
              .replace("{current}", String(current + 1))
              .replace("{total}", String(questionDefs.length))}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan to-purple"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="glass-strong rounded-2xl p-8"
          >
            <h2 className="mb-6 text-lg font-semibold">{t(question.labelKey)}</h2>

            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected =
                  question.type === "multi"
                    ? ((answers[question.id] as string[]) || []).includes(
                        option.value
                      )
                    : answers[question.id] === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      question.type === "multi"
                        ? toggleMulti(option.value)
                        : selectSingle(option.value)
                    }
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200 ${
                      isSelected
                        ? "border-cyan/50 bg-cyan/10 text-foreground"
                        : "border-white/10 bg-white/5 text-muted hover:border-white/20 hover:bg-white/8"
                    }`}
                  >
                    <CircleDot
                      size={18}
                      className={`shrink-0 transition-colors duration-200 ${
                        isSelected ? "text-cyan" : "text-white/20"
                      }`}
                    />
                    {t(option.optKey)}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
            disabled={current === 0}
            className="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground disabled:cursor-default disabled:opacity-30"
          >
            <ArrowLeft size={16} />
            {t("questionnaire.navBack")}
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canAdvance()}
            className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-purple px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25 disabled:cursor-default disabled:opacity-30"
          >
            {current === questionDefs.length - 1 ? t("questionnaire.navSubmit") : t("questionnaire.navNext")}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Questionario() {
  return (
    <Suspense>
      <QuestionnaireContent />
    </Suspense>
  );
}
