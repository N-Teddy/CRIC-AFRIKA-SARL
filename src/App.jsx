// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import WhatsAppButton from './components/ui/WhatsAppButton'
import { routes } from './constants/routes'
import './styles/global.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App