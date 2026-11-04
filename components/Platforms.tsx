import { platforms } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Platforms() {
  return (
    <section id="platforms" className="section bg-charcoal/50">
      <div className="shell">
        <SectionHeading eyebrow="Social Media Platforms" title={<>Platforms <span className="text-brand">managed</span>.</>} />
        <ul className="divide-y divide-edge border-y border-edge">
          {platforms.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.04} y={16}>
              <div className="group flex items-center justify-between gap-6 py-6 transition-all duration-300 hover:pl-3 sm:py-7">
                <div className="flex items-baseline gap-5 sm:gap-8">
                  <span className="w-8 text-sm font-semibold text-zinc-500 transition-colors group-hover:text-brand">0{i + 1}</span>
                  <span className="font-display text-3xl font-bold text-white transition-colors group-hover:text-brand sm:text-5xl">
                    {p.name}
                  </span>
                </div>
                <span className="text-right text-sm text-muted sm:text-base">{p.focus}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
