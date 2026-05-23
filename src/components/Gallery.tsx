import { useInView } from '../hooks/useInView'

const items = [
  { label: 'Husky al atardecer',     src: '/imgs/img_16.jpeg', ratio: '4/3' },
  { label: 'Dachshund adorable',     src: '/imgs/img_22.jpeg', ratio: '3/4' },
  { label: 'Gato naranja',           src: '/imgs/img_14.jpeg', ratio: '3/4' },
  { label: 'Mariana & su gata',      src: '/imgs/img_18.jpeg', ratio: '1/1' },
  { label: 'Agility & diversión',    src: '/imgs/img_7.jpeg',  ratio: '4/3' },
  { label: 'Ojos de ámbar',          src: '/imgs/img_13.jpeg', ratio: '3/4' },
  { label: 'Cuidado postquirúrgico', src: '/imgs/img_12.jpeg', ratio: '3/4' },
  { label: 'Paseo en España',        src: '/imgs/img_10.jpeg', ratio: '4/3' },
]

export default function Gallery() {
  const { ref, inView } = useInView()

  return (
    <section className="section-alt" id="gallery">
      <div className="gal-inner">
        <div className="gal-hd">
          <div className="eyebrow">Galería</div>
          <h2 className="sh2">Momentos que <em>cuentan</em></h2>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`gal-grid reveal${inView ? ' in-view' : ''}`}
        >
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`gal-item reveal d${Math.min(i + 1, 6)}${inView ? ' in-view' : ''}`}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{ width: '100%', display: 'block', aspectRatio: item.ratio, objectFit: 'cover' }}
              />
              <div className="gal-ov">
                <span className="gal-ov-txt">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
