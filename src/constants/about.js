import { Lightbulb } from "lucide-react"
import { Users } from "lucide-react"
import { Shield } from "lucide-react"
import { Star } from "lucide-react"

export const teamMembers = [
    {
        name: 'Jean ATANGANA',
        position: 'Directeur Général',
        description: '15 ans d\'expérience dans l\'industrie',
        color: 'orange'
    },
    {
        name: 'Marie NKOTTO',
        position: 'Directrice Technique',
        description: 'Ingénieure électricienne certifiée',
        color: 'green'
    },
    {
        name: 'Paul MBARGA',
        position: 'Chef de Projet',
        description: 'Expert en automatisation industrielle',
        color: 'orange'
    },
    {
        name: 'Sophie EKANI',
        position: 'Responsable Commercial',
        description: 'Spécialiste relation client',
        color: 'green'
    }
]

export const certifications = [
    {
        name: 'ISO 9001:2015',
        description: 'Management de la Qualité',
        color: 'orange'
    },
    {
        name: 'ISO 14001:2015',
        description: 'Management Environnemental',
        color: 'green'
    },
    {
        name: 'ISO 45001:2018',
        description: 'Santé et Sécurité au Travail',
        color: 'orange'
    },
    {
        name: 'Certification Électrique',
        description: 'Habilitations MT/BT',
        color: 'green'
    }
]

export const partners = [
    'SIEMENS', 'SCHNEIDER', 'ABB', 'CATERPILLAR', 'CUMMINS', 'ATLAS COPCO'
]

export const values = [
    {
        icon: Star,
        title: 'Excellence',
        description: 'Nous visons l\'excellence dans tout ce que nous faisons',
        color: 'orange'
    },
    {
        icon: Shield,
        title: 'Intégrité',
        description: 'Honnêteté et transparence dans toutes nos relations',
        color: 'green'
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Recherche constante de solutions innovantes',
        color: 'orange'
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'Travail d\'équipe et partenariats durables',
        color: 'green'
    }
]

export const timeline = [
    {
        year: '2008',
        title: 'Création de CRIC Africa',
        description: 'Fondation de l\'entreprise à Douala avec une équipe de 5 personnes. Premiers contrats d\'importation d\'équipements électriques.',
        color: 'orange'
    },
    {
        year: '2012',
        title: 'Expansion des Services',
        description: 'Lancement du département installation et maintenance. Obtention de certifications internationales. Équipe de 15 techniciens.',
        color: 'green'
    },
    {
        year: '2015',
        title: 'Partenariats Internationaux',
        description: 'Signature de partenariats exclusifs avec des fabricants européens et asiatiques. Ouverture d\'une agence à Yaoundé.',
        color: 'orange'
    },
    {
        year: '2018',
        title: 'Diversification',
        description: 'Lancement de l\'activité automatisation industrielle et systèmes de supervision. Plus de 100 projets réalisés.',
        color: 'green'
    },
    {
        year: '2021',
        title: 'Leadership Régional',
        description: 'CRIC Africa devient leader de l\'équipement industriel au Cameroun. Extension des activités au Gabon et en Guinée Équatoriale.',
        color: 'orange'
    },
    {
        year: '2025',
        title: 'Aujourd\'hui',
        description: '45 collaborateurs, 80+ clients satisfaits, 150+ projets réalisés. Engagement continu pour l\'excellence et l\'innovation.',
        color: 'gradient',
        isCurrent: true
    }
]