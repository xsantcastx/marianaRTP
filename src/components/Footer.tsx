import { PawPrint } from './icons'

const navLinks = [
  { href: '#about',    label: 'Sobre Mí' },
  { href: '#cv',       label: 'CV' },
  { href: '#fajicats', label: 'Faji cat' },
  { href: '#gallery',  label: 'Galería' },
  { href: '#services', label: 'Servicios' },
  { href: '#contact',  label: 'Contacto' },
]

const fajicatsLinks = [
  { href: '#fajicats', label: 'Nuestros Productos' },
  { href: '#fajicats', label: 'Trajes Postquirúrgicos' },
  { href: '#fajicats', label: 'Accesorios' },
  { href: '#contact',  label: 'Mayoristas' },
]

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-inner">
        <div className="ftr-top">
          {/* Brand column */}
          <div>
            <p className="ftr-brand-name">Mariana Restrepo</p>
            <p className="ftr-brand-desc">
              Médica veterinaria colombiana, fundadora de Faji cat y estudiante
              de Máster en Inocuidad Alimentaria en España. Apasionada por el
              bienestar animal y la innovación en salud.
            </p>
            <div className="ftr-socs">
              <a
                href="https://linkedin.com/in/marianarestrepo"
                target="_blank"
                rel="noreferrer"
                className="ftr-soc"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/faji_cat"
                target="_blank"
                rel="noreferrer"
                className="ftr-soc"
                aria-label="Instagram @faji_cat"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="mailto:mariana.rtp123@gmail.com"
                className="ftr-soc"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="ftr-col-ttl">Navegación</p>
            <div className="ftr-links">
              {navLinks.map(l => (
                <a key={l.href + l.label} href={l.href} className="ftr-lk">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Faji cat column */}
          <div>
            <p className="ftr-col-ttl">Faji cat</p>
            <div className="ftr-links">
              {fajicatsLinks.map(l => (
                <a key={l.label} href={l.href} className="ftr-lk">{l.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="ftr-bot">
          <p className="ftr-copy">
            © {new Date().getFullYear()} <strong>Mariana Restrepo</strong>. Todos los derechos reservados.
          </p>
          <PawPrint size={18} style={{ color: 'var(--terracotta)', opacity: 0.4 }} />
        </div>
      </div>
    </footer>
  )
}
