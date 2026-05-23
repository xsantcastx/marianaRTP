import { useInView } from '../hooks/useInView'
import { CheckCircle } from './icons'

const education = [
  {
    year: '2024 – Presente',
    title: 'Máster en Inocuidad Alimentaria',
    org: 'Universidad, España',
    desc: 'Especialización en seguridad alimentaria, control de calidad y salud pública, con enfoque en normativa europea e inspección de alimentos.',
  },
  {
    year: '2015 – 2020',
    title: 'Médica Veterinaria y Zootecnista',
    org: 'Universidad de Colombia',
    desc: 'Licenciada en Medicina Veterinaria con énfasis en medicina de pequeños animales, cirugía y bienestar animal.',
  },
]

const experience = [
  {
    year: '2021 – Presente',
    title: 'Fundadora & CEO',
    org: 'Fajicats — Colombia',
    desc: 'Creación y gestión de una marca de cuidado de mascotas especializada en prendas postquirúrgicas, manejo de operaciones, diseño de producto y atención al cliente.',
  },
  {
    year: '2019 – 2021',
    title: 'Médica Veterinaria Clínica',
    org: 'Clínica Veterinaria, Colombia',
    desc: 'Atención y diagnóstico de pequeños animales, cirugías menores, orientación a propietarios y gestión de historiales clínicos.',
  },
  {
    year: '2018 – 2019',
    title: 'Asesora Comercial',
    org: 'Tienda de Mascotas, Colombia',
    desc: 'Asesoramiento especializado en nutrición, accesorios y salud para mascotas; fidelización de clientes y visual merchandising.',
  },
]

const skills = [
  { name: 'Medicina y Clínica Veterinaria', pct: 95 },
  { name: 'Bienestar Animal',               pct: 98 },
  { name: 'Servicio al Cliente',            pct: 90 },
  { name: 'Inocuidad Alimentaria',          pct: 72 },
  { name: 'Desarrollo de Producto',         pct: 82 },
  { name: 'Gestión Empresarial',            pct: 78 },
]

const languages = [
  { flag: '🇨🇴', name: 'Español', level: 'Lengua materna', dots: 5 },
  { flag: '🇬🇧', name: 'English', level: 'Profesional B2', dots: 3 },
]

const certs = [
  { name: 'Bienestar Animal — Certificación WSAVA', issuer: 'WSAVA, 2022' },
  { name: 'Inocuidad Alimentaria — HACCP',          issuer: 'FAO / Online, 2023' },
  { name: 'Gestión de Empresas para Veterinarios',  issuer: 'VetBusiness, 2021' },
]

export default function CV() {
  const { ref: hdRef, inView: hdIn } = useInView()
  const { ref: c1Ref, inView: c1In } = useInView()
  const { ref: c2Ref, inView: c2In } = useInView()

  return (
    <section className="section" id="cv">
      <div className="cv-inner">
        {/* Header */}
        <div
          ref={hdRef as React.RefObject<HTMLDivElement>}
          className={`cv-hd reveal${hdIn ? ' in-view' : ''}`}
        >
          <div className="eyebrow">Curriculum Vitae</div>
          <h2 className="sh2">Trayectoria <em>Profesional</em></h2>
          <p className="sbody">
            Veterinaria colombiana con más de 5 años de experiencia clínica,
            emprendimiento y servicio al cliente — actualmente expandiendo su perfil
            en España con un Máster en Inocuidad Alimentaria.
          </p>
        </div>

        <div className="cv-grid">
          {/* ── LEFT COLUMN: Education + Experience ── */}
          <div
            ref={c1Ref as React.RefObject<HTMLDivElement>}
            className={`cv-col reveal-l${c1In ? ' in-view' : ''}`}
          >
            {/* Education */}
            <div>
              <div className="cv-gl">Formación Académica</div>
              {education.map(e => (
                <div key={e.title} className="cv-entry">
                  <div className="cv-mkr">
                    <div className="cv-dot" />
                    <div className="cv-line" />
                  </div>
                  <div className="cv-eb">
                    <span className="cv-yr">{e.year}</span>
                    <h3 className="cv-ttl">{e.title}</h3>
                    <span className="cv-org">{e.org}</span>
                    <p className="cv-dsc">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <div className="cv-gl">Experiencia Profesional</div>
              {experience.map(e => (
                <div key={e.title} className="cv-entry">
                  <div className="cv-mkr">
                    <div className="cv-dot" />
                    <div className="cv-line" />
                  </div>
                  <div className="cv-eb">
                    <span className="cv-yr">{e.year}</span>
                    <h3 className="cv-ttl">{e.title}</h3>
                    <span className="cv-org">{e.org}</span>
                    <p className="cv-dsc">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Skills + Languages + Certs ── */}
          <div
            ref={c2Ref as React.RefObject<HTMLDivElement>}
            className={`cv-col reveal-r${c2In ? ' in-view' : ''}`}
          >
            {/* Skills */}
            <div>
              <div className="cv-gl">Competencias</div>
              <div className="cv-skills">
                {skills.map(s => (
                  <div key={s.name} className="cv-sk">
                    <div className="cv-sk-r">
                      <span className="cv-sk-n">{s.name}</span>
                      <span className="cv-sk-p">{s.pct}%</span>
                    </div>
                    <div className="cv-bar">
                      <div className="cv-fill" style={{ width: c2In ? `${s.pct}%` : '0%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="cv-gl">Idiomas</div>
              <div className="cv-langs">
                {languages.map(l => (
                  <div key={l.name} className="cv-lang">
                    <span className="cv-lfl">{l.flag}</span>
                    <div className="cv-li">
                      <span className="cv-ln">{l.name}</span>
                      <span className="cv-ll">{l.level}</span>
                    </div>
                    <div className="cv-dots">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className={`cv-ldot${i < l.dots ? ' on' : ''}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="cv-gl">Certificaciones</div>
              <div className="cv-certs">
                {certs.map(c => (
                  <div key={c.name} className="cv-cert">
                    <div className="cv-ci"><CheckCircle size={20} /></div>
                    <div className="cv-ct">
                      <span className="cv-cn">{c.name}</span>
                      <span className="cv-cis">{c.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cv-cta">
          <a href="/cv-mariana-restrepo.pdf" className="btn btn-primary" download>
            ↓ Descargar CV en PDF
          </a>
        </div>
      </div>
    </section>
  )
}
