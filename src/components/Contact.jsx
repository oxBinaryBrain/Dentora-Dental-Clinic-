import { motion } from 'motion/react'

const HOURS = [
  ['Mon - Thu', '8:00 AM – 6:00 PM'],
  ['Friday', '8:00 AM – 3:00 PM'],
  ['Saturday', '9:00 AM – 2:00 PM'],
  ['Sunday', 'Closed'],
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full border-t border-[color:var(--color-line)]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-20 md:px-8 md:py-28 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[680px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]"
          >
            <span className="h-px w-6 bg-[color:var(--color-ink)]" />
            Get in touch
            <span className="h-px w-6 bg-[color:var(--color-ink)]" />
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--color-ink)] md:text-[44px] lg:text-[52px]"
          >
            <span className="font-semibold">Come see us,</span>{' '}
            <span className="font-normal text-[color:var(--color-ink-faint)]">
              or give us a call.
            </span>
          </motion.h2>
        </div>

        {/* Simple info row: Phone | Email | Address */}
        <div className="mx-auto mt-14 grid max-w-[1080px] grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-[color:var(--color-line)] bg-[color:var(--color-line)] sm:grid-cols-3 md:mt-16">
          <ContactItem
            label="Call"
            value="(555) 123-4567"
            href="tel:+15551234567"
            icon={
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M3 4a1 1 0 011-1h2.5l1.5 4-2 1.5a8 8 0 003.5 3.5l1.5-2 4 1.5V13a1 1 0 01-1 1A11 11 0 013 4z" />
              </svg>
            }
          />
          <ContactItem
            label="Email"
            value="hello@dentora.care"
            href="mailto:hello@dentora.care"
            icon={
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
                <path d="M2.5 4.5L8 9l5.5-4.5" />
              </svg>
            }
          />
          <ContactItem
            label="Visit"
            value={
              <>
                42, 1st Floor, 100ft Road
                <br />
                Indiranagar, Bengaluru 560038
              </>
            }
            href="https://maps.google.com"
            icon={
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M8 14s5-4.5 5-8.5A5 5 0 003 5.5C3 9.5 8 14 8 14z" />
                <circle cx="8" cy="5.5" r="1.8" />
              </svg>
            }
          />
        </div>

        {/* Office hours + single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 flex max-w-[1080px] flex-col items-center justify-between gap-6 rounded-[18px] border border-[color:var(--color-line)] bg-white px-6 py-7 md:flex-row md:px-10"
        >
          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
              Office hours
            </h3>
            <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px]">
              {HOURS.map(([day, hours]) => (
                <div key={day} className="flex items-baseline gap-2">
                  <dt className="text-[color:var(--color-ink-muted)]">{day}</dt>
                  <dd className="font-medium tabular-nums text-[color:var(--color-ink)]">
                    {hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <a
            href="#book"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-ink)] px-6 py-3.5 text-[13.5px] font-medium text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-accent)]"
          >
            Book an appointment
            <span
              aria-hidden
              className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--color-accent)] text-white transition-transform duration-300 group-hover:rotate-45"
            >
              <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12L12 4" />
                <path d="M6 4h6v6" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ContactItem({ label, value, href, icon }) {
  const isString = typeof value === 'string'
  return (
    <a
      href={href}
      className="group flex flex-col items-center gap-3 bg-[color:var(--color-bg)] p-7 text-center transition-colors duration-300 hover:bg-white md:p-8"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-ink)] transition-all duration-300 group-hover:border-[color:var(--color-ink)] group-hover:bg-[color:var(--color-ink)] group-hover:text-white">
        {icon}
      </span>
      <div>
        <div className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
          {label}
        </div>
        <div className="mt-2 text-[15px] font-medium leading-[1.45] tracking-[-0.005em] text-[color:var(--color-ink)]">
          {isString ? value : value}
        </div>
      </div>
    </a>
  )
}