// src/constants/contact.js
import {
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    MessageCircle
} from 'lucide-react'
import { Email, phone, WhatsAppNumber } from '.'

export const contactInfo = [
    {
        icon: Phone,
        title: 'Téléphone',
        details: [`+237${WhatsAppNumber}`, `+237${phone}`],
        action: { label: 'Appelez-nous', href: `tel:+237 ${WhatsAppNumber}` },
        color: 'orange',
        key: 'phone'
    },
    {
        icon: Mail,
        title: 'Email',
        details: ['cricafrica@yahoo.com', 'info@cricafrica.com'],
        action: { label: 'Envoyez un email', href: `mailto:${Email}` },
        color: 'green',
        key: 'email'
    },
    {
        icon: MapPin,
        title: 'Adresse',
        details: ['Douala, Cameroun', 'Akwa'],
        action: { label: 'Voir sur la carte', href: '#map' },
        color: 'orange',
        key: 'address'
    },
    {
        icon: Clock,
        title: 'Horaires',
        details: ['Lun-Ven: 8h-18h', 'Samedi: 9h-13h', 'Dimanche: Fermé'],
        color: 'green',
        key: 'hours'
    }
]

export const faqs = [
    {
        question: 'Quel est le délai de livraison ?',
        answer: 'Généralement 2-4 semaines selon le produit et la disponibilité',
        key: 'delivery'
    },
    {
        question: 'Proposez-vous des financements ?',
        answer: 'Oui, nous travaillons avec plusieurs partenaires financiers',
        key: 'financing'
    },
    {
        question: 'Intervenez-vous hors de Douala ?',
        answer: 'Oui, nous intervenons sur tout le territoire camerounais',
        key: 'coverage'
    },
    {
        question: 'Quelle est la garantie ?',
        answer: 'Garantie constructeur de 12 à 24 mois selon les équipements',
        key: 'warranty'
    }
]

export const socialMedia = [
    {
        icon: Facebook,
        href: '#',
        color: 'hover:bg-primary-orange',
        textColor: 'text-primary-orange'
    },
    { icon: Linkedin, href: '#', color: 'hover:bg-lemon-green', textColor: 'text-lemon-green' },
    {
        icon: Twitter,
        href: '#',
        color: 'hover:bg-primary-orange',
        textColor: 'text-primary-orange'
    },
    { icon: MessageCircle, href: '#', color: 'hover:bg-green-500', textColor: 'text-green-500' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-500', textColor: 'text-pink-500' }
]
