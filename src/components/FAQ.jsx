import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const FAQS = [
  {
    q: 'What should I expect on my first visit?',
    a: 'Plan for about an hour. We will review your medical and dental history, take a full set of digital X-rays, do a comprehensive exam with one of our dentists, and build a treatment plan together. There is no pressure to commit to anything on the day.',
  },
  {
    q: 'Do you accept my insurance?',
    a: 'We are in-network with most major PPO plans including Delta Dental, Cigna, Aetna, and MetLife. If we are out-of-network for your plan, we will still file the claim on your behalf and explain your out-of-network benefits in plain English before any work begins.',
  },
  {
    q: 'I am anxious about the dentist. Can you help?',
    a: 'Yes. We have a quiet room with no overhead lights, weighted blankets, noise-cancelling headphones, and sedation options ranging from nitrous oxide to oral conscious sedation. Tell us when you book and we will plan your visit accordingly.',
  },
  {
    q: 'How much will my treatment cost?',
    a: 'We give you a written estimate before any treatment starts. For larger treatment plans, we offer 6, 12, and 18 month interest-free payment plans through CareCredit, and an in-house membership plan for uninsured patients that includes cleanings, exams, and X-rays.',
  },
  {
    q: 'Do you see children?',
    a: 'We see children from age two onward. Our hygienists are trained in pediatric care, we have a dedicated play corner, and we offer a first-visit tour so kids can meet the team and sit in the chair before any treatment is even discussed.',
  },
  {
    q: 'What if I have a dental emergency?',
    a: 'Call our main number. We have same-day emergency slots held open every weekday, and a dentist on call for existing patients on weekends. If you are in active pain, we will see you the same day, full stop.',
  },
]

function Item({ faq, index, open, onToggle }) {
  return (
    <div className="border-b border-[color:var(--color-line)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[color:var(--color-accent)] md:py-7"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-mono text-[12px] tracking-tight text-[color:var(--color-ink-faint)]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[16px] font-medium tracking-[-0.005em] text-[color:var(--color-ink)] md:text-[18px]">
            {faq.q}
          </span>
        </span>
        <span
          aria-hidden
          className={[
            'grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300',
            open
              ? 'border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-white rotate-45'
              : 'border-[color:var(--color-line-strong)] text-[color:var(--color-ink)]',
          ].join(' ')}
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v10" />
            <path d="M3 8h10" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[60ch] pb-7 pl-12 pr-12 text-[14px] leading-[1.65] text-[color:var(--color-ink-muted)]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full border-t border-[color:var(--color-line)]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]"
              >
                <span className="h-px w-6 bg-[color:var(--color-ink)]" />
                FAQ
              </motion.div>

              <motion.h2
                id="faq-heading"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--color-ink)] md:text-[40px] lg:text-[48px]"
              >
                <span className="font-semibold">Questions we get,</span>{' '}
                <span className="font-normal text-[color:var(--color-ink-faint)]">
                  answered honestly.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 max-w-[40ch] text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)]"
              >
                Don't see yours? Email us at{' '}
                <a
                  href="mailto:hello@dentora.care"
                  className="text-[color:var(--color-ink)] underline decoration-[color:var(--color-line-strong)] underline-offset-4 transition-colors hover:decoration-[color:var(--color-ink)]"
                >
                  hello@dentora.care
                </a>{' '}
                and we will reply within the day.
              </motion.p>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-[color:var(--color-line)]">
              {FAQS.map((faq, i) => (
                <Item
                  key={faq.q}
                  faq={faq}
                  index={i}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}