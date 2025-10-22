import { useEffect, useState } from 'react'
import { portfolioData } from '@/data/portfolioData'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'sticky top-0 z-50 transition-colors backdrop-blur ' +
        (scrolled ? 'bg-background/80 border-b border-white/5' : 'bg-background/80')
      }
      aria-label="Barra de navegação"
    >
      <nav className="container-padded flex items-center justify-between h-14">
        <a href="#home"
          className="font-semibold tracking-tight text-xl"
          onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) }}>
          <span className="bg-gradient-to-r  from-primary to-secondary bg-clip-text text-transparent">JP Borella</span>
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl" aria-hidden>☰</span>
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {portfolioData.header.navLinks.map((l) => {
            const id = l.href.replace('/', '') || 'home'
            return (
              <li key={l.href}>
                <a
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="text-base text-white/80 hover:text-primary transition-colors"
                >
                  {l.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/10">
          <ul className="container-padded py-3 space-y-2 text-base">
            {portfolioData.header.navLinks.map((l) => {
              const id = l.href.replace('/', '') || 'home'
              return (
                <li key={l.href}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }}
                    className="block py-2 text-white/80 hover:text-primary transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
