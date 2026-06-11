import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav } from '../data/site'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-[1160px] items-center justify-between px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo />
          <span className="font-display text-2xl font-bold leading-none text-navy">
            Wings
            <span className="mt-[3px] block font-sans text-[10px] font-semibold tracking-[0.42em] text-gold-deep">
              MELAKA
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.to} className="group relative">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center rounded-lg px-3.5 py-2.5 text-[15px] font-medium transition hover:bg-sky-50 hover:text-navy ${
                    isActive ? 'text-navy' : 'text-navy-soft'
                  }`
                }
              >
                {item.label}
                {item.children && <span className="ml-1.5 text-[10px] opacity-60">▾</span>}
              </NavLink>

              {item.children && (
                <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-xl border border-line bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block rounded-lg px-3 py-2 text-sm text-navy-soft transition hover:bg-sky-50 hover:text-navy"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/get-involved#donate"
            className="ml-2 rounded-full bg-gold px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_rgba(245,184,46,0.35)] transition hover:bg-gold-deep"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-[2.5px] w-6 rounded bg-navy" />
          <span className="h-[2.5px] w-6 rounded bg-navy" />
          <span className="h-[2.5px] w-6 rounded bg-navy" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-white px-6 pb-6 pt-2 shadow-lg lg:hidden">
          {nav.map((item) => (
            <div key={item.to} className="py-0.5">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3.5 py-3 font-medium ${
                    isActive ? 'text-navy' : 'text-navy-soft'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <div className="ml-3 border-l border-line pl-3">
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-muted hover:text-navy"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/get-involved#donate"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-gold px-5 py-3 text-center font-semibold text-white"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  )
}
