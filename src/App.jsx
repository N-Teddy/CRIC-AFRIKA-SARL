// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import ScrollToTopOnRoute from './components/ui/ScrollToTopOnRoute'
import WhatsAppButton from './components/ui/WhatsAppButton'
import { routes } from './constants/routes'
import './styles/global.css'
import { TranslationProvider } from './context/TranslationContext'

function App() {
    return (
        <HelmetProvider>
            <TranslationProvider>
                <Router>
                    <ScrollToTopOnRoute />
                    <div className="min-h-screen bg-white">
                        <a
                            href="#main-content"
                            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-[var(--radius-md)] focus:font-bold focus:text-sm focus:shadow-lg"
                        >
                            Aller au contenu principal
                        </a>
                        <Header />
                        <main id="main-content">
                            <Routes>
                                {routes.map(route => (
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
            </TranslationProvider>
        </HelmetProvider>
    )
}

export default App
