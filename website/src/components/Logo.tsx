type Props = { className?: string; mono?: boolean }

// Placeholder SVG eagle mark — swap for the real Wings Melaka logo asset when supplied.
export default function Logo({ className = 'h-11 w-11', mono = false }: Props) {
  const eagle = mono ? '#ffffff' : '#1E2A6E'
  const ring = mono ? 'rgba(255,255,255,.08)' : '#EAF1FE'
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill={ring} />
      <path
        d="M32 40c-6-9-16-12-24-11 6 3 9 7 11 12-5-2-9-1-12 1 7 0 12 3 16 8 3-4 6-6 9-7 3 1 6 3 9 7 4-5 9-8 16-8-3-2-7-3-12-1 2-5 5-9 11-12-8-1-18 2-24 11z"
        fill={eagle}
      />
      <circle cx="32" cy="22" r="3.4" fill="#F5B82E" />
    </svg>
  )
}
