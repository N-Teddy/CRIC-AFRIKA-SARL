// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
    Factory,
    Phone,
    Menu,
    X,
    Bolt,
    Cog,
    FireExtinguisher
} from 'lucide-react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    const navigation = [
        { name: 'Accueil', href: '/', icon: Bolt },
        { name: 'Produits', href: '/products', icon: Cog },
        { name: 'Services', href: '/services', icon: Factory },
        { name: 'Réalisations', href: '/realisations', icon: FireExtinguisher },
        { name: 'À Propos', href: '/about', icon: Factory },
        { name: 'Contact', href: '/contact', icon: Phone },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-dark-blue/95 backdrop-blur-md shadow-lg'
                    : 'bg-dark-blue/95 backdrop-blur-md'
                }`}
        >
            <nav className="container px-4 py-4 mx-auto lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="flex items-center justify-center w-12 h-12 transition-transform rounded-lg bg-gradient-to-br from-primary-orange to-lemon-green group-hover:scale-105">
                            <Factory className="text-xl text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">CRIC AFRICA</h1>
                            <p className="text-xs italic text-gray-300">Ensemble Énergisons L'Afrique</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden space-x-8 lg:flex">
                        {navigation.map((item) => {
                            const Icon = item.icon
                            const isActive = location.pathname === item.href

                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`flex items-center space-x-1 font-semibold transition-colors ${isActive
                                            ? item.name === 'Produits' ? 'text-primary-orange' : 'text-lemon-green'
                                            : 'text-white hover:text-primary-orange'
                                        }`}
                                >
                                    <Icon size={16} />
                                    <span>{item.name}</span>
                                </Link>
                            )
                        })}
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="items-center hidden px-6 py-3 font-semibold text-white transition-all rounded-full lg:flex bg-gradient-to-r from-primary-orange to-orange-600 hover:shadow-lg hover:scale-105"
                    >
                        <Phone size={16} className="mr-2" />
                        Contactez-nous
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white lg:hidden"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
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
                            <div className="p-6 rounded-lg bg-dark-blue/50 backdrop-blur-md">
                                <div className="flex flex-col space-y-4">
                                    {navigation.map((item) => {
                                        const Icon = item.icon
                                        const isActive = location.pathname === item.href

                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive
                                                        ? 'bg-lemon-green/20 text-lemon-green'
                                                        : 'text-white hover:bg-primary-orange/20 hover:text-primary-orange'
                                                    }`}
                                            >
                                                <Icon size={20} />
                                                <span className="font-semibold">{item.name}</span>
                                            </Link>
                                        )
                                    })}
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