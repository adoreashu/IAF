export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
