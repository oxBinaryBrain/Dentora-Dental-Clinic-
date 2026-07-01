import { motion } from 'motion/react'

const FOOTER_LINKS = {
  Services: [
    'Dental Checkup',
    'Teeth Cleaning',
    'Tooth Filling',
    'Gum Treatment',
    'Retainers',
    'Teeth Whitening',
  ],
  Practice: ['About Us', 'Our Team', 'Testimonials', 'Patient Forms', 'Careers'],
  Resources: ['First Visit Guide', 'Insurance & Payment', 'Membership Plan', 'FAQ', 'Blog'],
}

const SOCIAL = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      className="relative w-full border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-soft)]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 md:px-8 md:py-20 lg:px-10">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        {/* Top: brand + columns */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <a href="#home" className="inline-flex items-center gap-2.5 text-[color:var(--color-ink)]">
              <ToothMark className="h-6 w-6 text-[color:var(--color-accent)]" />
              <span className="text-[18px] font-semibold tracking-[-0.01em]">Dentora</span>
            </a>
            <p className="mt-5 max-w-[36ch] text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)]">
              A small, independent dental studio in the heart of the city.
              Personalized care, modern tools, honest pricing.
            </p>

            <div className="mt-6 space-y-2 text-[13.5px] text-[color:var(--color-ink-muted)]">
              <p>421 Maple Street, Suite 300</p>
              <p>Brooklyn, NY 11215</p>
              <p>
                <a
                  href="tel:+15551234567"
                  className="text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-accent)]"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@dentora.care"
                  className="text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-accent)]"
                >
                  hello@dentora.care
                </a>
              </p>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h3 className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink)]">
                {title}
              </h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13.5px] text-[color:var(--color-ink-muted)] transition-colors hover:text-[color:var(--color-ink)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink)]">
              Follow
            </h3>
            <ul className="mt-5 space-y-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-[13.5px] text-[color:var(--color-ink-muted)] transition-colors hover:text-[color:var(--color-ink)]"
                  >
                    {s.label}
                    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M4 12L12 4" />
                      <path d="M6 4h6v6" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--color-line)] pt-6 text-[12px] text-[color:var(--color-ink-muted)] md:flex-row md:items-center"
        >
          <p>© 2026 Dentora Studio. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-[color:var(--color-ink)]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[color:var(--color-ink)]">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-[color:var(--color-ink)]">
              Accessibility
            </a>
            <span className="inline-flex items-center gap-2">
              <span className="relative grid h-1.5 w-1.5 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-[color:var(--color-accent)] opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
              </span>
              Accepting new patients
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

function ToothMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3c-2.6 0-4.5 1.4-4.5 3.6v2.4c0 .9-.4 1.8-.9 2.7l-.8 5.4c-.1 1.3.8 2.4 1.9 2.4.9 0 1.4-.6 1.7-1.8l.7-3.1c.2-.7.6-1 1.3-1h1.2c.7 0 1.1.3 1.3 1l.7 3.1c.3 1.2.8 1.8 1.7 1.8 1.1 0 2-1.1 1.9-2.4l-.8-5.4c-.5-.9-.9-1.8-.9-2.7V6.6C16.5 4.4 14.6 3 12 3z" />
    </svg>
  )
}