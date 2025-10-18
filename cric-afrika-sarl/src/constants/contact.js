import {
    Building, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ToolCase, Twitter,
    MessageCircle, } from "lucide-react"

export const contactInfo = [
    {
        icon: Phone,
        title: 'Téléphone',
        details: ['+237 XXX XXX XXX', '+237 XXX XXX XXX'],
        action: { label: 'Appelez-nous', href: 'tel:+237XXXXXXXXX' },
        color: 'orange'
    },
    {
        icon: Mail,
        title: 'Email',
        details: ['contact@cricafrica.com', 'info@cricafrica.com'],
        action: { label: 'Envoyez un email', href: 'mailto:contact@cricafrica.com' },
        color: 'green'
    },
    {
        icon: MapPin,
        title: 'Adresse',
        details: ['Douala, Cameroun', 'Zone Industrielle Bassa'],
        action: { label: 'Voir sur la carte', href: '#map' },
        color: 'orange'
    },
    {
        icon: Clock,
        title: 'Horaires',
        details: ['Lun-Ven: 8h-18h', 'Samedi: 9h-13h', 'Dimanche: Fermé'],
        color: 'green'
    }
]

export const faqs = [
    {
        question: 'Quel est le délai de livraison ?',
        answer: 'Généralement 2-4 semaines selon le produit et la disponibilité'
    },
    {
        question: 'Proposez-vous des financements ?',
        answer: 'Oui, nous travaillons avec plusieurs partenaires financiers'
    },
    {
        question: 'Intervenez-vous hors de Douala ?',
        answer: 'Oui, nous intervenons sur tout le territoire camerounais'
    },
    {
        question: 'Quelle est la garantie ?',
        answer: 'Garantie constructeur de 12 à 24 mois selon les équipements'
    }
]

export const offices = [
    {
        icon: Building,
        title: 'Siège Social - Douala',
        details: [
            { icon: MapPin, text: 'Zone Industrielle Bassa, Douala', color: 'orange' },
            { icon: Phone, text: '+237 XXX XXX XXX', color: 'green' },
            { icon: Mail, text: 'douala@cricafrica.com', color: 'orange' }
        ],
        action: { label: 'Obtenir l\'itinéraire', href: '#' },
        color: 'orange'
    },
    {
        icon: Building,
        title: 'Agence Yaoundé',
        details: [
            { icon: MapPin, text: 'Bastos, Yaoundé', color: 'green' },
            { icon: Phone, text: '+237 XXX XXX XXX', color: 'orange' },
            { icon: Mail, text: 'yaounde@cricafrica.com', color: 'green' }
        ],
        action: { label: 'Obtenir l\'itinéraire', href: '#' },
        color: 'green'
    },
    {
        icon: ToolCase,
        title: 'Centre Technique',
        details: [
            { icon: MapPin, text: 'Zone Industrielle Bonabéri, Douala', color: 'orange' },
            { icon: Phone, text: '+237 XXX XXX XXX', color: 'green' },
            { icon: Mail, text: 'technique@cricafrica.com', color: 'orange' }
        ],
        action: { label: 'Obtenir l\'itinéraire', href: '#' },
        color: 'orange'
    }
]

export const socialMedia = [
    { icon: Facebook, href: '#', color: 'hover:bg-primary-orange', textColor: 'text-primary-orange' },
    { icon: Linkedin, href: '#', color: 'hover:bg-lemon-green', textColor: 'text-lemon-green' },
    { icon: Twitter, href: '#', color: 'hover:bg-primary-orange', textColor: 'text-primary-orange' },
    { icon: MessageCircle, href: '#', color: 'hover:bg-green-500', textColor: 'text-green-500' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-500', textColor: 'text-pink-500' }
]