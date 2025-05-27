
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Team />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ErrorBoundary>
  )
}

export default App
