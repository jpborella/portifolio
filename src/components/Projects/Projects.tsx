import { portfolioData } from '@/data/portfolioData'

export default function Projects() {
  return (
    <section className="section" aria-labelledby="projects-title">
      <div className="mb-8 text-center">
        <h2 id="projects-title" className="text-3xl sm:text-4xl font-extrabold text-white">Meus Projetos</h2>
        <div className="mx-auto mt-1 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
        <p className="mt-3 text-white/70">Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas e criatividade</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((p) => (
          <article key={p.title} className="rounded-xl bg-surface/60 border border-white/10 shadow-soft overflow-hidden flex flex-col">
            <img src={p.image} alt={p.title} className="w-full aspect-[16/9] object-cover" />
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-white/75">{p.summary}</p>
              <div className="mt-2">
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-black px-4 py-2 rounded-md text-sm font-medium border border-white/10">
                  Ver Projeto
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
