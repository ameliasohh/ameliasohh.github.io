import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Interests from './components/Interests'
import Favourites from './components/Favourites'
import Travel from './components/Travel'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Interests />
        <Favourites />
        <Travel />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
