import { portfolioData } from '@/data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-white/5" aria-label="Rodapé">
      <div className="section">
        <div className="flex items-center justify-between">
          <p className=" text-white/60">© {year} {portfolioData.footer.copyright}</p>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'instant' }) }}
            className=" text-white/60 hover:text-white"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
