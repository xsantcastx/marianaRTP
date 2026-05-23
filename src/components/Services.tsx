import { useInView } from '../hooks/useInView'

function StethoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6h0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  )
}
function PawIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <ellipse cx="50" cy="72" rx="22" ry="26" />
      <ellipse cx="22" cy="44" rx="11" ry="13" />
      <ellipse cx="40" cy="32" rx="11" ry="13" />
      <ellipse cx="61" cy="32" rx="11" ry="13" />
      <ellipse cx="79" cy="44" rx="11" ry="13" />
    </svg>
  )
}
function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
function BeakerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10M9 3l-6 13a2 2 0 0 0 1.8 2.8h14.4A2 2 0 0 0 21 16L15 3" />
      <path d="M13 3l6 13" />
    </svg>
  )
}
function BoxIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  )
}
function HandshakeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  )
}

const services = [
  {
    Icon: StethoIcon,
    name: 'Consultoría Veterinaria',
    desc: 'Asesoramiento especializado en salud, nutrición y bienestar animal basado en años de práctica clínica.',
  },
  {
    Icon: PawIcon,
    name: 'Experta en Cuidado Animal',
    desc: 'Conocimiento profundo del comportamiento, cuidado preventivo y necesidades de bienestar de perros y gatos.',
  },
  {
    Icon: ChatIcon,
    name: 'Servicio al Cliente',
    desc: 'Excelencia en comunicación y atención al cliente en entornos veterinarios y comercios relacionados con animales.',
  },
  {
    Icon: BeakerIcon,
    name: 'Inocuidad Alimentaria',
    desc: 'Conocimiento en normativa alimentaria europea, sistemas HACCP y control de calidad para empresas del sector.',
  },
  {
    Icon: BoxIcon,
    name: 'Asesoría en Productos',
    desc: 'Guía experta en selección de productos para mascotas, incluyendo prendas de recuperación y accesorios de bienestar.',
  },
  {
    Icon: HandshakeIcon,
    name: 'Colaboraciones',
    desc: 'Disponible para colaborar con clínicas veterinarias, marcas de mascotas, empresas alimentarias y proyectos afines.',
  },
]

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section className="section" id="services">
      <div className="svc-inner">
        <div className="svc-hd">
          <div className="eyebrow">Qué Ofrezco</div>
          <h2 className="sh2">Servicios & <em>Competencias</em></h2>
          <p className="sbody">
            Combinando experiencia veterinaria, emprendimiento y formación en inocuidad
            alimentaria, ofrezco un perfil profesional único para diversas oportunidades.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`svc-grid reveal${inView ? ' in-view' : ''}`}
        >
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`svc-card reveal d${Math.min(i + 1, 6)}${inView ? ' in-view' : ''}`}
            >
              <div className="svc-ico-w">
                <s.Icon />
              </div>
              <h3 className="svc-name">{s.name}</h3>
              <p className="svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
