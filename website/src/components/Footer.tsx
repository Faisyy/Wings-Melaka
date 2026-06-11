import { Link } from 'react-router-dom'
import { org } from '../data/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#16213F] pt-16 pb-7 text-[15px] text-[#aeb9d4]">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-1.5 flex items-center gap-3">
              <Logo mono />
              <span className="font-display text-[22px] font-bold text-white">Wings Melaka</span>
            </div>
            <p className="my-4 max-w-[300px] text-[#9aa6c4]">{org.mission}</p>
            <div className="flex gap-2.5">
              <a
                href={org.social.instagram}
                title="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-gold hover:text-[#16213F]"
              >
                📷
              </a>
              <a
                href={org.social.facebook}
                title="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 font-bold transition hover:bg-gold hover:text-[#16213F]"
              >
                f
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 font-sans text-sm uppercase tracking-[0.08em] text-white">Explore</h4>
            {[
              ['About Us', '/about'],
              ['Services', '/services'],
              ['News & Events', '/news'],
              ['Get Involved', '/get-involved'],
            ].map(([label, to]) => (
              <Link key={to} to={to} className="block py-1.5 transition hover:text-gold">
                {label}
              </Link>
            ))}
          </div>

          {/* Visit */}
          <div>
            <h4 className="mb-4 font-sans text-sm uppercase tracking-[0.08em] text-white">Visit us</h4>
            <p className="py-1.5 leading-relaxed">{org.address}</p>
            <a href={org.phoneHref} className="block py-1.5 transition hover:text-gold">
              {org.phone}
            </a>
            <a href={`mailto:${org.email}`} className="block py-1.5 transition hover:text-gold">
              {org.email}
            </a>
          </div>
        </div>

        <div className="pt-6 text-center text-[13px] text-[#7c89ab]">
          © Wings Melaka 2026. All Rights Reserved · {org.verse}
        </div>
      </div>
    </footer>
  )
}
