// src/constants/routes.js
import { lazy } from 'react'
import About from '../pages/About'

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'))
const Products = lazy(() => import('../pages/Products'))
const Services = lazy(() => import('../pages/Service'))
const Realisations = lazy(() => import('../pages/Realisations'))
// const About = lazy(() => import('../pages/'))
const Contact = lazy(() => import('../pages/Contact'))

export const routes = [
    {
        path: '/',
        element: <Home />,
        title: 'CRIC Africa SARL - Importation Équipements Industriels | Cameroun',
        description: 'CRIC Africa SARL - Votre partenaire de confiance pour l\'importation d\'équipements industriels au Cameroun.'
    },
    {
        path: '/products',
        element: <Products />,
        title: 'Produits - CRIC Africa SARL',
        description: 'Découvrez nos équipements industriels de qualité supérieure.'
    },
    {
        path: '/services',
        element: <Services />,
        title: 'Services - CRIC Africa SARL',
        description: 'Nos services d\'installation, maintenance et automatisation.'
    },
    {
        path: '/realisations',
        element: <Realisations />,
        title: 'Réalisations - CRIC Africa SARL',
        description: 'Découvrez nos projets et références clients.'
    },
    {
        path: '/about',
        element: <About />,
        title: 'À Propos - CRIC Africa SARL',
        description: 'Notre histoire, notre vision et notre équipe.'
    },
    {
        path: '/contact',
        element: <Contact />,
        title: 'Contact - CRIC Africa SARL',
        description: 'Contactez-nous pour vos projets industriels.'
    },
]