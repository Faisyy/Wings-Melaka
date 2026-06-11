import type { ReactNode } from 'react'
import PageHeader from '../components/PageHeader'
import { org } from '../data/site'

const firstBearers: [string, string][] = [
  ['Chairman', 'Yammy Ang (Ong Chen Yam)'],
  ['Vice Chairman', 'Lim Boon Hock'],
  ['Secretary', 'Joyce Lim'],
  ['Deputy Secretary', 'Wee Tiong Kian'],
  ['Treasurer', 'Nancy Ng'],
  ['Board Members', 'Jerry TK Lim and Richard Kan'],
  ['Advisors', 'Rev. David Loo and Pr. Joanne Lee'],
]

const board: [string, string][] = [
  ['Chairman', "Dato' Chee Kong Chi"],
  ['Deputy Chairman', 'Mr Lee Chee Gaip'],
  ['Secretary', 'Ms Chan Saw Si'],
  ['Vice Secretary', 'Dr Charles Jeremiah'],
  ['Treasurer', 'Mr Lim Tau Lih, Philip'],
  ['Committee Members', 'Mr Yap Koon Roy · Dr Yip Sek Onn'],
  ['Advisors', 'Mrs Yammy Ang · Ps Joanne Lee'],
]

const staff: [string, string][] = [
  ['Manager', 'Ms Loreen Lim'],
  ['Head Teachers', 'EIP – Ms Daisy Teo · SAP – Ms Malar A/P Kunjambu'],
  ['Teachers', 'Ms Low Khai Syen, Sharon · Ms Phoebe Tan'],
  ['Programme Assistants', 'Ms Lee Geok Lin · Ms Lim Soo Leng'],
]

const testimonials = [
  {
    quote:
      "Wings places children and their families in the early intervention programme to enhance behaviour, learning and development. We are able to interact and communicate better with our daughter and her behaviour has improved. Wings' teachers are caring and helpful — we can't say thank you enough for their unfailing support and kindness.",
    author: 'Parents of Hau Shu Ying',
  },
  {
    quote:
      'I can feel the sincerity of all Wings members in supporting, helping and assisting us to help our children. I am touched by all the efforts of the dedicated staff. May God bless us and all our children.',
    author: 'Mrs Gan, Mother of Gan Zi Xuan',
  },
]

function Card({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  )
}

function InfoTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line">
      {rows.map(([k, v], i) => (
        <div
          key={k}
          className={`grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-[200px_1fr] ${i % 2 ? 'bg-cream' : 'bg-white'}`}
        >
          <span className="font-semibold text-navy">{k}</span>
          <span className="text-muted">{v}</span>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <>
      <PageHeader kicker="About Us" title="About Wings Melaka" subtitle="A story of hope — reaching, empowering and transforming lives since 1997." />

      <div className="mx-auto max-w-[820px] space-y-16 px-6 py-16">
        <Card id="history">
          <h2 className="mb-4 text-3xl">How it all started</h2>
          <p className="mb-3 text-[17px] text-muted">
            Wings Melaka had its beginnings in <strong>1997</strong>, when a group of Christian
            parents whose children had special needs met together, hoping to start services for
            children and adults with learning differences. With the support of Malaysian Care and the
            community of churches in Melaka, this became a reality in <strong>October 1998</strong>,
            when Wings Melaka launched the Early Intervention Programme. On <strong>28 June 1999</strong>,
            Wings Melaka became officially registered.
          </p>
          <p className="mb-5 text-[17px] text-muted">
            While the initial focus was on younger children, over the years Wings expanded to include
            school-age children and young adults with learning differences. Wings Melaka is a
            not-for-profit organisation, open to people of all races and religions.
          </p>
          <h3 className="mb-3 text-lg">First office bearers</h3>
          <InfoTable rows={firstBearers} />
        </Card>

        <Card id="mission">
          <h2 className="mb-4 text-3xl">Mission, Vision &amp; Values</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-cream p-5">
              <div className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-deep">Mission</div>
              <p className="text-[15px] text-muted">{org.mission}</p>
            </div>
            <div className="rounded-xl border border-line bg-cream p-5">
              <div className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-deep">Vision</div>
              <p className="text-[15px] text-muted">Reaching, Empowering, Transforming.</p>
            </div>
            <div className="rounded-xl border border-line bg-cream p-5">
              <div className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-deep">Values</div>
              <p className="text-[15px] text-muted">As an expression of God's love: Compassion, Acceptance, Integrity and Hope.</p>
            </div>
          </div>
        </Card>

        <Card id="name">
          <h2 className="mb-4 text-3xl">Our Name</h2>
          <p className="mb-3 text-[17px] text-muted">
            The story of Wings Melaka is a story of <strong>hope</strong>: hope in God, hope in our
            children, and hope in ourselves as parents. In the face of all the challenges, we never
            lose hope — we look up and see our children soaring on wings like eagles.
          </p>
          <blockquote className="border-l-4 border-gold bg-cream px-5 py-4 text-[17px] italic text-navy">
            "… but those who hope in the LORD will renew their strength. They will soar on wings like
            eagles; they will run and not grow weary; they will walk and not be faint."
            <footer className="mt-2 text-sm font-semibold not-italic text-gold-deep">— Isaiah 40:31</footer>
          </blockquote>
        </Card>

        <Card id="board">
          <h2 className="mb-4 text-3xl">Board of Management &amp; Staff</h2>
          <h3 className="mb-3 text-lg">Board of Management</h3>
          <InfoTable rows={board} />
          <h3 className="mb-3 mt-6 text-lg">Staff</h3>
          <InfoTable rows={staff} />
        </Card>

        <Card id="testimonials">
          <h2 className="mb-4 text-3xl">Testimonials</h2>
          <div className="space-y-5">
            {testimonials.map((t) => (
              <figure key={t.author} className="rounded-xl border border-line bg-cream p-6">
                <blockquote className="text-[17px] italic text-navy">"{t.quote}"</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-gold-deep">— {t.author}</figcaption>
              </figure>
            ))}
          </div>
        </Card>
      </div>
    </>
  )
}
