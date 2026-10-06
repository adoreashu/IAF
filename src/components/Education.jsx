import { GraduationCap } from 'lucide-react'
import { displayText, portfolioData } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  const { education } = portfolioData
  const institution = displayText(education.institution)
  const duration = displayText(education.duration)

  return (
    <section
      id="education"
      className="section-divider section-pad scroll-mt-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Background" title="Education" headingId="education-heading" />
        </Reveal>

        <Reveal delay={70}>
          <article className="card-surface p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                <GraduationCap size={22} aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-zinc-50 sm:text-xl">
                  {education.degree}
                </h3>
                {institution ? (
                  <p className="mt-2 text-sm font-medium text-zinc-300">{institution}</p>
                ) : null}
                {duration ? (
                  <p className="mt-1 text-sm text-zinc-500">{duration}</p>
                ) : null}
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {education.description}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
