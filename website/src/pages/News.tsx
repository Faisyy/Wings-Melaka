import PageHeader from '../components/PageHeader'
import { news, type NewsImage } from '../data/news'

function Photo({ img, slug }: { img: NewsImage; slug: string }) {
  const src = img.file ? `/news/${slug}/${encodeURIComponent(img.file)}` : undefined
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-cream">
      {src ? (
        <img src={src} alt={img.caption} loading="lazy" className="aspect-[4/3] w-full object-cover" />
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-[#eaf4fd] to-[#d5e8f7] text-3xl text-sky-400">
          🖼️
        </div>
      )}
      <figcaption className="px-3 py-2 text-[13px] italic text-muted">{img.caption}</figcaption>
    </figure>
  )
}

export default function News() {
  return (
    <>
      <PageHeader
        kicker="News & Events"
        title="News & Events"
        subtitle="Stories, milestones and moments from life at Wings Melaka."
      />

      <div className="mx-auto max-w-[860px] px-6 py-16">
        <div className="relative space-y-12 border-l-2 border-line pl-6 md:pl-8">
          {news.map((entry) => (
            <article key={entry.slug} id={entry.slug} className="relative scroll-mt-24">
              {/* timeline dot */}
              <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-gold md:-left-[39px]" />

              <div className="mb-1 text-sm font-bold uppercase tracking-[0.1em] text-gold-deep">
                {entry.date}
              </div>
              <h2 className="mb-3 text-2xl">{entry.title}</h2>

              <div className="space-y-3">
                {entry.body.map((p, i) => (
                  <p key={i} className="text-[16px] leading-relaxed text-muted">{p}</p>
                ))}
              </div>

              {entry.images.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {entry.images.map((img, i) => (
                    <Photo key={i} img={img} slug={entry.slug} />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
