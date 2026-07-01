import { motion } from 'motion/react'

const SERVICES = [
  'Dental Checkup',
  'Teeth Cleaning',
  'Tooth Filling',
  'Gum Treatment',
  'Retainers',
]

const HERO_IMAGE = '/hero.png'
const DENTIST_CARD_IMAGE =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      aria-label="Family-friendly dental care"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-24 md:px-8 md:pt-28 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px]">
          {/* Background image */}
          <img
            src={HERO_IMAGE}
            alt="A patient receiving a dental examination"
            className="hero-photo absolute inset-0 h-full w-full object-cover object-[50%_35%]"
            loading="eager"
            decoding="async"
          />

          {/* Dark gradient overlay */}
          <div className="hero-overlay absolute inset-0" aria-hidden />

          {/* Content */}
          <div className="relative z-10 flex min-h-[640px] flex-col justify-between p-7 text-white md:min-h-[720px] md:p-12 lg:min-h-[780px] lg:p-16">
            {/* Top: Headline + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[560px]"
            >
              <h1 className="text-[44px] font-medium leading-[1.02] tracking-[-0.025em] md:text-[64px] lg:text-[76px]">
                Family-Friendly
                <br />
                Dental Care
              </h1>

              <p className="mt-5 max-w-[420px] text-[14px] leading-[1.55] text-white/75 md:text-[15px]">
                Permanent natural-looking solutions to replace missing teeth
                and restore confident healthy smiles.
              </p>

              <a
                href="#book"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-[13px] font-medium text-[color:var(--color-ink)] shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
              >
                Book a Appointment
                <span
                  aria-hidden
                  className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--color-accent)] text-white transition-transform duration-300 group-hover:rotate-45"
                >
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12L12 4" />
                    <path d="M6 4h6v6" />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Middle / Bottom row: floating card + service tags + footer bar */}
            <div className="mt-12 flex flex-col gap-6 md:mt-0 md:flex-row md:items-end md:justify-between">
              {/* Floating dentist card (left, mid-bottom in design) */}
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full max-w-[280px] items-stretch overflow-hidden rounded-[14px] border border-white/15 bg-white/[0.07] backdrop-blur-md"
              >
                <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden">
                  <img
                    src={DENTIST_CARD_IMAGE}
                    alt="Dental tools and equipment"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-3.5 text-white">
                  <p className="text-[11px] leading-[1.35] text-white/85">
                    Restore natural healthy confident dental growth.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <StarIcon className="h-3 w-3 text-[#f5b94a]" />
                      <span className="text-[11px] font-medium text-white/90">4.9</span>
                      <span className="text-[10.5px] text-white/60">(Rating)</span>
                    </div>
                    <span
                      aria-hidden
                      className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-white/80"
                    >
                      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 11L11 5" />
                        <path d="M6.5 5H11v4.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.aside>

              {/* Service tags (right, two rows of pills) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-2 md:max-w-[60%] md:justify-end"
              >
                {SERVICES.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-[12px] text-white/90 backdrop-blur-md transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.12]"
                  >
                    {label}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Carousel footer bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-white/10 bg-gradient-to-t from-black/40 to-transparent px-7 py-4 text-white/80 md:px-12 lg:px-16"
          >
            <span className="text-[12px] font-medium text-white">Your Teeth Our Science</span>
            <div className="flex items-center gap-2 text-[12px] text-white/70">
              <span>Preview</span>
              <span className="tabular-nums text-white">01 / 08</span>
              <span className="text-white/40">·</span>
              <button
                type="button"
                className="text-white transition-colors hover:text-white"
                aria-label="Next slide"
              >
                Next
              </button>
            </div>
            <span className="hidden text-[12px] text-white/70 md:inline">Scroll for More</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StarIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.95 6.5L22 9.5l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.8L2 9.5l7.05-1z" />
    </svg>
  )
}