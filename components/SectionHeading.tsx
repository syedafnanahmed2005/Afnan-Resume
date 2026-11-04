import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="mb-14 max-w-3xl sm:mb-20">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="h-display mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
