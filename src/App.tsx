import { useEffect, useState } from 'react'
import './App.css'
import Nav     from './components/Nav'
import Hero    from './components/Hero'
import About   from './components/About'
import CV      from './components/CV'
import Fajicats   from './components/Fajicats'
import Instagram  from './components/Instagram'
import Gallery    from './components/Gallery'
import Services from './components/Services'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Nav />
      <main>
        <Hero />
        <About />
        <CV />
        <Fajicats />
        <Instagram />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
