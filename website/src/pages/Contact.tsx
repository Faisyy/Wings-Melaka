import PageHeader from '../components/PageHeader'
import { org } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageHeader kicker="Contact" title="Get in Touch" subtitle="We'd love to hear from you — visit, call, or send us a message." />

      <div className="mx-auto max-w-[1000px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="mb-5 text-2xl">Contact details</h2>
            <ul className="space-y-4 text-[16px]">
              <li className="flex gap-3">
                <span className="text-xl">📍</span>
                <span className="text-muted">{org.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">📞</span>
                <a href={org.phoneHref} className="text-muted hover:text-navy">{org.phone}</a>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✉️</span>
                <a href={`mailto:${org.email}`} className="text-muted hover:text-navy">{org.email}</a>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">👩‍💼</span>
                <span className="text-muted">Manager — {org.manager}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href={org.social.instagram} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy transition hover:bg-sky-50">
                Instagram
              </a>
              <a href={org.social.facebook} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy transition hover:bg-sky-50">
                Facebook
              </a>
            </div>
          </div>

          {/* Enquiry form */}
          <div>
            <h2 className="mb-5 text-2xl">Send an enquiry</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you! Form submission will be connected before launch.')
              }}
            >
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy">Name</span>
                <input required className="w-full rounded-lg border border-line px-4 py-2.5 outline-none focus:border-sky" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy">Email</span>
                <input type="email" required className="w-full rounded-lg border border-line px-4 py-2.5 outline-none focus:border-sky" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy">Message</span>
                <textarea rows={5} required className="w-full rounded-lg border border-line px-4 py-2.5 outline-none focus:border-sky" />
              </label>
              <button type="submit" className="rounded-full bg-gold px-7 py-3 font-semibold text-white transition hover:bg-gold-deep">
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-[18px] border border-line">
          <iframe
            title="Wings Melaka location"
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Wings+Melaka+440C+Jalan+Tengkera+75200+Melaka&output=embed"
          />
        </div>
      </div>
    </>
  )
}
