type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted">{description}</p>
    </div>
  );
}
