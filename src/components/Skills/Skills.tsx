import { portfolioData } from '@/data/portfolioData'
import { Icon } from '@/components/shared/Icon'

export default function Skills() {
  const { categories } = portfolioData.skills
  return (
    <section className="section" aria-labelledby="skills-title">
      <div className="mb-8 text-center">
        <h2 id="skills-title" className="text-3xl sm:text-4xl font-extrabold text-white">Minhas Habilidades</h2>
        <div className="mx-auto mt-1 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
        <p className="mt-3 text-white/70">Tecnologias e metodologias que domino para criar aplicações web modernas e eficientes</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.name} className="rounded-xl bg-surface/60 border border-white/10 p-6 shadow-soft">
            <h3 className="font-semibold text-white/90 mb-4 flex items-center gap-2">
              {cat.name}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-3">
                  <Icon name={item.icon} className="text-xl text-primary" />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
