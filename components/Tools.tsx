import { toolGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Tools() {
  return (
    <section id="tools" className="section">
      <div className="shell">
        <SectionHeading eyebrow="Tools & Technologies" title={<>The stack I work <span className="text-brand">with daily</span>.</>} />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {toolGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 0.1}>
              <h3 className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {g.title}
                <span aria-hidden className="h-px flex-1 bg-edge" />
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {g.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border border-edge bg-panel px-5 py-3 font-display text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_10px_30px_-12px_rgba(255,106,26,0.5)]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
