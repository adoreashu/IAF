import { ExternalLink } from 'lucide-react'
import { portfolioData, resolveExternalUrl } from '../data/portfolioData'
import { GithubIcon } from './icons/SocialIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function ProjectAction({ href, label, icon: Icon, variant = 'primary' }) {
  const resolved = resolveExternalUrl(href)
  if (!resolved) return null

  const className =
    variant === 'primary'
      ? 'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-charcoal transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
      : 'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-accent/30 hover:bg-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

  return (
    <a href={resolved} target="_blank" rel="noopener noreferrer" className={className}>
      <Icon size={16} aria-hidden />
      {label}
    </a>
  )
}

function ProjectCard({ project }) {
  const live = resolveExternalUrl(project.liveUrl)
  const github = resolveExternalUrl(project.githubUrl)
  const hasActions = live || github

  return (
    <article className="card-surface card-surface-hover overflow-hidden lg:flex lg:min-h-[210px]">
      <div
        className="relative flex min-h-[120px] flex-col justify-end bg-gradient-to-br from-accent-muted via-surface to-charcoal p-6 lg:min-h-0 lg:w-[38%] lg:p-7"
        aria-hidden
      >
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
          Featured project
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-zinc-100">
          {project.category ?? 'Project'}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-xl font-semibold text-zinc-50">{project.title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="rounded-md border border-white/10 bg-charcoal px-2 py-0.5 text-xs font-medium text-zinc-400">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        {hasActions ? (
          <div className="mt-5 flex flex-wrap gap-2">
            <ProjectAction href={project.liveUrl} label="View Project" icon={ExternalLink} />
            <ProjectAction href={project.githubUrl} label="GitHub" icon={GithubIcon} variant="secondary" />
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section
      id="projects"
      className="section-divider section-pad scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="Projects"
            subtitle="Hands-on builds that show how I apply programming, ML, and problem-solving."
            headingId="projects-heading"
          />
        </Reveal>

        <ul className="grid gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <li>
                <ProjectCard project={project} />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
