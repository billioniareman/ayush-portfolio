export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 bg-oxblood" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-ivory">
        {title}
      </h2>
      {description && (
        <p className="mt-3 font-serif italic text-base leading-relaxed text-sage">
          &ldquo;{description}&rdquo;
        </p>
      )}
      <div className="mt-4 h-[1px] w-20 bg-brass/40" />
    </div>
  );
}
