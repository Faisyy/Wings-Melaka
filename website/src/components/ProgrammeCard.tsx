import type { Programme } from '../data/site'

export default function ProgrammeCard({ p }: { p: Programme }) {
  return (
    <article
      id={p.slug}
      className="relative scroll-mt-24 rounded-[18px] border border-line bg-white p-7 shadow-[0_2px_10px_rgba(27,42,87,0.06)] transition duration-200 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_12px_30px_rgba(27,42,87,0.10)]"
    >
      {p.closed && (
        <span className="absolute right-4 top-4 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-700">
          Temporarily closed
        </span>
      )}
      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-[26px] ${p.tone}`}>
        {p.icon}
      </div>
      <h3 className="mb-2 text-xl">{p.name}</h3>
      <p className="mb-4 text-[15px] text-muted">{p.blurb}</p>
      <span className="text-[13px] font-semibold text-sky-700">{p.age} · {p.short}</span>
    </article>
  )
}
