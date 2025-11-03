// src/constants/not-found.js
import { Wrench, Phone, Package, Home } from 'lucide-react'

export const quickLinks = [
    {
        icon: Home,
        title: 'Accueil',
        description: "Retour à la page d'accueil",
        link: '/',
        color: 'from-primary-orange to-lemon-green',
        key: 'home'
    },
    {
        icon: Package,
        title: 'Produits',
        description: 'Voir nos équipements',
        link: '/products',
        color: 'from-lemon-green to-primary-orange',
        key: 'products'
    },
    {
        icon: Wrench,
        title: 'Services',
        description: 'Découvrir nos services',
        link: '/services',
        color: 'from-primary-orange to-lemon-green',
        key: 'services'
    },
    {
        icon: Phone,
        title: 'Contact',
        description: 'Nous contacter',
        link: '/contact',
        color: 'from-lemon-green to-primary-orange',
        key: 'contact'
    }
]

export const popularPages = [
    { name: 'Groupes Électrogènes', link: '/products' },
    { name: 'Compresseurs', link: '/products' },
    { name: 'Nos Réalisations', link: '/realisations' },
    { name: 'À Propos', link: '/about' },
    { name: 'Maintenance & SAV', link: '/services' },
    { name: 'Demander un Devis', link: '/contact' }
]
