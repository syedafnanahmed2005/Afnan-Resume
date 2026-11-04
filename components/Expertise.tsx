import { expertise, fullExpertise } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Expertise() {
  return (
    <section id="expertise" className="section bg-charcoal/50">
      <div className="shell">
        <SectionHeading
          eyebrow="Expertise"
          title={<>Search is changing. <span className="text-brand">So is the work.</span></>}
          lead="From classic technical SEO to visibility inside ChatGPT, Gemini, Perplexity, and Google AI Overviews."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal as="li" key={e.id} delay={(i % 3) * 0.08} className={i === 0 ? "lg:col-span-2" : ""}>
              <SpotlightCard className="h-full p-7">
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
                  <span aria-hidden className="text-xl text-zinc-600 transition-colors group-hover:text-brand">↗</span>
                </div>
                <h3 className="h-display mt-8 text-2xl sm:text-3xl">{e.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{e.kicker}</p>
                <p className="mt-4 leading-relaxed text-muted">{e.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Full expertise list</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {fullExpertise.map((x) => (
              <li key={x} className="chip transition-colors hover:border-brand hover:text-white">{x}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
