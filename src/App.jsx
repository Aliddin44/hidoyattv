import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/HeroSection'
import LatestVideos from './components/LatestVideos'
import CategoryFilter from './components/CategoryFilter'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LatestVideos />
        <CategoryFilter />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
