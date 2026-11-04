"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { jobs, type Job } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const PREVIEW = 5;

function JobCard({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const collapsible = job.bullets.length > PREVIEW;
  const panelId = `job-${index}-details`;

  return (
    <motion.li
      className="relative pl-10 sm:pl-16"
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* timeline node: outer span positions it, inner span animates scale */}
      <span aria-hidden className="absolute top-8 z-10 -translate-x-1/2" style={{ left: "0.75rem" }}>
        <motion.span
          className="grid h-6 w-6 place-items-center rounded-full border-2 border-brand bg-ink"
          initial={reduce ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
        >
          <span className={`h-2 w-2 rounded-full bg-brand ${job.current ? "animate-pulseDot" : ""}`} />
        </motion.span>
      </span>

      <SpotlightCard className="p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="h-display text-2xl sm:text-[1.7rem]">
              {job.company}
              {job.current && (
                <span className="ml-3 inline-block translate-y-[-3px] rounded-full bg-brand px-2.5 py-1 align-middle text-[0.65rem] font-bold uppercase tracking-widest text-ink">
                  Current
                </span>
              )}
            </h3>
            {job.note && <p className="mt-1 text-sm text-muted">{job.note}</p>}
            <p className="mt-2 font-medium text-brand">
              {job.role} <span className="text-zinc-500">·</span> <span className="text-zinc-300">{job.mode}</span>
            </p>
          </div>
          <p className="shrink-0 rounded-full border border-edge bg-charcoal px-4 py-1.5 text-sm font-semibold text-zinc-200">
            {job.dates}
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          {job.bullets.slice(0, PREVIEW).map((b) => (
            <li key={b} className="flex gap-3 leading-relaxed text-zinc-300">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-brand" />
              {b}
            </li>
          ))}
        </ul>

        {collapsible && (
          <>
            {/* Remaining responsibilities stay in the DOM (crawlable); grid-rows animates height. */}
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="space-y-3 pt-3">
                  {job.bullets.slice(PREVIEW).map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-zinc-300">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={panelId}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand"
            >
              {open ? "Show fewer" : `Show all ${job.bullets.length} responsibilities`}
              <span aria-hidden className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>↓</span>
            </button>
          </>
        )}
      </SpotlightCard>
    </motion.li>
  );
}

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });

  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Professional Experience"
          title={<>Career timeline, <span className="text-brand">newest first</span>.</>}
          lead="Six roles across SEO, social media, video and team leadership."
        />

        <div className="relative">
          {/* track + animated fill */}
          <div aria-hidden className="absolute bottom-0 top-0 w-px bg-edge" style={{ left: "0.75rem" }} />
          <motion.div
            aria-hidden
            className="absolute top-0 w-px origin-top bg-gradient-to-b from-brand via-brand to-brand/30"
            style={{ left: "0.75rem", bottom: 0, scaleY }}
          />
          <ol ref={ref} className="space-y-8">
            {jobs.map((job, i) => (
              <JobCard key={job.company} job={job} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
