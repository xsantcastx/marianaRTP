import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useInView } from '../hooks/useInView'
import { getEmailJsConfig } from '../firebase'

const subjects = [
  'Oportunidades de Empleo',
  'Colaboración Profesional',
  'Productos Faji cat',
  'Consulta General',
]

const contactInfo = [
  {
    label: 'Correo',
    value: 'mariana.rtp123@gmail.com',
    href: 'mailto:mariana.rtp123@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/marianarestrepo',
    href: 'https://linkedin.com/in/marianarestrepo',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Ubicación',
    value: 'Valencia, España · Medellín, Colombia',
    href: undefined,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError]     = useState(false)

  const { ref: lRef, inView: lIn } = useInView()
  const { ref: rRef, inView: rIn } = useInView()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(false)
    getEmailJsConfig()
      .then(({ serviceId, templateId, publicKey }) =>
        emailjs.send(
          serviceId,
          templateId,
          { from_name: name, from_email: email, subject, message },
          { publicKey },
        )
      )
      .then(() => { setSent(true) })
      .catch(() => { setError(true) })
      .finally(() => { setSending(false) })
  }

  return (
    <section className="section-alt" id="contact">
      <div className="cntct-inner">
        {/* ── Info side ── */}
        <div
          ref={lRef as React.RefObject<HTMLDivElement>}
          className={`cntct-l reveal-l${lIn ? ' in-view' : ''}`}
        >
          <div className="eyebrow">Contacto</div>
          <h2 className="sh2">
            ¿Hablamos sobre<br />
            <em>oportunidades</em>?
          </h2>
          <p className="sbody">
            Ya sea para una oportunidad laboral en España, una colaboración
            con Faji cat o una consulta veterinaria, estoy disponible para
            conectar y explorar sinergias.
          </p>

          <div className="cntct-items">
            {contactInfo.map(item =>
              item.href ? (
                <a key={item.label} href={item.href} className="cntct-item"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <div className="cntct-ico">{item.icon}</div>
                  <div className="cntct-itxt">
                    <span className="cntct-lbl">{item.label}</span>
                    <span className="cntct-val">{item.value}</span>
                  </div>
                </a>
              ) : (
                <div key={item.label} className="cntct-item">
                  <div className="cntct-ico">{item.icon}</div>
                  <div className="cntct-itxt">
                    <span className="cntct-lbl">{item.label}</span>
                    <span className="cntct-val">{item.value}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ── Form side ── */}
        <div
          ref={rRef as React.RefObject<HTMLDivElement>}
          className={`cntct-form reveal-r${rIn ? ' in-view' : ''}`}
        >
          {sent ? (
            <div className="form-ok">
              <div className="form-ok-ico">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <p className="form-ok-ttl">¡Mensaje enviado!</p>
              <p className="form-ok-txt">
                Gracias por escribirme. Me pondré en contacto contigo pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-g">
                  <label className="form-lbl" htmlFor="cf-name">Nombre</label>
                  <input
                    id="cf-name"
                    type="text"
                    className="form-inp"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-g">
                  <label className="form-lbl" htmlFor="cf-email">Correo</label>
                  <input
                    id="cf-email"
                    type="email"
                    className="form-inp"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-g">
                <label className="form-lbl" htmlFor="cf-subject">Asunto</label>
                <select
                  id="cf-subject"
                  className="form-sel"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  required
                >
                  <option value="" disabled>Selecciona un tema...</option>
                  {subjects.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-g">
                <label className="form-lbl" htmlFor="cf-msg">Mensaje</label>
                <textarea
                  id="cf-msg"
                  className="form-ta"
                  placeholder="Cuéntame en qué puedo ayudarte..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
              </div>

              {error && (
                <p style={{ color: 'var(--terracotta)', fontSize: '13px', textAlign: 'center' }}>
                  Hubo un error al enviar. Por favor intenta de nuevo o escríbeme directamente.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={sending}
              >
                {sending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
