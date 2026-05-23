interface IconProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function PawPrint({ size = 40, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor"
      className={className} style={style} aria-hidden="true">
      <ellipse cx="50" cy="72" rx="22" ry="26" />
      <ellipse cx="22" cy="44" rx="11" ry="13" />
      <ellipse cx="40" cy="32" rx="11" ry="13" />
      <ellipse cx="61" cy="32" rx="11" ry="13" />
      <ellipse cx="79" cy="44" rx="11" ry="13" />
    </svg>
  )
}

export function CatSilhouette({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <path d="M50 18 L36 4 L29 26 Q12 31 12 52 Q11 80 50 84 Q89 80 88 52 Q88 31 71 26 L64 4 Z" />
      <circle cx="37" cy="50" r="4" fill="rgba(255,255,255,0.85)" />
      <circle cx="63" cy="50" r="4" fill="rgba(255,255,255,0.85)" />
      <ellipse cx="50" cy="60" rx="4" ry="3" fill="rgba(255,255,255,0.55)" />
    </svg>
  )
}

export function PersonOutline({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <circle cx="50" cy="30" r="20" />
      <path d="M10 92 Q10 58 50 58 Q90 58 90 92 Z" />
    </svg>
  )
}

export function CheckCircle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}
