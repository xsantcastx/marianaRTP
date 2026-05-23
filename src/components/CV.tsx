import { useInView } from '../hooks/useInView'

const education = [
  {
    year: '2026 – Presente',
    title: 'Máster en Seguridad Alimentaria',
    org: 'España',
    desc: 'En curso. Normativa sanitaria, APPCC y control de calidad. Complementa el perfil veterinario con conocimientos en inocuidad y salud pública europea.',
  },
  {
    year: '2017 – 2022',
    title: 'Grado en Medicina Veterinaria y Zootecnia',
    org: 'Universidad Lasallista',
    desc: 'Formación clínica integral en farmacología veterinaria, nutrición animal y medicina de pequeños animales.',
  },
]

const experience = [
  {
    year: '2022 – 2024',
    title: 'Veterinaria Independiente',
    org: 'Atención Domiciliaria',
    desc: 'Atención personalizada a propietarios con orientación sobre salud, alimentación y cuidados preventivos. Asesoramiento de productos especializados (antiparasitarios, suplementos, higiene) y prescripción de tratamientos farmacológicos.',
  },
  {
    year: '2022 – 2024',
    title: 'Docente de Medicina Veterinaria',
    org: 'Universidad',
    desc: 'Comunicación de conceptos técnicos complejos a estudiantes y públicos diversos. Capacidad demostrada para enseñar y orientar con paciencia y empatía.',
  },
  {
    year: '2021 – 2024',
    title: 'Consultas y Asesoramiento Veterinario',
    org: 'Veterinaria Freelance',
    desc: 'Resolución de consultas sobre patologías comunes, nutrición y comportamiento animal. Recomendación de productos de salud y bienestar adaptados a cada caso. Gestión autónoma de agenda y atención multicanal.',
  },
  {
    year: '2021 – 2022',
    title: 'Rotación Clínica',
    org: 'Práctica Clínica Veterinaria',
    desc: 'Trato directo con propietarios durante consultas, cirugías y seguimientos. Aplicación práctica de farmacología, diagnóstico y tratamientos bajo protocolos de bioseguridad.',
  },
  {
    year: '2020 – 2022',
    title: 'Voluntaria — Atención y Coordinación',
    org: 'Campañas de Esterilización',
    desc: 'Atención a propietarios en jornadas masivas, gestión de turnos e información. Coordinación en equipos multidisciplinares bajo alta presión y volumen de trabajo.',
  },
]

const skills = [
  { name: 'Atención al Cliente',      pct: 95 },
  { name: 'Bienestar Animal',         pct: 98 },
  { name: 'Farmacología Veterinaria', pct: 88 },
  { name: 'Nutrición Animal',         pct: 85 },
  { name: 'Seguridad Alimentaria',    pct: 72 },
  { name: 'Comunicación & Empatía',   pct: 92 },
]

const languages = [
  { flag: '🇨🇴', name: 'Español', level: 'Lengua materna',       dots: 5 },
  { flag: '🇬🇧', name: 'Inglés',  level: 'Nivel profesional B2', dots: 3 },
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
            Médica veterinaria con formación clínica integral y experiencia directa en el trato
            con propietarios de mascotas, asesoramiento en salud, nutrición y bienestar animal.
            Actualmente cursando un Máster en Seguridad Alimentaria en España.
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

          {/* ── RIGHT COLUMN: Skills + Languages ── */}
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
