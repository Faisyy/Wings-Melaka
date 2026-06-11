import { Link } from 'react-router-dom'
import { org, programmes } from '../data/site'
import ProgrammeCard from '../components/ProgrammeCard'

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#BFE6FA] via-[#8FD0F0] to-[#6FB9E6]">
        {/* sun glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,247,224,.95)_0%,rgba(255,236,184,.5)_35%,rgba(255,236,184,0)_70%)]" />
        {/* soaring eagle */}
        <svg
          viewBox="0 0 200 120"
          className="animate-soar absolute right-[6%] top-12 w-28 fill-navy opacity-90 md:w-44"
          aria-hidden="true"
        >
          <path d="M100 64c-3-2-6-2-9 0-8-14-26-22-44-22-12 0-22 4-30 10 10-2 19 0 26 5-9 1-16 5-21 12 9-4 17-4 24-1-7 4-12 10-14 18 11-9 22-12 33-10 6 1 11 4 15 8 6-5 13-7 20-7s14 2 20 7c4-4 9-7 15-8 11-2 22 1 33 10-2-8-7-14-14-18 7-3 15-3 24 1-5-7-12-11-21-12 7-5 16-7 26-5-8-6-18-10-30-10-18 0-36 8-44 22-3-2-6-2-9 0z" />
        </svg>

        <div className="mx-auto max-w-[1160px] px-6">
          <div className="relative z-10 mx-auto max-w-[760px] py-20 text-center md:py-28">
            <span className="mb-5 inline-block rounded-full bg-white/70 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-sky-700">
              {org.tagline}
            </span>
            <h1 className="mb-5 text-[clamp(34px,5vw,58px)] font-bold leading-[1.1] text-navy">
              Helping every child <em className="italic text-gold-deep">soar</em> on wings like eagles
            </h1>
            <p className="mx-auto mb-8 max-w-[600px] text-[clamp(17px,2.2vw,21px)] text-[#2b3a57]">
              A Melaka non-profit walking alongside children with special needs and their families —
              so each one can reach their full potential.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Link
                to="/services"
                className="rounded-full bg-gold px-7 py-3.5 font-semibold text-white shadow-[0_10px_24px_rgba(245,184,46,.4)] transition hover:-translate-y-0.5 hover:bg-gold-deep"
              >
                Explore our programmes →
              </Link>
              <Link
                to="/get-involved"
                className="rounded-full bg-white/85 px-7 py-3.5 font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-white"
              >
                Get involved
              </Link>
            </div>
          </div>
        </div>

        {/* wave divider */}
        <svg className="block w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 80V40c240-40 480-40 720-16s480 56 720 16v40z" fill="#ffffff" />
        </svg>
      </section>

      {/* ---------- WHO WE ARE ---------- */}
      <section className="bg-cream py-20 md:py-22">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          <div>
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Who we are
            </div>
            <h2 className="mb-4 text-[clamp(28px,3.4vw,38px)]">A story of hope — since {org.foundedYear}</h2>
            <p className="mb-3.5 text-[17px] text-muted">
              Wings Melaka began in {org.foundedYear} when a group of parents whose children had
              special needs came together, hoping to build something better. Today we provide
              creative, empowering programmes for children and young adults with learning differences
              — open to people of all races and religions.
            </p>
            <div className="my-6 flex flex-wrap gap-2.5">
              {org.values.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy shadow-[0_2px_10px_rgba(27,42,87,0.06)]"
                >
                  {v}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-block rounded-full bg-gold px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-gold-deep"
            >
              Read our story
            </Link>
          </div>
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br from-[#cfeafe] to-[#a7d3f2] font-semibold text-[#4a7aa6] shadow-[0_12px_30px_rgba(27,42,87,0.10)]">
            <span>🦅 Centre photo</span>
            <span className="absolute bottom-3.5 left-3.5 rounded-lg bg-white/85 px-3 py-1.5 text-xs text-muted">
              Shellabear Hall, Jalan Tengkera
            </span>
          </div>
        </div>
      </section>

      {/* ---------- PROGRAMMES ---------- */}
      <section className="py-20 md:py-22">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="mx-auto mb-13 max-w-[640px] text-center">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-gold-deep">
              What we do
            </div>
            <h2 className="mb-3.5 text-[clamp(28px,3.6vw,40px)]">Programmes for every stage</h2>
            <p className="text-[17px] text-muted">
              From early childhood to young adulthood, each programme is built around the individual
              — with personalised plans and a family-centred approach.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p) => (
              <ProgrammeCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- IMPACT ---------- */}
      <section className="bg-gradient-to-br from-navy to-navy-soft py-20 text-white">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['28', '+', 'Years of service'],
              ['6', '', 'Programmes & services'],
              ['100', '%', 'Non-profit, all welcome'],
              ['4.3', '★', 'Community rating'],
            ].map(([num, sym, lbl]) => (
              <div key={lbl}>
                <div className="font-display text-[46px] font-bold text-white">
                  {num}
                  <span className="text-gold">{sym}</span>
                </div>
                <div className="mt-1 text-[15px] text-[#b9c6e6]">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GET INVOLVED ---------- */}
      <section className="bg-cream py-20 md:py-22">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="mx-auto mb-13 max-w-[640px] text-center">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Get involved
            </div>
            <h2 className="mb-3.5 text-[clamp(28px,3.6vw,40px)]">Help us make a difference</h2>
            <p className="text-[17px] text-muted">
              Your support — whether time, skills, or giving — helps a child take their rightful place
              in society.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              { ico: '💛', tone: 'bg-amber-100', title: 'Donate', desc: 'Every contribution directly supports our programmes and the families who depend on them.', cta: 'Contact us to give', to: '/contact', primary: true },
              { ico: '🎓', tone: 'bg-sky-100', title: 'Sponsor a Child', desc: "Walk alongside one child's journey and help cover the cost of their learning and care.", cta: 'Enquire', to: '/contact', primary: false },
              { ico: '🙌', tone: 'bg-green-100', title: 'Be a Volunteer', desc: "Teaching, transport, making materials, photography — there's a place for your skills here.", cta: 'Volunteer form', to: '/get-involved#volunteer', primary: false },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-[18px] border border-line bg-white p-8 text-center shadow-[0_2px_10px_rgba(27,42,87,0.06)] transition hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(27,42,87,0.10)]"
              >
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-[30px] ${c.tone}`}>
                  {c.ico}
                </div>
                <h3 className="mb-2.5 text-[22px]">{c.title}</h3>
                <p className="mb-5 text-[15px] text-muted">{c.desc}</p>
                <Link
                  to={c.to}
                  className={
                    c.primary
                      ? 'inline-block rounded-full bg-gold px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-gold-deep'
                      : 'inline-block rounded-full border border-line bg-white px-6 py-3 text-[15px] font-semibold text-navy transition hover:bg-sky-50'
                  }
                >
                  {c.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
