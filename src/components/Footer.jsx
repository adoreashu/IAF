import { Mail } from 'lucide-react'
import { portfolioData, resolveExternalUrl } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'

export default function Footer() {
  const { contact, footer, name } = portfolioData
  const github = resolveExternalUrl(contact.github)
  const linkedin = resolveExternalUrl(contact.linkedin)
  const email = resolveExternalUrl(contact.email)

  const links = [
    github && { href: github, label: 'GitHub', icon: GithubIcon, external: true },
    linkedin && { href: linkedin, label: 'LinkedIn', icon: LinkedinIcon, external: true },
    email && { href: email, label: 'Email', icon: Mail, external: false },
  ].filter(Boolean)

  return (
    <footer className="section-divider py-9">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-6">
        <p className="text-sm text-zinc-500">
          © {footer.year} {name}. {footer.tagline}
        </p>
        {links.length > 0 ? (
          <nav aria-label="Footer links">
            <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm">
              {links.map((link, i) => (
                <li key={link.label} className="inline-flex items-center">
                  {i > 0 ? (
                    <span className="mx-2 text-zinc-700 select-none" aria-hidden>
                      |
                    </span>
                  ) : null}
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-zinc-500 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <link.icon size={15} aria-hidden />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </footer>
  )
}
