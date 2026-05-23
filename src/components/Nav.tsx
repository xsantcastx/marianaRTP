import { useState, useEffect } from 'react'

const links = [
  { href: '#about',    label: 'Sobre Mí' },
  { href: '#cv',       label: 'CV' },
  { href: '#fajicats', label: 'Faji cat' },
  { href: '#gallery',  label: 'Galería' },
  { href: '#services', label: 'Servicios' },
  { href: '#contact',  label: 'Contacto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-logo-m">MR</span>
          <span className="nav-logo-n">Mariana Restrepo</span>
        </a>

        <div className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-lk">{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary nav-lk nav-cta">Contactar</a>
        </div>

        <button className="nav-ham" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span style={{ transform: open ? 'rotate(45deg) translate(4px,5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(4px,-5px)' : 'none' }} />
        </button>
      </div>

      <div className={`nav-mob${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-lk" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
