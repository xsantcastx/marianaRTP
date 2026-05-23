import { PawPrint } from './icons'

const floatingPaws = [
  { top: '14%',  left:  '7%',  size: 22, dur: 4.2, delay: 0   },
  { top: '68%',  left:  '4%',  size: 15, dur: 5.1, delay: 0.8 },
  { top: '82%',  left: '88%',  size: 28, dur: 4.8, delay: 1.6 },
  { top: '18%',  left: '91%',  size: 18, dur: 5.4, delay: 0.4 },
  { top: '48%',  left: '93%',  size: 13, dur: 4.5, delay: 1.2 },
  { top: '57%',  left: '11%',  size: 17, dur: 5.0, delay: 2.0 },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        {floatingPaws.map((p, i) => (
          <PawPrint
            key={i}
            size={p.size}
            className="hero-fp"
            style={{
              top: p.top,
              left: p.left,
              animation: `floatSlow ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="hero-inner">
        {/* ── Content ── */}
        <div className="hero-content">
          <div className="hero-eye">
            <PawPrint size={12} />
            Profesional Veterinaria &amp; Fundadora de Faji cat
          </div>

          <h1 className="hero-name">
            <span className="hero-n1">MARIANA</span>
            <span className="hero-n2">RESTREPO</span>
          </h1>

          <p className="hero-role">
            Especialista en Cuidado Animal ·{' '}
            <span>Máster en Inocuidad Alimentaria</span>{' '}
            · Colombia &amp; España
          </p>

          <p className="hero-desc">
            Apasionada por el bienestar animal, la medicina veterinaria y el
            desarrollo de soluciones de cuidado para mascotas. Actualmente
            expandiendo su perfil profesional en España.
          </p>

          <div className="hero-actions">
            <a href="#cv"       className="btn btn-primary">Ver CV</a>
            <a href="#fajicats" className="btn btn-outline">Descubrir Faji cat</a>
            <a href="#contact"  className="btn btn-ghost">Contactar</a>
          </div>

          <div className="hero-social">
            <div className="hero-soc-rule" />
            <a
              href="https://linkedin.com/in/marianarestrepo"
              target="_blank"
              rel="noreferrer"
              className="hero-soc-lk"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/faji_cat"
              target="_blank"
              rel="noreferrer"
              className="hero-soc-lk"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* ── Visual ── */}
        <div className="hero-visual">
          <div className="hero-wrap">
            <div className="hero-deco-c" />

            <div className="hero-blob">
              <img
                src="/imgs/img_hero.jpeg"
                alt="Mariana Restrepo, Médica Veterinaria"
              />
            </div>

            <div className="hero-badge">
              <div className="hero-bdot" />
              <div className="hero-bname">
                <span className="hero-btitle">Faji cat</span>
                <span className="hero-bsub">Pet Care · Colombia</span>
              </div>
            </div>

            <div className="hero-deco-p">
              <PawPrint size={46} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
