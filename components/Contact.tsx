"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const rows = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phone, href: site.phoneHref },
    { label: "WhatsApp", value: "Message on WhatsApp", href: site.whatsappHref, external: true },
    { label: "Location", value: site.location },
    ...site.links.map((l) => ({ label: l.label, value: l.href.replace(/^https?:\/\//, ""), href: l.href, external: true })),
  ];

  return (
    <section id="contact" className="section grain relative isolate overflow-hidden bg-charcoal/50">
      <div aria-hidden className="absolute -bottom-40 left-1/2 -z-10 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h-display mt-6 text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
            Let’s grow your <span className="text-brand">visibility</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal delay={0.12}>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-4 font-semibold text-ink transition hover:bg-brand-soft"
              >
                Email Me
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-brand hover:text-brand"
              >
                {copied ? "Copied ✓" : "Copy Email"}
              </button>
              <a
                href={site.resumeHref}
                download
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-brand hover:text-brand"
              >
                Download Resume
              </a>
              <span role="status" aria-live="polite" className="sr-only">{copied ? "Email address copied" : ""}</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="card divide-y divide-edge">
              {rows.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-6 px-6 py-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{r.label}</dt>
                  <dd className="text-right">
                    {r.href ? (
                      <a
                        href={r.href}
                        {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="break-all text-zinc-100 underline decoration-edge underline-offset-4 transition hover:text-brand hover:decoration-brand"
                      >
                        {r.value}
                      </a>
                    ) : (
                      <span className="text-zinc-100">{r.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
