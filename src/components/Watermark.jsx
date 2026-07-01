export default function Watermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-0 flex select-none justify-center overflow-hidden"
    >
      <span
        className="whitespace-nowrap text-[18vw] font-bold tracking-[-0.04em] leading-none text-[color:var(--color-ink)]/[0.06] md:text-[16vw]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        WEBSITE
      </span>
    </div>
  )
}