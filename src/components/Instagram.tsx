import { useInView } from '../hooks/useInView'

const photos = [
  { src: '/imgs/img_24.jpeg', alt: 'Gato negro en traje postquirúrgico de lunares rosas' },
  { src: '/imgs/img_19.jpeg', alt: 'Gato naranja con pañuelo Captain America' },
  { src: '/imgs/img_20.jpeg', alt: 'Gato naranja con pañuelo Love' },
  { src: '/imgs/img_15.jpeg', alt: 'Gato sobre prenda roja Fajicats' },
  { src: '/imgs/img_25.jpeg', alt: 'Gato naranja con arnés azul' },
  { src: '/imgs/img_1.jpeg',  alt: 'Mariana con gatito naranja' },
]

const IG_PROFILE = 'https://www.instagram.com/faji_cat'
const IG_DM      = 'https://ig.me/m/faji_cat'

export default function Instagram() {
  const { ref, inView } = useInView()

  return (
    <section className="ig-section" id="instagram">
      <div className="ig-inner">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`ig-hd reveal-u${inView ? ' in-view' : ''}`}
        >
          <div className="ig-handle-row">
            <svg className="ig-logo" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <a href={IG_PROFILE} target="_blank" rel="noreferrer" className="ig-handle">
              @faji_cat
            </a>
          </div>
          <h2 className="sh2" style={{ marginTop: '12px' }}>
            Nuestros <em>pacientes felices</em>
          </h2>
          <p className="sbody" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Trajes postquirúrgicos y accesorios diseñados con amor para el bienestar
            de tus mascotas. Síguenos en Instagram para ver más.
          </p>
        </div>

        {/* Photo grid */}
        <div className="ig-grid">
          {photos.map((p, i) => (
            <a
              key={i}
              href={IG_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="ig-photo"
              aria-label={`Ver en Instagram: ${p.alt}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img src={p.src} alt={p.alt} />
              <div className="ig-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="ig-ctas">
          <a href={IG_PROFILE} target="_blank" rel="noreferrer" className="btn btn-primary">
            Seguir en Instagram
          </a>
          <a href={IG_DM} target="_blank" rel="noreferrer" className="btn btn-outline">
            Enviar Mensaje
          </a>
        </div>
      </div>
    </section>
  )
}
