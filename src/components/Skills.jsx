import { Brain, Code2, Database, Globe, Terminal } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const categoryIcons = {
  Programming: Terminal,
  'Web Development': Globe,
  Database: Database,
  'Core Computer Science': Code2,
  'AI / ML': Brain,
}

export default function Skills() {
  const { skills } = portfolioData

  return (
    <section
      id="skills"
      className="section-divider section-pad scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Skills"
            subtitle="Technologies and concepts I use — organized by area, shown as badges rather than arbitrary percentages."
            headingId="skills-heading"
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((cat, index) => {
            const Icon = categoryIcons[cat.title] ?? Code2
            return (
              <Reveal key={cat.title} delay={index * 60}>
                <article className="card-surface card-surface-hover group h-full p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-muted text-accent">
                      <Icon size={18} aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-semibold text-zinc-100">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <li key={skill}>
                        <span className="inline-block rounded-md border border-white/10 bg-charcoal/60 px-2.5 py-1 text-xs font-medium text-zinc-300 sm:text-sm">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
