"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Phone, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Assessment } from "@/components/site/Assessment";
import { BIZ, FIRM_TYPES, LEGAL } from "@/lib/content";
import { IS_CA } from "@/lib/site";
import { QUESTIONS, ANSWERS, score, tier, serviceLink } from "@/lib/securityCheck";

const Choice = ({ label, onClick, testid, active }) => (
  <button type="button" onClick={onClick} className={`w-full text-left border border-ink px-6 py-5 text-lg font-semibold transition-colors ${active ? "bg-ink text-paper" : "bg-white hover:bg-sand"}`} data-testid={testid}>
    {label}
  </button>
);

const Intro = ({ onPick }) => (
  <div data-testid="quiz-intro">
    <p className="lbl text-signal mb-6 fu">Free security check / 2 minutes</p>
    <h1 className="disp h1-size h1-tight">
      <span className="ln"><span>How protected</span></span>
      <span className="ln"><span>is your <em>firm?</em></span></span>
    </h1>
    <p className="fu d-1 text-lg md:text-xl leading-[1.6] mt-8 max-w-xl">Ten yes-or-no questions. You'll get a protection score and a plain-English list of what to fix first. No email required. We keep your anonymous answers to improve the check (<a href={LEGAL.notice} className="underline">{IS_CA ? "privacy notice" : "notice at collection"}</a>).</p>
    <p className="lbl mt-12 mb-4">First, what kind of firm are you?</p>
    <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
      {FIRM_TYPES.map((f) => <Choice key={f} label={f} onClick={() => onPick(f)} testid={`quiz-firm-${f.split(" ")[0].replace(",", "").toLowerCase()}`} />)}
    </div>
  </div>
);

const Question = ({ i, answers, onAnswer, onBack }) => {
  const q = QUESTIONS[i];
  return (
    <div data-testid="quiz-question" className="fu" key={q.id}>
      <div className="flex items-center justify-between mb-4">
        <p className="lbl text-smoke">Question {i + 1} of {QUESTIONS.length}</p>
        <button type="button" onClick={onBack} className="lbl inline-flex items-center gap-1 hover:text-signal" data-testid="quiz-back-btn"><ArrowLeft size={14} /> Back</button>
      </div>
      <Progress value={(i / QUESTIONS.length) * 100} className="h-1.5 rounded-none bg-slot [&>div]:bg-signal" data-testid="quiz-progress" />
      <h2 className="disp text-3xl md:text-5xl leading-[1.15] mt-12 max-w-3xl" data-testid="quiz-question-text">{q.q}</h2>
      <div className="grid sm:grid-cols-3 gap-3 mt-10 max-w-2xl">
        {ANSWERS.map(([v, label]) => <Choice key={v} label={label} active={answers[q.id] === v} onClick={() => onAnswer(q.id, v)} testid={`quiz-answer-${v}`} />)}
      </div>
    </div>
  );
};

const Result = ({ answers, onReset }) => {
  const n = score(answers);
  const t = tier(n);
  const gaps = QUESTIONS.filter((q) => answers[q.id] !== "yes").sort((a, b) => b.w - a.w);
  return (
    <div data-testid="quiz-result" className="fu">
      <p className="lbl text-signal mb-6">Your result</p>
      <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-end">
        <p className="disp big leading-none" data-testid="quiz-score">{n}<span className="text-4xl text-smoke">/100</span></p>
        <div>
          <h1 className="disp text-4xl md:text-5xl" data-testid="quiz-tier">{t.label}</h1>
          <p className="text-lg leading-[1.6] mt-3 max-w-xl">{t.line}</p>
        </div>
      </div>
      {gaps.length > 0 && (
        <div className="mt-16">
          <h2 className="disp text-3xl mb-6">What to fix first</h2>
          <ol className="border-t border-ink">
            {gaps.map((q, k) => (
              <li key={q.id} className="border-b border-ink py-5 grid md:grid-cols-[40px_1fr_auto] gap-3 items-baseline" data-testid={`quiz-gap-${q.id}`}>
                <span className="disp italic text-signal text-xl">{String(k + 1).padStart(2, "0")}</span>
                <span className="text-[17px] leading-[1.6]">{q.fix} <span className="text-smoke">({answers[q.id] === "no" ? "No" : "Not sure"})</span></span>
                <a href={serviceLink(q.service).href} className="text-sm font-semibold border-b border-signal pb-0.5 justify-self-start">{serviceLink(q.service).name}</a>
              </li>
            ))}
          </ol>
        </div>
      )}
      <div className="flex flex-wrap gap-4 mt-12">
        <a href="#assessment" className="group inline-flex items-center gap-3 bg-signal text-white px-6 py-4 font-semibold hover:bg-ink transition-colors" data-testid="quiz-book-btn">
          Go through this with an engineer, free <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href={BIZ.tel} className="inline-flex items-center gap-3 border border-ink px-6 py-4 font-semibold hover:bg-ink hover:text-paper transition-colors" data-testid="quiz-call-btn"><Phone size={18} /> {BIZ.phone}</a>
        <button type="button" onClick={onReset} className="inline-flex items-center gap-2 px-4 py-4 font-semibold text-smoke hover:text-ink" data-testid="quiz-reset-btn"><RotateCcw size={16} /> Start over</button>
      </div>
      <p className="text-sm text-smoke mt-8 max-w-xl">This check is a quick guide, not a full assessment or legal advice.</p>
    </div>
  );
};

// Anonymous results go to Netlify Forms ("security-check", declared in public/__forms.html).
const record = (firm, answers) =>
  fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": "security-check", firm_type: firm, score: String(score(answers)), answers: JSON.stringify(answers) }).toString(),
  }).catch(() => {});

export default function SecurityCheckView() {
  const [firm, setFirm] = useState(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const answer = (id, v) => {
    const next = { ...answers, [id]: v };
    setAnswers(next);
    if (i < QUESTIONS.length - 1) return setTimeout(() => setI(i + 1), 180);
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    record(firm, next);
  };
  const reset = () => { window.scrollTo({ top: 0 }); setFirm(null); setI(0); setAnswers({}); setDone(false); };

  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <section className="min-h-[70vh] pt-16 pb-24 md:pt-24 border-b border-ink" data-testid="security-check">
          <div className="max-w-5xl mx-auto px-6">
            {done ? <Result answers={answers} onReset={reset} />
              : firm ? <Question i={i} answers={answers} onAnswer={answer} onBack={() => (i === 0 ? setFirm(null) : setI(i - 1))} />
              : <Intro onPick={setFirm} />}
          </div>
        </section>
        <Assessment n="Next step" />
      </main>
      <Footer />
    </div>
  );
}
