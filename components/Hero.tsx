"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroFacts, heroIntro, jobs, marqueeItems } from "@/lib/data";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const current = jobs[0];
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="top" className="grain relative isolate overflow-hidden pt-28 sm:pt-36">
      {/* ambient background */}
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -right-40 top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand/20 blur-[140px]" />
      <div aria-hidden className="absolute -left-52 top-96 -z-10 h-[26rem] w-[26rem] rounded-full bg-brand/10 blur-[140px]" />

      <div className="shell">
        <motion.p {...fade(0.1)} className="eyebrow">
          Portfolio · Islamabad, Pakistan
        </motion.p>

        <h1 className="mt-8 font-display text-[clamp(3.4rem,11.5vw,9.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-white">
          <span className="sr-only">{site.name}, </span>
          <span aria-hidden>
            <Line delay={0.15}>Syed Afnan</Line>
            <Line delay={0.28}>
              <span className="text-brand">Ahmed</span>
              <span className="text-white">.</span>
            </Line>
          </span>
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <motion.p {...fade(0.6)} className="border-l-2 border-brand pl-4 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
              <span className="block">Senior SEO Specialist</span>
              <span className="sr-only"> | </span>
              <span className="block">Social Media Manager</span>
            </motion.p>
            <motion.p {...fade(0.72)} className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {heroIntro}
            </motion.p>

            <motion.div {...fade(0.86)} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#experience"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand px-7 py-4 font-semibold text-ink transition hover:bg-brand-soft"
              >
                View My Experience
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </a>
              <a
                href={site.resumeHref}
                download
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-brand hover:text-brand"
              >
                Download Resume
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </motion.div>
          </div>

          <motion.aside {...fade(1)} aria-label="Current role" className="card p-6 backdrop-blur sm:p-7">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-brand" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              Currently
            </div>
            <p className="mt-4 font-display text-2xl font-bold text-white">{current.company}</p>
            <p className="mt-1 text-brand">{current.role}</p>
            <p className="mt-1 text-sm text-muted">{current.dates} · {current.mode}</p>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-edge pt-6">
              {heroFacts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-display text-xl font-bold text-white sm:text-2xl">{f.value}</dd>
                  <p className="mt-1 text-xs leading-snug text-muted">{f.label}</p>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </div>

      {/* keyword marquee */}
      <div className="marquee-mask mt-20 overflow-hidden border-y border-edge bg-charcoal/60 py-5 sm:mt-28" aria-hidden>
        <div className="marquee-track flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl font-semibold text-zinc-400 sm:text-2xl">
              {item}
              <span className="text-brand">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
