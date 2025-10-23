import { portfolioData } from '@/data/portfolioData'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5" aria-label="Rodapé">
      <div className="section">
        <div className="flex items-center justify-between">
          <p className=" text-white/60">{portfolioData.footer.copyright}</p>
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
