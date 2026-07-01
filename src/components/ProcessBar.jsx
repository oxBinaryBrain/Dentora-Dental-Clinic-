import { motion } from 'motion/react'

const STEPS = [
  { label: 'Smile Assessment', progress: 0.25 },
  { label: 'Care Planning', progress: 0.5 },
  { label: 'Treatment Process', progress: 0.75 },
  { label: 'Dental Maintenance', progress: 1 },
]

export default function ProcessBar() {
  return (
    <section
      aria-label="Our dental care process"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-8 md:px-8 md:pt-10 lg:px-10">
        <div className="relative h-[2px] w-full rounded-full bg-[color:var(--color-line-strong)]">
          {/* Base track with subtle gradient stops matching each step */}
          <div className="absolute inset-0 flex">
            {STEPS.map((step, i) => (
              <div
                key={step.label}
                className="relative flex-1 first:pl-0 last:pr-0"
                style={{ paddingLeft: i === 0 ? 0 : 0, paddingRight: i === STEPS.length - 1 ? 0 : 0 }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: step.progress }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full origin-left rounded-full bg-[color:var(--color-ink)]"
                  style={{ transformOrigin: 'left center' }}
                />
              </div>
            ))}
          </div>

          {/* Step labels */}
          <ul className="absolute inset-x-0 -top-1 flex justify-between">
            {STEPS.map((step, i) => (
              <li
                key={step.label}
                className="absolute -translate-x-1/2"
                style={{ left: `${(i + 0.5) * (100 / STEPS.length)}%` }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="block -translate-y-[22px] whitespace-nowrap text-[12px] text-[color:var(--color-ink)]"
                >
                  {step.label}
                </motion.span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}