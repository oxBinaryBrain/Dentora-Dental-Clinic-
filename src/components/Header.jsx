import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-[color:var(--color-line)] bg-[color:var(--color-bg)]/95 backdrop-blur-xl'
          : 'border-b border-transparent bg-[color:var(--color-bg)]/70 backdrop-blur-md',
      ].join(' ')}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-8 px-6 py-4 md:px-10 md:py-5">
        {/* Brand — always dark text */}
        <a href="#home" className="group flex items-center gap-2.5">
          <ToothMark className="h-[22px] w-[22px] text-[color:var(--color-accent)] transition-transform duration-500 group-hover:rotate-12" />
          <span className="text-[16px] font-semibold tracking-[-0.01em] text-[color:var(--color-ink)]">
            Dentora
          </span>
        </a>

        {/* Center Nav — always dark text */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative">
                <a
                  href={link.href}
                  className={[
                    'group relative inline-flex items-center text-[13.5px] font-medium tracking-[-0.005em] transition-colors duration-300',
                    link.active
                      ? 'text-[color:var(--color-ink)]'
                      : 'text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]',
                  ].join(' ')}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={[
                      'absolute -bottom-1.5 left-0 h-px w-full origin-left bg-[color:var(--color-ink)] transition-transform duration-500 ease-out',
                      link.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    ].join(' ')}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="group hidden items-center gap-2.5 rounded-full bg-[color:var(--color-ink)] px-5 py-2.5 text-[13px] font-medium text-[color:var(--color-cream)] transition-colors duration-300 hover:bg-[color:var(--color-accent)] sm:inline-flex"
          >
            Book a Call
            <span
              aria-hidden
              className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--color-accent)] text-white transition-all duration-300 group-hover:rotate-45"
            >
              <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12L12 4" />
                <path d="M6 4h6v6" />
              </svg>
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-ink)] md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={[
                  'absolute left-0 top-0 h-px w-full bg-[color:var(--color-ink)] transition-all duration-300',
                  open ? 'translate-y-1.5 rotate-45' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 top-1.5 h-px w-full bg-[color:var(--color-ink)] transition-all duration-300',
                  open ? 'opacity-0' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 bottom-0 h-px w-full bg-[color:var(--color-ink)] transition-all duration-300',
                  open ? '-translate-y-1.5 -rotate-45' : '',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)] md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-[1400px] flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[color:var(--color-line)] py-3.5 text-[14px] font-medium text-[color:var(--color-ink)]"
                  >
                    {link.label}
                    <span aria-hidden className="text-[color:var(--color-ink-faint)]">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function ToothMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3c-2.6 0-4.5 1.4-4.5 3.6v2.4c0 .9-.4 1.8-.9 2.7l-.8 5.4c-.1 1.3.8 2.4 1.9 2.4.9 0 1.4-.6 1.7-1.8l.7-3.1c.2-.7.6-1 1.3-1h1.2c.7 0 1.1.3 1.3 1l.7 3.1c.3 1.2.8 1.8 1.7 1.8 1.1 0 2-1.1 1.9-2.4l-.8-5.4c-.5-.9-.9-1.8-.9-2.7V6.6C16.5 4.4 14.6 3 12 3z" />
    </svg>
  )
}