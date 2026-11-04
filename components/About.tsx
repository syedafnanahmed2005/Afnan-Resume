import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading eyebrow="About Me" title={<>Growth that is found by <span className="text-brand">people and AI</span>.</>} />
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <p className="font-display text-2xl font-medium leading-snug text-zinc-100 sm:text-3xl">{profile}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="card divide-y divide-edge">
              {[
                ["Focus", "SEO, GEO, AEO & LLM optimization"],
                ["Sectors", "Technology, visa consulting, gaming"],
                ["Also", "Video production & team leadership"],
                ["Based in", "Islamabad, Pakistan"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 px-6 py-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{k}</span>
                  <span className="text-right text-sm text-zinc-200">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
