import { Wrench } from "lucide-react";
import { Phone } from "lucide-react";
import { Package } from "lucide-react";
import { Home } from "lucide-react";

export const quickLinks = [
    {
        icon: Home,
        title: 'Accueil',
        description: 'Retour à la page d\'accueil',
        link: '/',
        color: 'from-primary-orange to-lemon-green'
    },
    {
        icon: Package,
        title: 'Produits',
        description: 'Voir nos équipements',
        link: '/products',
        color: 'from-lemon-green to-primary-orange'
    },
    {
        icon: Wrench,
        title: 'Services',
        description: 'Découvrir nos services',
        link: '/services',
        color: 'from-primary-orange to-lemon-green'
    },
    {
        icon: Phone,
        title: 'Contact',
        description: 'Nous contacter',
        link: '/contact',
        color: 'from-lemon-green to-primary-orange'
    },
];

export const popularPages = [
    { name: 'Groupes Électrogènes', link: '/products' },
    { name: 'Compresseurs', link: '/products' },
    { name: 'Nos Réalisations', link: '/realisations' },
    { name: 'À Propos', link: '/about' },
    { name: 'Maintenance & SAV', link: '/services' },
    { name: 'Demander un Devis', link: '/contact' },
];