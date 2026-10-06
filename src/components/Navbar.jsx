import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_SECTION_IDS, portfolioData } from '../data/portfolioData'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { scrollToSection } from '../utils/scrollToSection'

export default function Navbar() {
  const activeId = useScrollSpy(NAV_SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNav = (id) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-white/[0.06] bg-charcoal/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6"
        aria-label="Primary"
      >
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="max-w-[55vw] truncate text-left font-display text-xs font-semibold tracking-[0.12em] text-zinc-100 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:max-w-none sm:text-sm sm:tracking-wide"
        >
          {portfolioData.nameDisplay}
        </button>

        <ul className="hidden items-center gap-0.5 md:flex">
          {portfolioData.navLinks.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNav(link.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive ? 'text-accent' : 'text-zinc-500 hover:text-zinc-100'
                  }`}
                >
                  {link.label}
                  {isActive ? (
                    <span
                      className="absolute inset-x-2.5 -bottom-px h-px rounded-full bg-accent"
                      aria-hidden
                    />
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-100 transition-colors hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-white/[0.06] bg-charcoal/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-0.5 px-5 py-3 pb-4">
            {portfolioData.navLinks.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`w-full rounded-lg px-3 py-3 text-left text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      isActive
                        ? 'bg-accent-muted text-accent'
                        : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-50'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
