// src/constants/services.js
import {
    Bot,
    CalendarCheck,
    Clock,
    FileText,
    Headset,
    Plug,
    Shield,
    Sliders,
    ThumbsUp,
    Truck,
    Users
} from 'lucide-react'

export const services = [
    {
        icon: Plug,
        category: 'Installation',
        title: 'Installation Réseau Électrique',
        description:
            'Conception, installation et mise en service de réseaux électriques industriels complets. De la basse tension à la moyenne tension, nous assurons des installations conformes aux normes en vigueur.',
        features: [
            'Études et dimensionnement électrique',
            'Installation de tableaux électriques',
            'Câblage et raccordement',
            'Mise à la terre et protection'
        ],
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
        color: 'orange',
        key: 'electrical'
    },
    {
        icon: Headset,
        category: 'Support',
        title: 'Assistance Service Après-Vente',
        description:
            "Support technique professionnel disponible 24/7 pour assurer la continuité de vos opérations. Notre équipe d'experts intervient rapidement pour résoudre tous vos problèmes.",
        features: [
            'Hotline technique 24/7',
            'Intervention rapide sur site',
            'Diagnostic et dépannage',
            'Fourniture de pièces détachées'
        ],
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
        color: 'green',
        reverse: true,
        key: 'support'
    },
    {
        icon: Bot,
        category: 'Automatisation',
        title: 'Automatisation des Usines',
        description:
            "Solutions d'automatisation industrielle pour optimiser votre production, réduire les coûts et améliorer la qualité. Systèmes de contrôle et supervision modernes.",
        features: [
            "Programmation d'automates (PLC)",
            'Systèmes SCADA et supervision',
            'Robotique industrielle',
            'Intégration Industrie 4.0'
        ],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
        color: 'orange',
        key: 'automation'
    },
    {
        icon: Sliders,
        category: 'Configuration',
        title: 'Paramétrage des Groupes Électrogènes',
        description:
            'Configuration et optimisation de vos groupes électrogènes pour des performances maximales. Réglages précis et tests de fonctionnement complets.',
        features: [
            'Paramétrage des régulateurs',
            'Synchronisation et couplage',
            'Tests de charge et performance',
            'Formation des opérateurs'
        ],
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
        color: 'green',
        reverse: true,
        key: 'generatorConfig'
    },
    {
        icon: Truck,
        category: 'Maintenance',
        title: 'Maintenance Parc Engins Lourds et Légers',
        description:
            "Maintenance préventive et curative de votre parc d'engins de chantier et de manutention. Prolongez la durée de vie de vos équipements et optimisez leur disponibilité.",
        features: [
            'Maintenance préventive planifiée',
            'Réparations et révisions complètes',
            'Diagnostic électronique',
            'Gestion de flotte et suivi'
        ],
        image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=800',
        color: 'orange',
        key: 'equipmentMaintenance'
    },
    {
        icon: CalendarCheck,
        category: 'Maintenance',
        title: 'Maintenance Préventive et Prédictive',
        description:
            "Programmes de maintenance avancés pour anticiper les pannes et optimiser la disponibilité de vos équipements. Réduisez vos coûts d'exploitation et évitez les arrêts imprévus.",
        features: [
            'Plans de maintenance personnalisés',
            'Analyse vibratoire et thermographie',
            'Surveillance en temps réel',
            'Rapports et recommandations'
        ],
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
        color: 'green',
        reverse: true,
        key: 'predictiveMaintenance'
    }
]

export const processSteps = [
    {
        number: 1,
        title: 'Analyse des Besoins',
        description: 'Étude approfondie de vos besoins et contraintes spécifiques',
        key: 'analysis'
    },
    {
        number: 2,
        title: 'Proposition Technique',
        description: "Élaboration d'une solution technique adaptée et chiffrée",
        key: 'proposal'
    },
    {
        number: 3,
        title: 'Réalisation',
        description: 'Exécution des travaux par nos équipes qualifiées',
        key: 'execution'
    },
    {
        number: 4,
        title: 'Suivi & Support',
        description: 'Accompagnement continu et service après-vente',
        key: 'support'
    }
]

export const guarantees = [
    {
        icon: Shield,
        title: 'Garantie Qualité',
        description:
            'Tous nos services sont garantis et réalisés selon les normes internationales. Nous utilisons uniquement des pièces et équipements certifiés.',
        color: 'orange',
        key: 'quality'
    },
    {
        icon: Clock,
        title: 'Respect des Délais',
        description:
            'Nous nous engageons à respecter les délais convenus. Notre organisation rigoureuse garantit la livraison de vos projets dans les temps.',
        color: 'green',
        key: 'timeliness'
    },
    {
        icon: Users,
        title: 'Équipe Qualifiée',
        description:
            "Nos techniciens et ingénieurs sont formés et certifiés. Ils disposent de l'expertise nécessaire pour tous types d'interventions.",
        color: 'orange',
        key: 'team'
    },
    {
        icon: Headset,
        title: 'Support 24/7',
        description:
            "Notre service d'assistance technique est disponible en permanence pour répondre à vos urgences et questions.",
        color: 'green',
        key: 'support247'
    },
    {
        icon: FileText,
        title: 'Transparence Tarifaire',
        description:
            'Devis détaillés et transparents sans frais cachés. Vous savez exactement ce que vous payez avant de vous engager.',
        color: 'orange',
        key: 'transparency'
    },
    {
        icon: ThumbsUp,
        title: 'Satisfaction Client',
        description:
            'Nous ne considérons un projet terminé que lorsque vous êtes entièrement satisfait. Votre avis compte pour nous.',
        color: 'green',
        key: 'satisfaction'
    }
]
