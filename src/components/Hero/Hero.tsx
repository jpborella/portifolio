import { portfolioData } from '@/data/portfolioData'

export default function Hero() {
  const { fullName, title, subtitle, profileImage, actionButtons } = portfolioData.hero
  return (
    <section className="section grid items-center gap-10 md:grid-cols-[1.5fr_1fr] min-h-[70vh]" aria-label="Hero">
      <div className="text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          {fullName}
        </h1>
        <p className="mt-4 text-2xl text-primary font-semibold">{title}</p>
        <p className="mt-3 max-w-2xl text-white/75 mx-auto md:mx-0 text-lg">{subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start text-base">
          {actionButtons.map((b) => (
            <a
              key={b.text}
              href={`#${b.href.replace('/', '')}`}
              onClick={(e) => { e.preventDefault(); document.getElementById(b.href.replace('/', ''))?.scrollIntoView({ behavior: 'smooth' }) }}
              className={
                (b.primary
                  ? 'bg-primary hover:bg-primary-600 text-black '
                  : 'bg-white/10 hover:bg-white/20 text-white ') +
                'px-5 py-3 rounded-md font-medium border border-white/10 transition-colors'
              }
            >
              {b.text}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Foto de perfil"
            className="size-64 sm:size-72 md:size-80 rounded-full ring-2 ring-white/10 shadow-soft object-cover"
          />
        ) : (
          <div className="size-64 sm:size-72 md:size-80 rounded-full ring-2 ring-white/10 shadow-soft bg-gradient-to-br from-primary/30 to-secondary/30" aria-hidden="true" />
        )}
      </div>
    </section>
  )
}
