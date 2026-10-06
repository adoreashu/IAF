import { Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { displayText, portfolioData, resolveExternalUrl } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Set to your Formspree endpoint, e.g. 'https://formspree.io/f/xxxx' */
const FORMSPREE_ENDPOINT = null

export default function Contact() {
  const { contact } = portfolioData
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const github = resolveExternalUrl(contact.github)
  const linkedin = resolveExternalUrl(contact.linkedin)
  const emailHref = resolveExternalUrl(contact.email)
  const emailDisplay = displayText(contact.email)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!EMAIL_PATTERN.test(form.email.trim())) next.email = 'Enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    else if (form.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(false)
    if (!validate()) return

    setSending(true)

    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
          }),
        })
        if (!res.ok) throw new Error('Request failed')
      }

      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setErrors({})
    } catch {
      setErrors({ message: 'Something went wrong. Try again or reach out via email when available.' })
    } finally {
      setSending(false)
    }
  }

  const hasContactChannels = emailDisplay || github || linkedin

  return (
    <section
      id="contact"
      className="section-divider section-pad scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Reach out"
            title={contact.heading}
            subtitle={contact.description}
            headingId="contact-heading"
          />
        </Reveal>

        <div
          className={`grid gap-8 ${hasContactChannels ? 'lg:grid-cols-[0.85fr_1.15fr] lg:gap-12' : ''}`}
        >
          {hasContactChannels ? (
            <Reveal delay={50}>
              <div className="space-y-3">
                <h3 className="sr-only">Contact channels</h3>
                {emailDisplay && emailHref ? (
                  <a
                    href={emailHref}
                    className="card-surface flex gap-3 p-4 transition-colors hover:border-accent/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <Mail size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-500">Email</p>
                      <p className="mt-1 break-all text-sm text-zinc-200">{emailDisplay}</p>
                    </div>
                  </a>
                ) : null}
                <div className="flex flex-wrap gap-2 pt-1">
                  {github ? (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-zinc-300 transition hover:border-accent/30 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  ) : null}
                  {linkedin ? (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-zinc-300 transition hover:border-accent/30 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <LinkedinIcon size={16} /> LinkedIn
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={hasContactChannels ? 100 : 0}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-surface p-6 sm:p-7"
              aria-label="Contact form"
            >
              {!hasContactChannels ? (
                <p className="mb-5 text-sm text-zinc-500">
                  Use the form below to draft a message. Connect Formspree or EmailJS in{' '}
                  <code className="text-zinc-400">Contact.jsx</code> to deliver submissions.
                </p>
              ) : null}

              <div className="space-y-4">
                <Field
                  id="contact-name"
                  label="Name"
                  value={form.name}
                  error={errors.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                />
                <Field
                  id="contact-email"
                  label="Email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                />
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-zinc-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full resize-y rounded-lg border border-white/10 bg-charcoal/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-accent/45 focus:outline-none focus:ring-2 focus:ring-accent/15"
                    placeholder="Share an opportunity, project idea, or question..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message ? (
                    <p id="contact-message-error" className="mt-2 text-sm text-red-400" role="alert">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              {submitted ? (
                <p
                  className="mt-4 rounded-lg border border-accent/25 bg-accent-muted px-3.5 py-3 text-sm text-zinc-200"
                  role="status"
                >
                  {FORMSPREE_ENDPOINT
                    ? 'Thank you — your message was submitted successfully.'
                    : 'Thank you — your message looks good. Hook up Formspree or EmailJS to deliver it; nothing was sent yet.'}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={sending}
                className="btn-primary mt-5 gap-2 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Send size={16} aria-hidden />
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, type = 'text', value, error, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-charcoal/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-accent/45 focus:outline-none focus:ring-2 focus:ring-accent/15"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
