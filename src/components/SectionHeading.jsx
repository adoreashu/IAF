export default function SectionHeading({ eyebrow, title, subtitle, headingId }) {
  return (
    <header className="mb-9 max-w-2xl sm:mb-10">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="font-display text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">{subtitle}</p>
      ) : null}
    </header>
  )
}
