// src/pages/Services.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    Phone,
    FolderOpen,
    CheckCircle,
} from 'lucide-react'
import { guarantees, processSteps, services } from '../constants/services'

const Services = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Nos Services - CRIC Afrika SARL | Installation & Maintenance Industrielle</title>
                <meta
                    name="description"
                    content="Services complets d'installation, maintenance et automatisation industrielle. CRIC Africa SARL, votre partenaire technique au Cameroun."
                />
                <meta
                    name="keywords"
                    content="installation électrique, maintenance industrielle, automatisation, service après-vente, Cameroun"
                />
                <meta property="og:title" content="Nos Services - CRIC Africa SARL" />
                <meta property="og:description" content="Services complets d'installation, maintenance et automatisation industrielle" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://cricafrica.com/services" />
            </Helmet>

            <div className="pt-20">
                {/* Page Header */}
                <section className="bg-gradient-to-br from-dark-blue via-blue-900 to-lemon-green pt-32 pb-20">
                    <div className="container mx-auto px-4 lg:px-8 text-center">
                        <motion.h1
                            className="text-5xl lg:text-6xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Nos <span className="text-primary-orange">Services</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Solutions complètes d'installation, maintenance et automatisation pour l'industrie
                        </motion.p>
                        <motion.div
                            className="flex justify-center space-x-2 text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link to="/" className="hover:text-primary-orange transition">Accueil</Link>
                            <span>/</span>
                            <span className="text-lemon-green">Services</span>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-light-gray">
                    <div className="container mx-auto px-4 lg:px-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className={`service-card bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8 hover:shadow-xl transition-all duration-300 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        <div className="flex items-center mb-6">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color === 'orange'
                                                    ? 'from-primary-orange to-lemon-green'
                                                    : 'from-lemon-green to-primary-orange'
                                                } rounded-full flex items-center justify-center mr-4`}>
                                                <service.icon className="text-white text-2xl" />
                                            </div>
                                            <div>
                                                <span className={`text-sm font-semibold ${service.color === 'orange' ? 'text-primary-orange' : 'text-lemon-green'
                                                    } uppercase`}>
                                                    {service.category}
                                                </span>
                                                <h2 className="text-3xl font-bold text-dark-blue">{service.title}</h2>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={feature} className="flex items-start">
                                                    <CheckCircle className={`${featureIndex % 2 === 0 ? 'text-lemon-green' : 'text-primary-orange'
                                                        } text-xl mr-3 mt-1 flex-shrink-0`} />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className={`inline-flex items-center ${service.color === 'orange' ? 'btn-orange' : 'btn-green'
                                                } text-white px-6 py-3 rounded-full font-semibold`}
                                        >
                                            <Phone className="mr-2" size={16} />
                                            Demander un Devis
                                        </Link>
                                    </div>
                                    <div className={`rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <motion.img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-80 object-cover"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Service Process */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
                                Notre <span className="text-primary-orange">Processus</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Une méthodologie éprouvée pour garantir votre satisfaction
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    className="text-center hover-lift"
                                    variants={itemVariants}
                                >
                                    <div className="relative mb-6">
                                        <div className={`w-24 h-24 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto shadow-lg ${index % 2 === 0
                                                ? 'from-primary-orange to-lemon-green'
                                                : 'from-lemon-green to-primary-orange'
                                            }`}>
                                            <span className="text-4xl font-bold text-white">{step.number}</span>
                                        </div>
                                        {index < processSteps.length - 1 && (
                                            <div className="absolute top-12 right-0 hidden lg:block">
                                                <ArrowRight className="text-4xl text-gray-300" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-blue mb-3">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Service Guarantees */}
                <section className="py-20 bg-light-gray">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
                                Nos <span className="text-lemon-green">Garanties</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Votre satisfaction est notre priorité
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {guarantees.map((guarantee, index) => (
                                <motion.div
                                    key={guarantee.title}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover-lift relative overflow-hidden"
                                    variants={itemVariants}
                                >
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${guarantee.color === 'orange'
                                            ? 'from-primary-orange to-lemon-green'
                                            : 'from-lemon-green to-primary-orange'
                                        }`} />
                                    <div className={`w-16 h-16 ${guarantee.color === 'orange' ? 'bg-primary-orange/10' : 'bg-lemon-green/10'
                                        } rounded-full flex items-center justify-center mb-6`}>
                                        <guarantee.icon className={`${guarantee.color === 'orange' ? 'text-primary-orange' : 'text-lemon-green'
                                            } text-3xl`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-dark-blue mb-4">{guarantee.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-lemon-green to-primary-orange">
                    <div className="container mx-auto px-4 lg:px-8 text-center">
                        <motion.div
                            className="max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Prêt à Optimiser Vos Installations ?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Contactez nos experts pour discuter de vos besoins en services industriels. Nous vous proposerons la solution la plus adaptée.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="bg-white text-lemon-green px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition"
                                >
                                    <Phone className="mr-2 inline" size={20} />
                                    Contactez-nous
                                </Link>
                                <Link
                                    to="/realisations"
                                    className="bg-dark-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition"
                                >
                                    <FolderOpen className="mr-2 inline" size={20} />
                                    Voir Nos Réalisations
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Services