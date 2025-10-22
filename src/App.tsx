import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col" id="top">
      <Header />
      <main className="flex-1">
        <div id="home"><Hero /></div>
        <div id="sobre"><About /></div>
        <div id="habilidades"><Skills /></div>
        <div id="projetos"><Projects /></div>
        <div id="contato"><Contact /></div>
      </main>
      <Footer />
    </div>
  )
}
