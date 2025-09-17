import React from 'react'
import Index from './pages/Index'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Offer from './pages/FreeWebsiteForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FreeWebsiteForm from './pages/FreeWebsiteForm'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Claim-Offer" element={<FreeWebsiteForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
