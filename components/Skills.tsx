import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Skills() {
  return (
    <section id="skills" className="section bg-charcoal/50">
      <div className="shell">
        <SectionHeading eyebrow="Core Skills" title={<>Three disciplines, <span className="text-brand">one growth system</span>.</>} />
        <ul className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 0.1}>
              <SpotlightCard className="h-full p-7 sm:p-8">
                <span className="outline-text font-display text-7xl font-extrabold leading-none" aria-hidden>
                  {g.index}
                </span>
                <h3 className="h-display mt-6 text-2xl">{g.title}</h3>
                <ul className="mt-6 space-y-2.5">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-center justify-between rounded-xl border border-edge bg-ink/60 px-4 py-3 text-[0.95rem] font-medium text-zinc-100 transition-all duration-300 hover:translate-x-1 hover:border-brand/60"
                    >
                      {s}
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
