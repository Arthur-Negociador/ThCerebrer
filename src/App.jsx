import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Planos from './pages/Planos'
import Ajuda from './pages/Ajuda'
import Atualizacoes from './pages/Atualizacoes'
import Pagamento from './pages/Pagamento'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-ink-950 text-neutral-100">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/atualizacoes" element={<Atualizacoes />} />
          <Route path="/pagamento" element={<Pagamento />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
