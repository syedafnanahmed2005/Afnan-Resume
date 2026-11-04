import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="shell">
        <SectionHeading eyebrow="Education" title={<>Academic <span className="text-brand">background</span>.</>} />
        <ul className="max-w-2xl">
          {education.map((e) => (
            <Reveal as="li" key={e.title}>
              <div className="card flex items-center gap-6 p-7 sm:p-8">
                <span aria-hidden className="h-14 w-1 rounded-full bg-brand" />
                <div>
                  <h3 className="h-display text-2xl">{e.title}</h3>
                  <p className="mt-1 text-muted">{e.school}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
