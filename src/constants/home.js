import { CheckCircle } from "lucide-react";
import { Factory } from "lucide-react";
import { Shield } from "lucide-react";
import { Wind } from "lucide-react";
import { Truck } from "lucide-react";
import { Droplet } from "lucide-react";
import { Zap } from "lucide-react";
import { Wrench } from "lucide-react";
import { Star } from "lucide-react";
import { Users } from "lucide-react";
import { Award } from "lucide-react";

export const stats = [
    { number: 15, label: 'Années d\'Expérience', icon: Award, suffix: '+' },
    { number: 80, label: 'Clients Satisfaits', icon: Users, suffix: '+' },
    { number: 150, label: 'Projets Réalisés', icon: CheckCircle, suffix: '+' },
    { number: 45, label: 'Experts Qualifiés', icon: Star, suffix: '' },

];

export const services = [
    {
        icon: Factory,
        title: 'Importation',
        description: 'Équipements industriels de qualité supérieure',
        color: 'from-primary-orange to-lemon-green'
    },
    {
        icon: Wrench,
        title: 'Installation',
        description: 'Mise en place professionnelle par nos experts',
        color: 'from-lemon-green to-primary-orange'
    },
    {
        icon: Shield,
        title: 'Maintenance',
        description: 'Service après-vente réactif et efficace',
        color: 'from-primary-orange to-lemon-green'
    },
    {
        icon: Zap,
        title: 'Automatisation',
        description: 'Solutions d\'automatisation industrielle',
        color: 'from-lemon-green to-primary-orange'
    },
];

export const products = [
    { icon: Zap, name: 'Groupes Électrogènes', count: '50+ Modèles' },
    { icon: Wind, name: 'Compresseurs', count: '30+ Modèles' },
    { icon: Shield, name: 'Équipements Sécurité', count: '40+ Produits' },
    { icon: Droplet, name: 'Matériels de Pompage', count: '25+ Modèles' },
    { icon: Truck, name: 'Engins de Manutention', count: '20+ Modèles' },
    { icon: Factory, name: 'Transformateurs', count: '15+ Modèles' },
];

export const testimonials = [
    {
        name: 'Jean MBARGA',
        company: 'Directeur Technique, SABC',
        text: 'CRIC Africa a installé nos groupes électrogènes avec un professionnalisme remarquable. Service impeccable!',
        rating: 5
    },
    {
        name: 'Marie NKOTTO',
        company: 'Responsable Production, SOCAVER',
        text: 'Équipements de qualité et équipe très réactive. Nous recommandons vivement leurs services.',
        rating: 5
    },
    {
        name: 'Paul ATANGANA',
        company: 'Gérant, Hôtel Le Meridien',
        text: 'Installation électrique impeccable pour notre hôtel. Travail soigné et respect des normes.',
        rating: 5
    },
];