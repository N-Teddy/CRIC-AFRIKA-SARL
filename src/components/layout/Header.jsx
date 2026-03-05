// src/components/layout/Header.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { navigation } from '../../constants'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { useTranslation } from '../../context/TranslationContext'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const { t, language } = useTranslation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location, language])

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <nav className="container mx-auto" aria-label="Navigation principale">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-4 group" aria-label="CRIC Africa — Accueil">
                        <div className="relative flex items-center justify-center w-12 h-12 transition-all rounded-[var(--radius-md)] bg-surface border border-border group-hover:border-primary/30 group-hover:shadow-md">
                            <img src="/logo.png" alt="CRIC Africa logo" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold tracking-tight text-ink uppercase">
                                <span className="text-primary">CRIC</span> Africa
                            </h1>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink-muted leading-none mt-1">
                                {t('common.slogan')}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="items-center hidden gap-10 lg:flex">
                        {navigation.map(item => {
                            const Icon = item.icon
                            const isActive = location.pathname === item.href
                            const translationKey = `navigation.${item.name.toLowerCase()}`

                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`relative flex items-center gap-2 text-sm font-semibold transition-all duration-200 py-1 ${isActive
                                        ? 'text-primary'
                                        : 'text-ink/70 hover:text-ink'
                                        }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <Icon size={16} aria-hidden="true" />
                                    <span>{t(translationKey)}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Desktop Actions */}
                    <div className="items-center hidden gap-6 lg:flex">
                        <LanguageSwitcher />
                        <Link to="/contact" className="btn-secondary group">
                            <Phone size={16} className="mr-2 transition-transform group-hover:rotate-12" aria-hidden="true" />
                            {t('common.contactUs')}
                        </Link>
                    </div>

                    {/* Mobile Menu & Language Switcher */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2.5 text-ink bg-surface border border-border rounded-[var(--radius-md)] hover:bg-surface-muted transition-colors"
                            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-4 right-4 top-full mt-3 overflow-hidden lg:hidden"
                        >
                            <div className="p-6 bg-white border border-border rounded-[var(--radius-md)] shadow-xl">
                                <div className="flex flex-col space-y-2">
                                    {navigation.map(item => {
                                        const Icon = item.icon
                                        const isActive = location.pathname === item.href
                                        const translationKey = `navigation.${item.name.toLowerCase()}`

                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={`flex items-center gap-4 p-3.5 rounded-[var(--radius-sm)] text-sm font-bold transition-all ${isActive
                                                    ? 'bg-secondary text-white'
                                                    : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
                                                    }`}
                                            >
                                                <Icon size={18} />
                                                <span>{t(translationKey)}</span>
                                            </Link>
                                        )
                                    })}
                                    <div className="pt-4 mt-2 border-t border-border">
                                        <Link
                                            to="/contact"
                                            className="justify-center w-full btn-secondary"
                                        >
                                            <Phone size={16} className="mr-2" />
                                            {t('common.contactUs')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    )
}

export default Header
