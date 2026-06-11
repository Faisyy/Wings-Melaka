export default function PageHeader({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#BFE6FA] to-[#8FD0F0]">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,247,224,.9)_0%,rgba(255,236,184,0)_70%)]" />
      <div className="mx-auto max-w-[1160px] px-6 py-16 text-center md:py-20">
        {kicker && (
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-sky-700">{kicker}</div>
        )}
        <h1 className="text-[clamp(30px,4.5vw,48px)] font-bold text-navy">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-[640px] text-[17px] text-[#2b3a57]">{subtitle}</p>}
      </div>
      <svg className="block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60V30c240-30 480-30 720-10s480 40 720 10v30z" fill="#ffffff" />
      </svg>
    </section>
  )
}
