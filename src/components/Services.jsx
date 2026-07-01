import { motion } from 'motion/react'

const SERVICES = [
  {
    title: 'Dental Checkup',
    description:
      'Comprehensive oral examination with digital X-rays to catch concerns early and keep small issues from becoming big ones.',
    image:
      'https://images.unsplash.com/photo-1681939282781-341ac4f61996?auto=format&fit=crop&w=800&h=600&q=80',
    duration: '45 min',
    price: 'from $95',
  },
  {
    title: 'Teeth Cleaning',
    description:
      'A gentle, thorough hygiene visit that removes plaque, polishes enamel, and leaves your mouth feeling genuinely fresh.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&h=600&q=80',
    duration: '60 min',
    price: 'from $120',
  },
  {
    title: 'Tooth Filling',
    description:
      'Tooth-colored composite restorations that bond invisibly to your enamel and restore natural shape and bite.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&h=600&q=80',
    duration: '30 min',
    price: 'from $140',
  },
  {
    title: 'Gum Treatment',
    description:
      'Targeted therapy for bleeding, swollen or receding gums. We treat the cause, not just the symptoms.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&h=600&q=80',
    duration: '60 min',
    price: 'from $180',
  },
  {
    title: 'Retainers',
    description:
      'Custom-fitted retainers designed to lock in orthodontic results and protect the smile we built together.',
    image:
      'https://images.unsplash.com/photo-1695275857301-19e5a9995108?auto=format&fit=crop&w=800&h=600&q=80',
    duration: '2 visits',
    price: 'from $220',
  },
  {
    title: 'Teeth Whitening',
    description:
      'Professional whitening that lifts years of staining in a single visit, with sensitivity protection built in.',
    image:
      'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=800&h=600&q=80',
    duration: '90 min',
    price: 'from $280',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-20 md:px-8 md:py-28 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]"
            >
              <span className="h-px w-6 bg-[color:var(--color-ink)]" />
              Our Services
            </motion.div>

            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--color-ink)] md:text-[44px] lg:text-[56px]"
            >
              <span className="font-semibold">Care that covers the whole mouth,</span>{' '}
              <span className="font-normal text-[color:var(--color-ink-faint)]">
                from the first checkup to the final polish.
              </span>
            </motion.h2>
          </div>

          <motion.a
            href="#book"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group hidden items-center gap-2.5 self-end rounded-full border border-[color:var(--color-line-strong)] px-5 py-2.5 text-[13px] font-medium text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-cream)] md:inline-flex"
          >
            View all services
            <span
              aria-hidden
              className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--color-ink)] text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[color:var(--color-cream)] group-hover:text-[color:var(--color-ink)]"
            >
              <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12L12 4" />
                <path d="M6 4h6v6" />
              </svg>
            </span>
          </motion.a>
        </div>

        {/* Service grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.05 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-[20px] border border-[color:var(--color-line)] bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-bg-soft)]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-[color:var(--color-ink)]">
                    {service.title}
                  </h3>
                  <span className="text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
                    {service.price}
                  </span>
                </div>

                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-[color:var(--color-ink-muted)]">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[color:var(--color-line)] pt-4">
                  <span className="text-[11.5px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
                    {service.duration}
                  </span>
                  <a
                    href="#book"
                    className="group/link inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[color:var(--color-ink)]"
                  >
                    Book
                    <span
                      aria-hidden
                      className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--color-ink)] text-white transition-transform duration-300 group-hover/link:rotate-45"
                    >
                      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12L12 4" />
                        <path d="M6 4h6v6" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}