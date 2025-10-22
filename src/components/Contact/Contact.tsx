import { portfolioData } from '@/data/portfolioData'
import { Icon } from '@/components/shared/Icon'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="section" aria-labelledby="contact-title">
      <div className="mb-8 text-center">
        <h2 id="contact-title" className="text-3xl sm:text-4xl font-extrabold text-white">Entre em Contato</h2>
        <div className="mx-auto mt-1 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">Estou disponível para oportunidades e colaborações. Vamos conversar sobre como posso contribuir com seu projeto!</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.contact.buttons.map((b) => (
          <motion.a
            key={b.text}
            href={b.href}
            target={b.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="rounded-xl bg-surface/60 border border-white/10 p-5 shadow-soft hover:border-primary/50 transition-colors flex items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary text-2xl"><Icon name={b.icon} /></span>
            <span className="font-medium">{b.text}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
