import { Brain, Code2, Globe, Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const iconMap = {
  code: Code2,
  globe: Globe,
  brain: Brain,
  sparkles: Sparkles,
}

export default function Interests() {
  const { interests } = portfolioData

  return (
    <section
      id="interests"
      className="section-divider section-pad scroll-mt-24"
      aria-labelledby="interests-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Focus areas"
            title="What I Do"
            subtitle="The spaces where I spend most of my learning and building time."
            headingId="interests-heading"
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {interests.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Code2
            return (
              <Reveal key={item.title} delay={index * 70}>
                <li>
                  <article className="card-surface card-surface-hover h-full p-5 sm:p-6">
                    <Icon className="mb-3 h-5 w-5 text-accent" aria-hidden />
                    <h3 className="font-display text-base font-semibold text-zinc-50 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </article>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
