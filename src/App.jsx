import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyWebsite from './components/Whywebsite'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Process from './components/Process'
import HumanSection from './components/Humansection'
import Footer from './components/Footer'
import Finalcta from './components/Finalcta'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WhyWebsite />
      <Services />
      <Portfolio />
      <Pricing />
      <Process />
      <HumanSection />
      <Finalcta />
      <Footer />
    </div>
  )
}

export default App