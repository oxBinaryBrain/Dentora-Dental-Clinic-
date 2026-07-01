import { motion } from 'motion/react'

const TESTIMONIALS = [
  {
    quote:
      'I chipped my front tooth falling off a bicycle when I was nine. Twenty-two years of composite bonding that yellowed, chipped, and made me hate photos. Dr. Lin did a single-visit veneer in under two hours. I sat in the car afterward and cried a little. He probably hears this all the time but I mean it — I smile in photos now.',
    name: 'Ananya Iyer',
    role: 'Patient since 2023',
    image:
      'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=400&h=400&q=80',
    treatment: 'Porcelain veneer',
    city: 'Whitefield',
  },
  {
    quote:
      'My son Aarav (6) was terrified of dentists after a bad experience at our previous clinic. Dr. Hart spent the first two appointments just letting him press buttons, look at the tools, and sit in the chair with the lights off. He actually reminds me when his checkup is due. That is the review.',
    name: 'Rohan Sharma',
    role: 'Patient since 2021',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    treatment: 'Family plan',
    city: 'Indiranagar',
  },
  {
    quote:
      'Fourteen months of clear aligners, and they let me see the final result on a 3D scan before I even started. They timed my refinement scans around my wedding — pushed a fitting by two days so I would be aligner-free in the photos. That kind of thought is rare in healthcare, and I have worked in hospitals for a decade.',
    name: 'Kavya Patel',
    role: 'Patient since 2022',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
    treatment: 'Clear aligners',
    city: 'Koramangala',
  },
  {
    quote:
      'Lost two molars in a college cricket accident in 1994. Bone graft in February, implants in August, crowns in November. Nine months total. The implants feel more solid than the teeth I was born with. I only wish I had not waited thirty years to do this.',
    name: 'Vikram Krishnan',
    role: 'Patient since 2024',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80',
    treatment: 'Dental implants',
    city: 'Jayanagar',
  },
  {
    quote:
      'All four wisdom teeth, IV sedation, twenty minutes in the chair. I woke up and the surgical assistant had already called my mom. They sent me home with a written recovery plan, a cold pack, and a small container of kheer from the cafe next door. I did not expect to be looked after like that at a dental clinic.',
    name: 'Sneha Reddy',
    role: 'Patient since 2024',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=400&h=400&q=80',
    treatment: 'Wisdom teeth',
    city: 'HSR Layout',
  },
  {
    quote:
      'Embarrassed to smile in photos for fifteen years. Six veneers, two whitening sessions, a trial smile I wore for a week to make sure it felt right. My wedding photos from December are the first ones where I am actually smiling with my teeth. My mother cried.',
    name: 'Aditya Mehta',
    role: 'Patient since 2023',
    image:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&h=400&q=80',
    treatment: 'Smile makeover',
    city: 'MG Road',
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 text-[color:var(--color-accent)]"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l2.95 6.5L22 9.5l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.8L2 9.5l7.05-1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonial"
      aria-labelledby="testimonial-heading"
      className="relative w-full border-t border-[color:var(--color-line)]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]"
            >
              <span className="h-px w-6 bg-[color:var(--color-ink)]" />
              Testimonials
            </motion.div>

            <motion.h2
              id="testimonial-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--color-ink)] md:text-[44px] lg:text-[52px]"
            >
              <span className="font-semibold">Real patients, in their own words,</span>{' '}
              <span className="font-normal text-[color:var(--color-ink-faint)]">
                about the visits they actually had.
              </span>
            </motion.h2>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-line)] bg-white p-5"
            >
              <div className="flex -space-x-3">
                {TESTIMONIALS.slice(0, 4).map((t) => (
                  <div
                    key={t.name}
                    className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white"
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold tracking-tight text-[color:var(--color-ink)]">
                    4.9
                  </span>
                  <StarRating />
                </div>
                <p className="mt-0.5 text-[12px] text-[color:var(--color-ink-muted)]">
                  Based on 312 verified reviews
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonial cards: 2x3 grid, 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 md:gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.04 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex h-full flex-col rounded-[20px] border border-[color:var(--color-line)] bg-white p-7 md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <svg
                  aria-hidden
                  className="h-7 w-7 text-[color:var(--color-accent-soft)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 7h4v4H8v3a3 3 0 003 3v2a5 5 0 01-5-5V8a1 1 0 011-1zm10 0h4v4h-3v3a3 3 0 003 3v2a5 5 0 01-5-5V8a1 1 0 011-1z" />
                </svg>
                <span className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-ink-muted)]">
                  {t.treatment}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-[14.5px] leading-[1.6] text-[color:var(--color-ink)]">
                {t.quote}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-[color:var(--color-line)] pt-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-semibold tracking-tight text-[color:var(--color-ink)]">
                    {t.name}
                  </div>
                  <div className="text-[11.5px] text-[color:var(--color-ink-muted)]">
                    {t.role} · {t.city}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}