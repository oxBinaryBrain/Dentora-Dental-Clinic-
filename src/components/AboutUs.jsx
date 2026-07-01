import { motion } from 'motion/react'

const TEAM = [
  {
    name: 'Dr. Amelia Hart',
    role: 'Lead Dental Surgeon',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&h=800&q=80',
  },
  {
    name: 'Dr. Marcus Lin',
    role: 'Cosmetic Dentistry',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&h=800&q=80',
  },
]

const STATS = [
  { value: '14+', label: 'Years of practice' },
  { value: '2.4k', label: 'Smiles restored' },
  { value: '4.9', label: 'Patient rating' },
]

export default function AboutUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-20 pb-12 md:px-8 md:pt-28 md:pb-16 lg:px-10">
        {/* Top: label + headline */}
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]"
            >
              <span className="h-px w-6 bg-[color:var(--color-ink)]" />
              About Us
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-[14.5px] leading-[1.55] text-[color:var(--color-ink-muted)]"
            >
              A small studio of clinicians and designers rethinking what a
              dental visit can feel like.
            </motion.h3>
          </div>

          <div className="md:col-span-8">
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-[color:var(--color-ink)] md:text-[44px] lg:text-[56px]"
            >
              <span className="font-semibold">
                Personalized dental care, designed around the people who walk
                through our doors.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Team portraits */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:gap-6">
          {TEAM.map((member, i) => (
            <motion.figure
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-[color:var(--color-bg-soft)]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                  <div>
                    <div className="text-[14px] font-medium tracking-[-0.005em]">
                      {member.name}
                    </div>
                    <div className="mt-0.5 text-[11.5px] text-white/75">
                      {member.role}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-45"
                  >
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12L12 4" />
                      <path d="M6 4h6v6" />
                    </svg>
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Stats row */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-3 divide-x divide-[color:var(--color-line)] border-y border-[color:var(--color-line)] md:mt-20"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="px-4 py-6 md:px-6 md:py-8">
              <dt className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                {stat.label}
              </dt>
              <dd className="mt-2 text-[32px] font-medium tracking-[-0.02em] text-[color:var(--color-ink)] md:text-[40px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}