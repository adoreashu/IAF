import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Interests from './components/Interests'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="page-bg min-h-svh text-zinc-300">
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
