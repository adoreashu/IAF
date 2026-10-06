import { ArrowDown, FileText } from 'lucide-react'
import { portfolioData, resolveExternalUrl } from '../data/portfolioData'
import { scrollToSection } from '../utils/scrollToSection'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import Reveal from './Reveal'

function SocialLink({ href, label, children }) {
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-zinc-200 transition-colors hover:border-accent/35 hover:bg-accent-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
      <span>{label}</span>
    </a>
  )
}

export default function Hero() {
  const { hero, contact, nameDisplay, roleLine1, roleLine2 } = portfolioData
  const github = resolveExternalUrl(contact.github)
  const linkedin = resolveExternalUrl(contact.linkedin)
  const resume = resolveExternalUrl(contact.resume)
  const socialLinks = [github, linkedin, resume].filter(Boolean)

  return (
    <section
      id="home"
      className="relative min-h-[100svh] scroll-mt-24 overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <div className="max-w-xl lg:max-w-none">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {nameDisplay}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-3 text-sm text-zinc-400">{hero.greeting}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              id="hero-heading"
              className="mt-4 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.65rem]"
            >
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 text-base font-medium text-zinc-300">{roleLine1}</p>
            <p className="text-base font-medium text-zinc-400">{roleLine2}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
              {hero.description}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View My Work
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="btn-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contact Me
              </button>
            </div>
          </Reveal>
          {socialLinks.length > 0 ? (
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <SocialLink href={github} label="GitHub">
                  <GithubIcon size={17} />
                </SocialLink>
                <SocialLink href={linkedin} label="LinkedIn">
                  <LinkedinIcon size={17} />
                </SocialLink>
                <SocialLink href={resume} label="Resume">
                  <FileText size={17} aria-hidden />
                </SocialLink>
              </div>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={100} className="relative mx-auto w-full max-w-[340px] sm:max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-h-[380px]">
            {hero.floatingTags.map((tag, i) => (
              <span
                key={tag}
                className={`hero-float absolute max-w-[calc(100%-1rem)] truncate rounded-md border border-white/10 bg-surface/90 px-2.5 py-1 font-mono text-[0.65rem] text-zinc-400 sm:text-xs hero-float-${i % 5}`}
                aria-hidden
              >
                {tag}
              </span>
            ))}

            <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <div className="avatar-orbit h-[88%] w-[88%] rounded-full border border-dashed border-accent/20" />
            </div>

            <div className="card-surface absolute inset-5 flex flex-col items-center justify-center p-6 text-center sm:inset-7">
              <div
                className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-accent/25 bg-gradient-to-b from-accent-muted to-transparent sm:h-28 sm:w-28"
                role="img"
                aria-label="Profile avatar with initials A K"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
                <span className="font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
                  AK
                </span>
              </div>
              <p className="font-display text-base font-semibold text-zinc-100 sm:text-lg">
                {portfolioData.name}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 sm:text-sm">
                {roleLine1}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-10 flex justify-center sm:mt-12">
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Scroll to About section"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.2em]">About</span>
          <ArrowDown size={16} className="motion-safe:animate-bounce-soft" aria-hidden />
        </button>
      </div>
    </section>
  )
}
