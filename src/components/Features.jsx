import { motion } from 'motion/react'

const FEATURES = [
  {
    label: '01',
    title: 'Modern technology, used gently',
    body: 'Digital impressions, low-radiation imaging, and same-day crowns. We invest in the tools that make visits shorter, quieter, and more accurate.',
  },
  {
    label: '02',
    title: 'A team that treats people, not teeth',
    body: 'Every clinician on staff has at least eight years of experience and a calm chairside manner. We explain what we are doing, before we do it.',
  },
  {
    label: '03',
    title: 'Family-friendly by design',
    body: 'A play corner for kids, quiet rooms for anxious adults, and appointments that actually run on time. Dentistry for the way your family actually lives.',
  },
  {
    label: '04',
    title: 'Transparent pricing, no surprises',
    body: 'We quote before we treat, accept most insurance plans, and offer payment plans for larger work. The cost conversation happens on day one.',
  },
]

const STATS = [
  { value: '14+', label: 'Years in practice' },
  { value: '2.4k', label: 'Smiles restored' },
  { value: '4.9', label: 'Average patient rating' },
  { value: '12', label: 'Specialists on staff' },
]

export default function Features() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative w-full overflow-hidden border-t border-[color:var(--color-line)]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]"
            >
              <span className="h-px w-6 bg-[color:var(--color-ink)]" />
              Why Dentora
            </motion.div>

            <motion.h2
              id="why-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--color-ink)] md:text-[44px] lg:text-[52px]"
            >
              <span className="font-semibold">Four reasons families keep coming back,</span>{' '}
              <span className="font-normal text-[color:var(--color-ink-faint)]">
                year after year.
              </span>
            </motion.h2>
          </div>

          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15.5px] leading-[1.65] text-[color:var(--color-ink-muted)]"
            >
              We are a small, independent practice. That means we get to make
              decisions based on what is right for the patient sitting in the
              chair, not what a corporate office thinks the spreadsheet wants.
            </motion.p>
          </div>
        </div>

        {/* Feature list */}
        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-[color:var(--color-line)] bg-[color:var(--color-line)] md:mt-20 md:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <motion.li
              key={feature.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[color:var(--color-bg)] p-7 transition-colors duration-300 hover:bg-white md:p-9"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[12px] tracking-tight text-[color:var(--color-ink-faint)]">
                  {feature.label}
                </span>
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-[color:var(--color-ink)] md:text-[21px]">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-3 max-w-[42ch] text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                {feature.body}
              </p>
              <span
                aria-hidden
                className="absolute right-6 top-6 grid h-7 w-7 place-items-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-ink-muted)] transition-all duration-300 group-hover:border-[color:var(--color-ink)] group-hover:text-[color:var(--color-ink)] group-hover:rotate-45"
              >
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12L12 4" />
                  <path d="M6 4h6v6" />
                </svg>
              </span>
            </motion.li>
          ))}
        </ol>

        {/* Stats strip */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-y-8 md:mt-20 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="border-l border-[color:var(--color-line)] pl-5 md:pl-6">
              <dt className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                {stat.label}
              </dt>
              <dd className="mt-3 text-[36px] font-medium leading-none tracking-[-0.02em] text-[color:var(--color-ink)] md:text-[44px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}