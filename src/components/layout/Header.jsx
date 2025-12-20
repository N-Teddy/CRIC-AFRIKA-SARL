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
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location, language])

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-0 z-50 border-b ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md border-[#e1e1e1] shadow-sm'
                    : 'bg-white/80 backdrop-blur-md border-transparent'
            }`}
        >
            <nav className="container px-4 py-4 mx-auto lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="flex items-center justify-center w-12 h-12 transition-transform rounded-xl bg-[#e7efd5] group-hover:scale-105 duration-150">
                            <img src="/logo.png" alt="logo" />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-[#222222] sm:text-xl lg:text-2xl">
                                {t('common.companyName')}
                            </h1>
                            <p className="text-xs text-[#6f6f6f]">{t('common.slogan')}</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="items-center hidden gap-8 lg:flex">
                        {navigation.map(item => {
                            const Icon = item.icon
                            const isActive = location.pathname === item.href
                            const translationKey = `navigation.${item.name.toLowerCase()}`
                            const activeColor =
                                item.name === 'Produits' ? 'text-[#ff8c42]' : 'text-[#a8d05f]'

                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-150 ${
                                        isActive ? activeColor : 'text-[#6f6f6f] hover:text-[#222222]'
                                    }`}
                                >
                                    <Icon size={16} />
                                    <span>{t(translationKey)}</span>
                                </Link>
                            )
                        })}

                        {/* Language Switcher */}
                        {/* <LanguageSwitcher /> */}
                    </div>

                    {/* CTA Button */}
                    <div className="items-center hidden gap-4 lg:flex">
                        <LanguageSwitcher />
                        <Link
                            to="/contact"
                            className="btn-green"
                        >
                            <Phone size={16} className="mr-2" />
                            {t('common.contactUs')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-[#222222]"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 overflow-hidden lg:hidden"
                        >
                            <div className="p-6 bg-white border border-[#e1e1e1] rounded-2xl shadow-sm">
                                <div className="flex flex-col space-y-4">
                                    {navigation.map(item => {
                                        const Icon = item.icon
                                        const isActive = location.pathname === item.href
                                        const translationKey = `navigation.${item.name.toLowerCase()}`

                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={`flex items-center gap-3 p-3 rounded-xl text-sm font-semibold transition-colors duration-150 ${
                                                    isActive
                                                        ? 'bg-[#e7efd5] text-[#222222]'
                                                        : 'text-[#6f6f6f] hover:bg-[#f5f5f0] hover:text-[#222222]'
                                                }`}
                                            >
                                                <Icon size={20} />
                                                <span className="font-semibold">
                                                    {t(translationKey)}
                                                </span>
                                            </Link>
                                        )
                                    })}
                                    {/* Mobile CTA */}
                                    <Link
                                        to="/contact"
                                        className="justify-center w-full btn-green"
                                    >
                                        <Phone size={16} className="mr-2" />
                                        {t('common.contactUs')}
                                    </Link>
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
