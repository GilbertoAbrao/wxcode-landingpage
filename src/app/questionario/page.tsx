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

const questions = [
  {
    id: "team_size",
    label: "Quantos desenvolvedores trabalham no legado WinDev hoje?",
    type: "single" as const,
    options: [
      { value: "1-2", label: "1 a 2 desenvolvedores", points: 1 },
      { value: "3-5", label: "3 a 5 desenvolvedores", points: 2 },
      { value: "6-10", label: "6 a 10 desenvolvedores", points: 3 },
      { value: "10+", label: "Mais de 10 desenvolvedores", points: 4 },
    ],
  },
  {
    id: "codebase_size",
    label: "Qual o tamanho aproximado da base de código WinDev?",
    type: "single" as const,
    options: [
      { value: "small", label: "Até 50 telas/janelas", points: 1 },
      { value: "medium", label: "50 a 200 telas/janelas", points: 2 },
      { value: "large", label: "200 a 500 telas/janelas", points: 3 },
      { value: "enterprise", label: "Mais de 500 telas/janelas", points: 4 },
    ],
  },
  {
    id: "urgency",
    label: "Qual a urgência da modernização?",
    type: "single" as const,
    options: [
      {
        value: "exploring",
        label: "Estou explorando possibilidades",
        points: 1,
      },
      {
        value: "planning",
        label: "Planejando para os próximos 6-12 meses",
        points: 2,
      },
      {
        value: "decided",
        label: "Já decidimos modernizar, buscando parceiro",
        points: 4,
      },
      {
        value: "urgent",
        label: "Urgente — temos deadline ou pressão de negócio",
        points: 5,
      },
    ],
  },
  {
    id: "pain",
    label: "Quais dores você mais sente com o legado? (marque todas que se aplicam)",
    type: "multi" as const,
    options: [
      { value: "cost", label: "Custo alto de manutenção", points: 1 },
      { value: "talent", label: "Dificuldade de encontrar devs WinDev", points: 1 },
      { value: "docs", label: "Falta de documentação", points: 1 },
      { value: "risk", label: "Risco de perder conhecimento (aposentadoria, turnover)", points: 2 },
      { value: "speed", label: "Lentidão para entregar novas funcionalidades", points: 1 },
      { value: "integration", label: "Dificuldade de integração com sistemas modernos", points: 1 },
    ],
  },
  {
    id: "decision_role",
    label: "Qual seu papel na decisão de modernização?",
    type: "single" as const,
    options: [
      { value: "evaluator", label: "Estou avaliando para recomendar", points: 1 },
      { value: "influencer", label: "Influencio a decisão técnica", points: 2 },
      { value: "decision_maker", label: "Sou o decisor ou co-decisor", points: 4 },
      { value: "budget_owner", label: "Tenho autonomia de orçamento", points: 5 },
    ],
  },
  {
    id: "previous_attempts",
    label: "Já tentaram modernizar o legado antes?",
    type: "single" as const,
    options: [
      { value: "no", label: "Não, é a primeira vez que avaliamos", points: 1 },
      { value: "evaluated", label: "Avaliamos opções mas não iniciamos", points: 2 },
      { value: "failed", label: "Sim, mas o projeto falhou ou foi abandonado", points: 4 },
      { value: "partial", label: "Sim, temos uma migração parcial em andamento", points: 3 },
    ],
  },
];

function QuestionnaireContent() {
  const searchParams = useSearchParams();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const contactData = {
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
    company: searchParams.get("company") || "",
    role: searchParams.get("role") || "",
  };

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

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
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  }

  function handleSubmit() {
    // Calculate lead score
    let score = 0;
    for (const q of questions) {
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

    // TODO: send to API
    console.log("Lead data:", { contact: contactData, answers, score });
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
            Obrigado, {contactData.name.split(" ")[0]}!
          </h2>
          <p className="mb-6 text-muted">
            Recebemos suas informações e já estamos preparando uma análise
            personalizada para a{" "}
            <span className="font-medium text-foreground">
              {contactData.company}
            </span>
            . Nossa equipe entrará em contato em até 24 horas pelo e-mail{" "}
            <span className="font-medium text-cyan">{contactData.email}</span>.
          </p>
          <a
            href="/"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-purple px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
          >
            Voltar ao site
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
          Conte-nos sobre seu <span className="gradient-text">cenário</span>
        </h1>
        <p className="text-sm text-muted">
          {questions.length} perguntas rápidas para prepararmos sua análise
          personalizada.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-8 w-full max-w-xl">
        <div className="mb-2 flex justify-between text-xs text-muted">
          <span>
            Pergunta {current + 1} de {questions.length}
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
            <h2 className="mb-6 text-lg font-semibold">{question.label}</h2>

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
                    {option.label}
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
            Anterior
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canAdvance()}
            className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-purple px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25 disabled:cursor-default disabled:opacity-30"
          >
            {current === questions.length - 1 ? "Enviar" : "Próxima"}
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
