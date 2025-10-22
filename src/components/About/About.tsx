import { portfolioData } from '@/data/portfolioData'
import { Icon } from '@/components/shared/Icon'

export default function About() {
  const { bio, personalInfo } = portfolioData.about
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="mb-8 text-center">
        <h2 id="about-title" className="text-3xl sm:text-4xl font-extrabold text-white">Sobre Mim</h2>
        <div className="mx-auto mt-1 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <aside className="rounded-xl bg-surface/60 border border-white/10 p-6 shadow-soft" aria-label="Informações de contato">
          <h3 className="font-semibold mb-4 text-white">Informações de Contato</h3>
          <ul className="space-y-3">
            {personalInfo.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-3"
                >
                  <span className="text-primary"><Icon name={item.icon} className="text-lg" /></span>
                  <div className="text-left">
                    <p className="text-xs text-white">{item.label}</p>
                    <p className="text-sm text-white/60">{item.value}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <article className="rounded-xl bg-surface/60 border border-white/10 p-6 shadow-soft" aria-label="Biografia">
          <p className="leading-relaxed text-white/80">{bio}</p>
        </article>
      </div>
    </section>
  )
}
