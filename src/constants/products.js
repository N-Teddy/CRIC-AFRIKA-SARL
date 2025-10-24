// src/constants/products.js
import { Headset } from "lucide-react"
import { Award, Bolt, Circle, Cog, Droplets, FireExtinguisher, Forklift, Gauge, Microchip, Plug, Shield, Ship, Star, ToolCase, Wine, Wrench } from "lucide-react"

export const products = [
    {
        id: 'generators',
        key: 'generators',
        icon: Bolt,
        title: 'Groupes Électrogènes Industriels',
        description: 'Solutions d\'alimentation électrique fiables et performantes pour vos installations industrielles. Nos groupes électrogènes sont conçus pour fonctionner en continu dans les conditions les plus exigeantes.',
        features: [
            'Puissances de 10 kVA à 3000 kVA',
            'Moteurs diesel de marques réputées',
            'Systèmes de démarrage automatique',
            'Installation et mise en service incluses'
        ],
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
        badge: { text: 'Produit Phare', color: 'bg-primary-orange', icon: Star },
        color: 'orange',
        reverse: false
    },
    {
        id: 'compressors',
        key: 'compressors',
        icon: Cog,
        title: 'Compresseurs à Vis et à Piston Industriels',
        description: 'Compresseurs industriels robustes pour applications exigeantes. Solutions d\'air comprimé efficaces et économiques pour tous types d\'industries.',
        features: [
            'Compresseurs à vis rotatifs',
            'Compresseurs à piston alternatifs',
            'Débits de 0,5 à 100 m³/min',
            'Maintenance préventive disponible'
        ],
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800',
        badge: { text: 'Haute Performance', color: 'bg-lemon-green', icon: FireExtinguisher },
        color: 'green',
        reverse: true
    },
    {
        id: 'fire-safety',
        key: 'fireSafety',
        icon: FireExtinguisher,
        title: 'Équipements Sécurité Incendie',
        description: 'Systèmes complets de protection et sécurité incendie pour vos installations industrielles. Conformes aux normes internationales de sécurité.',
        features: [
            'Extincteurs tous types (CO2, poudre, mousse)',
            'Systèmes de détection incendie',
            'Sprinklers et systèmes d\'extinction automatique',
            'Installation et formation du personnel'
        ],
        image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800',
        badge: { text: 'Sécurité Essentielle', color: 'bg-red-500', icon: Shield },
        color: 'orange',
        reverse: false
    },
    {
        id: 'ppe',
        key: 'ppe',
        icon: Shield,
        title: 'Équipements Protection Individuelle (EPI)',
        description: 'Gamme complète d\'équipements de protection individuelle pour assurer la sécurité de vos équipes sur tous les sites industriels.',
        features: [
            'Casques, lunettes et protections auditives',
            'Gants de protection tous types',
            'Chaussures et bottes de sécurité',
            'Vêtements de travail et harnais'
        ],
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
        badge: { text: 'Protection Personnel', color: 'bg-yellow-500', icon: Shield },
        color: 'green',
        reverse: true
    },
    {
        id: 'pumping',
        key: 'pumping',
        icon: Droplets,
        title: 'Matériels de Pompage Industriel',
        description: 'Pompes industrielles haute performance pour le transfert de liquides, eaux usées, produits chimiques et applications spéciales.',
        features: [
            'Pompes centrifuges et volumétriques',
            'Pompes submersibles et de surface',
            'Stations de pompage complètes',
            'Accessoires et pièces de rechange'
        ],
        image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=800',
        badge: { text: 'Solutions Hydrauliques', color: 'bg-blue-500', icon: Droplets },
        color: 'orange',
        reverse: false
    },
    {
        id: 'handling',
        key: 'handling',
        icon: Forklift,
        title: 'Engins de Manutention',
        description: 'Équipements de manutention et de levage pour optimiser vos opérations logistiques et industrielles.',
        features: [
            'Chariots élévateurs électriques et thermiques',
            'Transpalettes manuels et électriques',
            'Ponts roulants et palans',
            'Gerbeurs et nacelles élévatrices'
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
        badge: { text: 'Manutention', color: 'bg-orange-500', icon: Forklift },
        color: 'green',
        reverse: true
    },
    {
        id: 'motors',
        key: 'motors',
        icon: Circle,
        title: 'Moteurs Électriques',
        description: 'Moteurs électriques industriels haute performance pour toutes applications. Solutions fiables et économes en énergie.',
        features: [
            'Moteurs asynchrones triphasés',
            'Moteurs à courant continu',
            'Puissances de 0,5 kW à 500 kW',
            'Normes IE2, IE3, IE4 (haute efficacité)'
        ],
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
        badge: { text: 'Motorisation', color: 'bg-purple-500', icon: Circle },
        color: 'orange',
        reverse: false
    },
    {
        id: 'gearboxes',
        key: 'gearboxes',
        icon: Cog,
        title: 'Moto-réducteurs',
        description: 'Moto-réducteurs industriels pour transmission de puissance optimale. Solutions compactes et efficaces pour vos machines.',
        features: [
            'Réducteurs à engrenages hélicoïdaux',
            'Réducteurs à vis sans fin',
            'Couples de 10 Nm à 50 000 Nm',
            'Configurations sur mesure disponibles'
        ],
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
        badge: { text: 'Transmission', color: 'bg-indigo-500', icon: Cog },
        color: 'green',
        reverse: true
    },
    {
        id: 'filling-machines',
        key: 'fillingMachines',
        icon: Wine,
        title: 'Souffleuses, Boucheuses et Remplisseuses',
        description: 'Équipements de conditionnement automatisés pour l\'industrie agroalimentaire, pharmaceutique et cosmétique.',
        features: [
            'Souffleuses de bouteilles PET',
            'Remplisseuses volumétriques et pondérales',
            'Boucheuses automatiques et semi-automatiques',
            'Lignes complètes de conditionnement'
        ],
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
        badge: { text: 'Conditionnement', color: 'bg-teal-500', icon: Wine },
        color: 'orange',
        reverse: false
    },
    {
        id: 'transformers',
        key: 'transformers',
        icon: Plug,
        title: 'Transformateurs',
        description: 'Transformateurs électriques industriels pour distribution et adaptation de tension. Solutions fiables pour vos réseaux électriques.',
        features: [
            'Transformateurs de distribution MT/BT',
            'Transformateurs secs et à huile',
            'Puissances de 50 kVA à 2500 kVA',
            'Installation et mise en service complète'
        ],
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
        badge: { text: 'Haute Tension', color: 'bg-red-500', icon: Bolt },
        color: 'green',
        reverse: true
    }
]

export const additionalProducts = [
    {
        icon: Wrench,
        name: 'Outillage Industriel',
        description: 'Outils professionnels de qualité',
        key: 'tools'
    },
    {
        icon: Gauge,
        name: 'Robinetterie',
        description: 'Vannes et accessoires industriels',
        key: 'valves'
    },
    {
        icon: Microchip,
        name: 'Automatismes',
        description: 'Systèmes de contrôle et régulation',
        key: 'automation'
    }
]

export const benefits = [
    {
        icon: Award,
        title: 'Qualité Garantie',
        description: 'Équipements certifiés de marques reconnues internationalement',
        color: 'orange',
        key: 'quality'
    },
    {
        icon: Ship,
        title: 'Livraison Rapide',
        description: 'Logistique optimisée pour des délais de livraison courts',
        color: 'green',
        key: 'delivery'
    },
    {
        icon: ToolCase,
        title: 'Installation Professionnelle',
        description: 'Équipe technique qualifiée pour l\'installation et la mise en service',
        color: 'orange',
        key: 'installation'
    },
    {
        icon: Headset,
        title: 'Service apres vente 24h/7',
        description: 'Support technique disponible 24 heures sur 24, 7 jours sur 7',
        color: 'green',
        key: 'support'
    }
]