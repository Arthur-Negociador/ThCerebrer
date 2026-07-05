import { Link } from 'react-router-dom'

const styles = {
  primary:
    'bg-emerald-500 text-ink-950 hover:bg-emerald-400 hover:glow-emerald font-semibold',
  secondary:
    'glass text-white hover:border-emerald-500/40 hover:text-emerald-300 font-medium',
  ghost: 'text-emerald-400 hover:text-emerald-300 font-medium',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  const base = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ${styles[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={base} {...props}>
      {children}
    </button>
  )
}
