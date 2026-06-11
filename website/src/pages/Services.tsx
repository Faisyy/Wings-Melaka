import PageHeader from '../components/PageHeader'
import { programmes } from '../data/site'

const curriculum6 = [
  'Reading, Writing & Early Number Skills',
  'Gross Motor Skills',
  'Language Development',
  'Fine Motor Skills',
  'Self Help Skills',
  'Social Development',
]

const yapAreas = [
  'Ongoing Education',
  'Independent Living Skills',
  'Recreation',
  'Community Skills',
  'Social Skills',
  'Art & Craft',
  'Travel Training',
  'Employment',
]

// Longer-form detail per programme, keyed by slug.
const detail: Record<string, { points: string[]; curriculum?: { label: string; items: string[] } }> = {
  eip: {
    points: [
      'A friendly, safe and stimulating environment for children aged 0–6 with learning differences.',
      'Embraces a Family-Centred Practice Model — parents accompany and actively participate in their child’s learning.',
      'Each child is assessed by our teachers, then an Individualised Education Plan (IEP) is drawn up — every IEP is unique.',
    ],
    curriculum: { label: 'Curriculum — 6 domains', items: curriculum6 },
  },
  sap: {
    points: [
      'Running since June 2005.',
      'School-readiness classes for children aged 5–12 with learning differences — preparing them for formal schooling or supporting those already in school.',
      'Children will have gone through our EIP, and attend without parents/caregivers.',
    ],
    curriculum: { label: 'Curriculum — 6 domains', items: curriculum6 },
  },
  yap: {
    points: [
      'Launched January 2012, for young people aged 18–25 with recognised learning differences.',
      'Equips students with skills for gainful employment and a better quality of life.',
      'The ultimate goal is to enable them to move on into independent / supported living.',
    ],
    curriculum: { label: 'Curriculum — 8 areas', items: yapAreas },
  },
  library: {
    points: [
      'Operational since 1998.',
      'Provides toys on loan to all children with learning differences — whether enrolled, graduated, or awaiting placement.',
      'Anyone who can show a relationship to people with learning differences can use the library.',
    ],
  },
  counselling: {
    points: [
      'In place since January 2008.',
      'Provides an opportunity for counselling or discussion with the counsellor.',
      'For the parents and other family members of Wings Melaka children.',
    ],
  },
  'parent-support': {
    points: [
      'Parent Support Group — meets regularly since 1999 for empowerment, awareness and education of parents, with invited speakers.',
      'Coffee Sessions — informal gatherings, parent-to-parent with staff supervision, building deeper friendships.',
    ],
  },
}

export default function Services() {
  return (
    <>
      <PageHeader
        kicker="What we do"
        title="Our Programmes & Services"
        subtitle="Personalised, family-centred support across every stage of life."
      />

      <div className="mx-auto max-w-[900px] space-y-6 px-6 py-16">
        {programmes.map((p) => {
          const d = detail[p.slug]
          return (
            <section
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 rounded-[18px] border border-line bg-white p-7 shadow-[0_2px_10px_rgba(27,42,87,0.06)] md:p-9"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl text-[26px] ${p.tone}`}>
                  {p.icon}
                </div>
                <div>
                  <h2 className="text-2xl leading-tight">{p.name}</h2>
                  <span className="text-sm font-semibold text-sky-700">{p.age} · {p.short}</span>
                </div>
                {p.closed && (
                  <span className="ml-auto rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                    Temporarily closed
                  </span>
                )}
              </div>

              <ul className="space-y-2">
                {d.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-[16px] text-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {d.curriculum && (
                <div className="mt-5 rounded-xl bg-cream p-5">
                  <div className="mb-2 text-sm font-bold uppercase tracking-wide text-gold-deep">
                    {d.curriculum.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {d.curriculum.items.map((c) => (
                      <span key={c} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-navy">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )
        })}
      </div>
    </>
  )
}
