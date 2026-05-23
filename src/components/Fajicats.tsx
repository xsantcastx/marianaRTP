import { useInView } from '../hooks/useInView'

const products = [
  {
    tag: 'Postquirúrgico',
    name: 'Traje de Recuperación',
    desc: 'Diseñado para una recuperación cómoda después de cirugías, manteniendo las heridas protegidas mientras permite libertad de movimiento.',
    src: '/imgs/img_24.jpeg',
  },
  {
    tag: 'Uso Diario',
    name: 'Pañuelo Decorativo',
    desc: 'Accesorio ligero y adorable para el cuello de tu mascota, perfecto para paseos y momentos especiales con estilo.',
    src: '/imgs/img_19.jpeg',
  },
  {
    tag: 'Accesorio & Estilo',
    name: 'Pañuelo Premium',
    desc: 'Bandana suave y ajustable que combina moda y confort para gatos y perros pequeños en cualquier ocasión.',
    src: '/imgs/img_20.jpeg',
  },
]

export default function Fajicats() {
  const { ref, inView } = useInView()

  return (
    <section className="section-drk" id="fajicats">
      <div className="faj-bg">
        {[
          { w: 500, t: -150, r: -150 },
          { w: 300, b: -100, l: 80 },
          { w: 200, t: '40%', r: 200 },
        ].map((c, i) => (
          <div
            key={i}
            className="faj-c"
            style={{
              width: c.w, height: c.w,
              top: c.t, right: c.r,
              bottom: c.b, left: c.l,
            }}
          />
        ))}
      </div>

      <div className="faj-inner">
        <div className="faj-hd">
          <div>
            <div className="eyebrow eyebrow-gold">Marca Propia</div>
            <h2 className="sh2 sh2-cream">
              Conoce<br />
              <em>Fajicats</em>
            </h2>
          </div>
          <div>
            <p className="faj-desc">
              Fajicats es una marca colombiana de cuidado de mascotas creada para
              apoyar a los animales durante su recuperación, confort y cuidado diario.
              Sus productos están diseñados con amor, practicidad y bienestar animal
              como prioridad.
            </p>
            <div className="faj-actions">
              <a
                href="https://wa.me/573145602688?text=Hola,%20me%20interesa%20Fajicats"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                💬 WhatsApp Colombia
              </a>
              <a href="#contact" className="btn btn-cream">Más Información</a>
            </div>
          </div>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`faj-cards reveal${inView ? ' in-view' : ''}`}
        >
          {products.map((p, i) => (
            <div key={p.name} className={`pc reveal d${i + 1}${inView ? ' in-view' : ''}`}>
              <div className="pc-img">
                <img src={p.src} alt={p.name} />
              </div>
              <div className="pc-body">
                <span className="pc-tag">{p.tag}</span>
                <h3 className="pc-name">{p.name}</h3>
                <p className="pc-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
