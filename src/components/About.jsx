import { BookOpen, GraduationCap, Layers, Puzzle } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const iconMap = {
  graduation: GraduationCap,
  puzzle: Puzzle,
  layers: Layers,
  book: BookOpen,
}

export default function About() {
  const { about } = portfolioData

  return (
    <section
      id="about"
      className="section-divider section-pad scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Introduction" title="About Me" headingId="about-heading" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal delay={60}>
            <p className="max-w-2xl text-base leading-[1.75] text-zinc-400">
              {about.summary}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid grid-cols-2 gap-3">
              {about.highlights.map(({ label, icon }) => {
                const Icon = iconMap[icon] ?? BookOpen
                return (
                  <li
                    key={label}
                    className="card-surface card-surface-hover p-4 sm:p-5"
                  >
                    <Icon className="mb-2.5 h-5 w-5 text-accent" aria-hidden />
                    <p className="text-sm font-semibold text-zinc-100">{label}</p>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
