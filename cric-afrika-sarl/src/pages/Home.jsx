// ============================================
// src/pages/Home.jsx
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Zap, Shield, Wrench, TrendingUp, Users, Award,
    Factory, Wind, Truck, Droplet, HardHat, Building,
    ArrowRight, CheckCircle, Star, Phone, Box
} from 'lucide-react';

const Home = () => {
    const stats = [
        { number: '15+', label: 'Années d\'Expérience', icon: Award },
        { number: '80+', label: 'Clients Satisfaits', icon: Users },
        { number: '150+', label: 'Projets Réalisés', icon: CheckCircle },
        { number: '45', label: 'Experts Qualifiés', icon: Star },
    ];

    const services = [
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

    const products = [
        { icon: Zap, name: 'Groupes Électrogènes', count: '50+ Modèles' },
        { icon: Wind, name: 'Compresseurs', count: '30+ Modèles' },
        { icon: Shield, name: 'Équipements Sécurité', count: '40+ Produits' },
        { icon: Droplet, name: 'Matériels de Pompage', count: '25+ Modèles' },
        { icon: Truck, name: 'Engins de Manutention', count: '20+ Modèles' },
        { icon: Factory, name: 'Transformateurs', count: '15+ Modèles' },
    ];

    const testimonials = [
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

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-blue via-dark-blue to-primary-orange pt-20">
                <div className="container mx-auto px-4 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6"
                            >
                                Leader de l'Équipement Industriel au Cameroun
                            </motion.span>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Ensemble <span className="text-gradient">Énergisons</span> L'Afrique
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                Importation, installation et maintenance d'équipements industriels de qualité supérieure.
                                Votre partenaire de confiance depuis plus de 15 ans.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="bg-gradient-to-r from-primary-orange to-lemon-green text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition inline-flex items-center"
                                >
                                    <Phone className="mr-2" size={20} />
                                    Demander un Devis
                                </Link>
                                <Link
                                    to="/products"
                                    className="bg-white text-dark-blue px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition inline-flex items-center"
                                >
                                    <Box className="mr-2" size={20} />
                                    Nos Produits
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=600"
                                    alt="Industrial Equipment"
                                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                                />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600"
                                    alt="Generator"
                                    className="rounded-2xl shadow-2xl w-full h-64 object-cover mt-8"
                                />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600"
                                    alt="Industrial Site"
                                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                                />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="https://images.unsplash.com/photo-1621905252472-9b6e78c09a0f?w=600"
                                    alt="Maintenance"
                                    className="rounded-2xl shadow-2xl w-full h-64 object-cover mt-8"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 gradient-orange-green rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-4xl font-bold text-dark-blue mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-light-gray">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            NOS SERVICES
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
                            Des <span className="text-gradient">Solutions Complètes</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            De l'importation à la maintenance, nous vous accompagnons à chaque étape
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6`}>
                                    <service.icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-dark-blue mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <Link to="/services" className="text-primary-orange font-semibold inline-flex items-center hover:gap-2 transition-all">
                                    En savoir plus <ArrowRight size={18} className="ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-lemon-green/10 text-lemon-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            NOS PRODUITS
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
                            Large Gamme d'<span className="text-gradient">Équipements</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Des équipements industriels de qualité pour tous vos besoins
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-light-gray rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer"
                            >
                                <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-primary-orange/10' : 'bg-lemon-green/10'} rounded-full flex items-center justify-center mb-6`}>
                                    <product.icon className={index % 2 === 0 ? 'text-primary-orange' : 'text-lemon-green'} size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-dark-blue mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.count}</p>
                                <Link to="/products" className="text-primary-orange font-semibold inline-flex items-center hover:gap-2 transition-all">
                                    Découvrir <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            to="/products"
                            className="bg-gradient-to-r from-primary-orange to-lemon-green text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition inline-flex items-center"
                        >
                            Voir Tous les Produits <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gradient-to-br from-dark-blue to-primary-orange">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                POURQUOI NOUS CHOISIR
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Votre Partenaire de Confiance
                            </h2>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                CRIC Africa s'engage à fournir des équipements de qualité supérieure et un service client exceptionnel.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Équipements certifiés et garantis',
                                    'Installation par des experts qualifiés',
                                    'Service après-vente réactif 24/7',
                                    'Partenariats avec les meilleures marques',
                                    'Formations et accompagnement',
                                    'Prix compétitifs et solutions de financement'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <CheckCircle className="text-lemon-green" size={24} />
                                        <span className="text-white text-lg">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=800"
                                alt="Industrial Equipment"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-light-gray">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            TÉMOIGNAGES
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
                            Ce Que Disent Nos <span className="text-gradient">Clients</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            La satisfaction de nos clients est notre priorité
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="text-primary-orange fill-current" size={20} />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                                <div>
                                    <h4 className="font-bold text-dark-blue">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-orange to-lemon-green">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Prêt à Démarrer Votre Projet ?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="bg-white text-primary-orange px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition inline-flex items-center"
                            >
                                <Phone className="mr-2" size={20} />
                                Contactez-nous
                            </Link>
                            <Link
                                to="/services"
                                className="bg-dark-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition inline-flex items-center"
                            >
                                <Wrench className="mr-2" size={20} />
                                Nos Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;