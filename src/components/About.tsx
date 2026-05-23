import { useInView } from '../hooks/useInView'
import { PawPrint } from './icons'

const tags = [
  'Medicina Veterinaria',
  'Bienestar Animal',
  'Inocuidad Alimentaria',
  'Fundadora de Fajicats',
  'Colombia & España',
  'Productos para Mascotas',
]

export default function About() {
  const { ref: lRef, inView: lIn } = useInView()
  const { ref: rRef, inView: rIn } = useInView()

  return (
    <section className="section-alt" id="about">
      <div className="about-inner">
        {/* ── Photo side ── */}
        <div
          ref={lRef as React.RefObject<HTMLDivElement>}
          className={`about-left reveal-l${lIn ? ' in-view' : ''}`}
        >
          <div className="about-deco">
            <PawPrint size={52} />
          </div>

          <div className="about-photo">
            <img
              src="/imgs/img_hero2.jpeg"
              alt="Mariana Restrepo con paciente en clínica"
            />
          </div>

          <div className="about-stat">
            <span className="about-stat-n">5+</span>
            <span className="about-stat-l">Años en medicina veterinaria</span>
          </div>
        </div>

        {/* ── Text side ── */}
        <div
          ref={rRef as React.RefObject<HTMLDivElement>}
          className={`about-right reveal-r${rIn ? ' in-view' : ''}`}
        >
          <div className="eyebrow">Sobre Mí</div>
          <h2 className="sh2">
            Una vida dedicada al<br />
            <em>bienestar animal</em>
          </h2>

          <blockquote className="about-quote">
            "Cada animal merece cuidado, confort y la mejor calidad de vida posible."
          </blockquote>

          <p className="about-p">
            Soy Mariana Restrepo, médica veterinaria colombiana con una profunda pasión
            por el bienestar animal y el cuidado de mascotas. Mi trayectoria profesional
            comenzó en Colombia, donde desarrollé experiencia práctica en atención
            clínica veterinaria, servicio al cliente en negocios relacionados con animales
            y defensa del bienestar animal.
          </p>
          <p className="about-p">
            Soy la fundadora de <strong>Fajicats</strong>, una marca colombiana de cuidado
            de mascotas especializada en prendas postquirúrgicas y accesorios de bienestar
            para gatos y perros — productos nacidos de mi propia experiencia clínica y
            amor por los animales.
          </p>
          <p className="about-p">
            Actualmente radicada en España, curso un <strong>Máster en Inocuidad Alimentaria</strong>,
            ampliando mi perfil profesional hacia la seguridad alimentaria, el control de
            calidad y la salud pública, añadiendo una nueva dimensión a mi formación
            veterinaria.
          </p>

          <div className="about-tags">
            {tags.map(tag => (
              <span key={tag} className="about-tag">
                <PawPrint size={10} style={{ color: 'var(--terracotta)', flexShrink: 0 }} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
