import { Zap } from "lucide-react"
import { Battery } from "lucide-react"
import { BatteryCharging, Bolt, Bot, Building, HardHat, Hotel, Ship, Sprout, ThumbsUp, ToolCase, University } from "lucide-react"

export const projects = [
    {
        id: 1,
        title: 'Usine de Production - Douala',
        category: 'electrical',
        description: 'Installation complète du réseau électrique MT/BT pour une usine de 5000m²',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
        date: 'Janvier 2024',
        icon: Bolt,
        color: 'orange'
    },
    {
        id: 2,
        title: 'Hôpital Central - Yaoundé',
        category: 'generators',
        description: 'Installation de 2 groupes électrogènes 500 kVA avec système de couplage',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
        date: 'Décembre 2023',
        icon: BatteryCharging,
        color: 'green'
    },
    {
        id: 3,
        title: 'Usine Agroalimentaire - Douala',
        category: 'automation',
        description: 'Automatisation complète de la ligne de production avec système SCADA',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
        date: 'Novembre 2023',
        icon: Bot,
        color: 'orange'
    },
    {
        id: 4,
        title: 'Complexe Industriel - Limbé',
        category: 'maintenance',
        description: 'Contrat de maintenance préventive pour parc de 15 équipements',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
        date: 'Octobre 2023',
        icon: ToolCase,
        color: 'green'
    },
    {
        id: 5,
        title: 'Centre Commercial - Douala',
        category: 'electrical',
        description: 'Installation de 8 tableaux électriques et système de gestion d\'énergie',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
        date: 'Septembre 2023',
        icon: Bolt,
        color: 'orange'
    },
    {
        id: 6,
        title: 'Usine Textile - Garoua',
        category: 'generators',
        description: 'Installation groupe électrogène 1000 kVA avec paramétrage complet',
        image: 'https://images.unsplash.com/photo-1621905252472-9b6e78c09a0f?w=800',
        date: 'Août 2023',
        icon: BatteryCharging,
        color: 'green'
    },
    {
        id: 7,
        title: 'Brasserie - Douala',
        category: 'automation',
        description: 'Automatisation ligne d\'embouteillage avec supervision centralisée',
        image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=800',
        date: 'Juillet 2023',
        icon: Bot,
        color: 'orange'
    },
    {
        id: 8,
        title: 'Complexe Hôtelier - Kribi',
        category: 'electrical',
        description: 'Réseau électrique complet avec transformateur 630 kVA',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
        date: 'Juin 2023',
        icon: Bolt,
        color: 'green'
    },
    {
        id: 9,
        title: 'Port Autonome - Douala',
        category: 'maintenance',
        description: 'Maintenance préventive de 25 engins de manutention portuaire',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
        date: 'Mai 2023',
        icon: ToolCase,
        color: 'orange'
    }
]

export const testimonials = [
    {
        name: 'Jean-Pierre MBARGA',
        position: 'Directeur Technique, Usine Agroalimentaire',
        content: 'CRIC Africa a réalisé l\'automatisation complète de notre ligne de production. Professionnalisme et expertise remarquables. Je recommande vivement!',
        rating: 5
    },
    {
        name: 'Marie NKOLO',
        position: 'Responsable Maintenance, Hôpital Central',
        content: 'L\'installation de nos groupes électrogènes a été réalisée dans les délais. Le service après-vente est excellent. Équipe très réactive!',
        rating: 5
    },
    {
        name: 'Paul EKANI',
        position: 'Gérant, Complexe Hôtelier',
        content: 'Installation électrique impeccable pour notre hôtel. Travail soigné, respect des normes et équipe très professionnelle. Merci CRIC Africa!',
        rating: 5
    }
]

export const industries = [
    { icon: Building, name: 'Industrie Manufacturière', description: 'Usines de production, lignes d\'assemblage' },
    { icon: Ship, name: 'Portuaire', description: 'Ports, zones logistiques' },
    { icon: HardHat, name: 'BTP', description: 'Chantiers, infrastructures' },
    { icon: Zap, name: 'Energie', description: 'Stockage, systèmes énergétiques' }
]

export const processSteps = [
    {
        number: 1,
        title: 'Étude et Analyse',
        description: 'Visite sur site, analyse des besoins, étude de faisabilité technique et financière. Nous prenons le temps de comprendre vos contraintes et objectifs.'
    },
    {
        number: 2,
        title: 'Conception et Planification',
        description: 'Élaboration des plans techniques, dimensionnement des équipements, planification détaillée avec jalons et livrables clairement définis.'
    },
    {
        number: 3,
        title: 'Approvisionnement',
        description: 'Sélection et importation des équipements de qualité auprès de nos partenaires internationaux. Contrôle qualité rigoureux à la réception.'
    },
    {
        number: 4,
        title: 'Installation et Mise en Service',
        description: 'Réalisation des travaux par nos équipes qualifiées, tests et essais complets, mise en service progressive avec accompagnement de vos équipes.'
    },
    {
        number: 5,
        title: 'Suivi et Maintenance',
        description: 'Formation de vos équipes, documentation complète, service après-vente réactif et contrats de maintenance personnalisés pour assurer la pérennité.'
    }
]

export const filters = [
    { key: 'all', label: 'Tous les Projets', icon: ThumbsUp },
    { key: 'electrical', label: 'Installation Électrique', icon: Bolt },
    { key: 'automation', label: 'Automatisation', icon: Bot },
    { key: 'maintenance', label: 'Maintenance', icon: ToolCase },
    { key: 'generators', label: 'Groupes Électrogènes', icon: BatteryCharging }
]