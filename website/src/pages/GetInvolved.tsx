import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { org } from '../data/site'

const volunteerRoles = [
  'Be a volunteer teacher at the centre',
  'Be a volunteer administrator',
  'Help make teaching aids & equipment',
  'Help in home visits',
  'Be a transport volunteer',
  'Help in translation of materials',
  'Help with photography / videos for teaching',
  'Pray for the ministry of Wings Melaka',
]

const skills = [
  'Teaching', 'Art / handicraft', 'Story-telling', 'Music', 'Gross motor activities',
  'Computers', 'Carpentry', 'Photography', 'Sewing', 'Sports',
]

export default function GetInvolved() {
  return (
    <>
      <PageHeader
        kicker="Get Involved"
        title="Help us make a difference"
        subtitle="Whether through giving, sponsorship, or your own time and skills — there's a place for you at Wings."
      />

      <div className="mx-auto max-w-[900px] space-y-6 px-6 py-16">
        {/* Donate */}
        <section id="donate" className="scroll-mt-24 rounded-[18px] border border-line bg-white p-8 shadow-[0_2px_10px_rgba(27,42,87,0.06)]">
          <div className="mb-3 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-[26px]">💛</div>
            <h2 className="text-2xl">Donate</h2>
          </div>
          <p className="mb-5 text-[16px] text-muted">
            Every contribution directly supports our programmes and the families who depend on them.
            To make a donation, please get in touch and our team will share the details.
          </p>
          <Link to="/contact" className="inline-block rounded-full bg-gold px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-gold-deep">
            Contact us to give
          </Link>
        </section>

        {/* Sponsor */}
        <section id="sponsor" className="scroll-mt-24 rounded-[18px] border border-line bg-white p-8 shadow-[0_2px_10px_rgba(27,42,87,0.06)]">
          <div className="mb-3 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-[26px]">🎓</div>
            <h2 className="text-2xl">Sponsor a Child</h2>
          </div>
          <p className="mb-5 text-[16px] text-muted">
            Walk alongside one child's journey and help cover the cost of their learning and care.
            Reach out to learn how sponsorship works.
          </p>
          <Link to="/contact" className="inline-block rounded-full border border-line bg-white px-6 py-3 text-[15px] font-semibold text-navy transition hover:bg-sky-50">
            Enquire about sponsorship
          </Link>
        </section>

        {/* Volunteer */}
        <section id="volunteer" className="scroll-mt-24 rounded-[18px] border border-line bg-white p-8 shadow-[0_2px_10px_rgba(27,42,87,0.06)]">
          <div className="mb-3 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-[26px]">🙌</div>
            <h2 className="text-2xl">Be a Volunteer</h2>
          </div>
          <p className="mb-6 text-[16px] text-muted">
            Tell us how you'd like to put your skills and interests to good use at the centre.
          </p>

          {/* Volunteer form (UI only — submission wiring decided in Phase 2) */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you! Form submission will be connected before launch.')
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" required />
              <Field label="Email" type="email" required />
              <Field label="Telephone" />
              <SelectField label="Gender" options={['Prefer not to say', 'Female', 'Male']} />
            </div>

            <div>
              <span className="mb-2 block text-sm font-semibold text-navy">I would like to…</span>
              <div className="grid gap-2 sm:grid-cols-2">
                {volunteerRoles.map((r) => (
                  <label key={r} className="flex items-start gap-2.5 text-[15px] text-muted">
                    <input type="checkbox" className="mt-1 accent-gold" />
                    <span>{r}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-2 block text-sm font-semibold text-navy">My skills / interests…</span>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {skills.map((s) => (
                  <label key={s} className="flex items-center gap-2 text-[15px] text-muted">
                    <input type="checkbox" className="accent-gold" />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-navy">Message</span>
              <textarea rows={4} className="w-full rounded-lg border border-line px-4 py-2.5 outline-none focus:border-sky" />
            </label>

            <button type="submit" className="rounded-full bg-gold px-7 py-3 font-semibold text-white transition hover:bg-gold-deep">
              Submit
            </button>
            <p className="text-xs text-muted">
              Prefer to talk? Email <a href={`mailto:${org.email}`} className="text-gold-deep underline">{org.email}</a> or call {org.phone}.
            </p>
          </form>
        </section>
      </div>
    </>
  )
}

function Field({ label, type = 'text', required }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy">
        {label}{required && <span className="text-gold-deep"> *</span>}
      </span>
      <input type={type} required={required} className="w-full rounded-lg border border-line px-4 py-2.5 outline-none focus:border-sky" />
    </label>
  )
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy">{label}</span>
      <select className="w-full rounded-lg border border-line bg-white px-4 py-2.5 outline-none focus:border-sky">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}
