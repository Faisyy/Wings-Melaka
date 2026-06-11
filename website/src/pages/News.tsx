import PageHeader from '../components/PageHeader'

export default function News() {
  return (
    <>
      <PageHeader
        kicker="News & Events"
        title="News & Events"
        subtitle="The latest happenings, term dates, and events at Wings Melaka."
      />

      <div className="mx-auto max-w-[820px] px-6 py-16">
        {/* Placeholder — real news items + current term calendar to come from Wings staff */}
        <div className="rounded-[18px] border border-dashed border-line bg-cream p-10 text-center">
          <div className="mb-3 text-4xl">📅</div>
          <h2 className="mb-2 text-2xl">Coming soon</h2>
          <p className="mx-auto max-w-[520px] text-[16px] text-muted">
            This page will hold Wings Melaka's latest news and the current academic term calendar.
            Content is being prepared — check back soon.
          </p>
        </div>
      </div>
    </>
  )
}
