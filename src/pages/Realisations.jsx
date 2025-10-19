// src/pages/Realisations.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
    ThumbsUp,
    Calendar,
    Star,
    Plus,
} from 'lucide-react'
import { filters, industries, processSteps, projects, testimonials } from '../constants/realisations'
import PageHeader from '../components/ui/PageHeader'
import CTA from '../components/ui/CTA'

const Realisations = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [visibleProjects, setVisibleProjects] = useState(6)

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter)

    const visibleProjectsList = filteredProjects.slice(0, visibleProjects)

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 6)
    }

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
                <title>Nos Réalisations - CRIC Africa SARL | Projets Industriels au Cameroun</title>
                <meta
                    name="description"
                    content="Découvrez nos projets industriels réalisés au Cameroun. Installation électrique, maintenance, automatisation - CRIC Africa SARL."
                />
                <meta
                    name="keywords"
                    content="projets industriels, réalisations, installation électrique, maintenance, automatisation, Cameroun"
                />
                <meta property="og:title" content="Nos Réalisations - CRIC Africa SARL" />
                <meta property="og:description" content="Découvrez nos projets industriels réalisés au Cameroun" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://cricafrica.com/realisations" />
            </Helmet>

            <div className="pt-20">
                {/* Page Header */}
                <PageHeader
                    title="Nos Réalisations"
                    subtitle="Découvrez nos projets industriels réalisés avec succès au Cameroun et en Afrique Centrale"
                    breadcrumbs={['Réalisations']}
                />

                {/* Stats Section */}
                <section className="py-16 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="grid gap-8 md:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                { number: '150+', label: 'Projets Réalisés' },
                                { number: '80+', label: 'Clients Satisfaits' },
                                { number: '15+', label: 'Années d\'Expérience' },
                                { number: '98%', label: 'Taux de Satisfaction' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    variants={itemVariants}
                                >
                                    <div className="mb-2 text-5xl font-black text-transparent stats-counter lg:text-6xl bg-gradient-to-r from-primary-orange to-lemon-green bg-clip-text">
                                        {stat.number}
                                    </div>
                                    <p className="font-semibold text-gray-600">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Filter Buttons */}
                <section className="py-8 bg-light-gray">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="flex flex-wrap justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {filters.map((filter) => {
                                const Icon = filter.icon
                                return (
                                    <button
                                        key={filter.key}
                                        onClick={() => setActiveFilter(filter.key)}
                                        className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all ${activeFilter === filter.key
                                            ? 'bg-gradient-to-r from-primary-orange to-lemon-green text-white shadow-lg'
                                            : 'bg-white text-gray-700 hover:shadow-md'
                                            }`}
                                    >
                                        <Icon className="mr-2" size={16} />
                                        {filter.label}
                                    </button>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-20 bg-light-gray">
                    <div className="container px-4 mx-auto lg:px-8">
                        <AnimatePresence>
                            <motion.div
                                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                                layout
                            >
                                {visibleProjectsList.map((project) => {
                                    const Icon = project.icon
                                    return (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.5 }}
                                            className="overflow-hidden bg-white shadow-lg project-card rounded-2xl hover-lift group"
                                        >
                                            <div className="relative overflow-hidden">
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="object-cover w-full h-80"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-dark-blue/90 to-transparent group-hover:opacity-100" />
                                                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 transform translate-y-6 group-hover:translate-y-0">
                                                    <span className={`inline-block ${project.color === 'orange' ? 'bg-primary-orange' : 'bg-lemon-green'
                                                        } text-white px-3 py-1 rounded-full text-sm mb-3`}>
                                                        {filters.find(f => f.key === project.category)?.label}
                                                    </span>
                                                    <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
                                                    <p className="mb-4 text-gray-300">{project.description}</p>
                                                    <div className="flex items-center text-sm text-gray-300">
                                                        <Calendar className="mr-2" size={16} />
                                                        <span>{project.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </AnimatePresence>

                        {/* Load More Button */}
                        {visibleProjects < filteredProjects.length && (
                            <motion.div
                                className="mt-12 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    onClick={loadMoreProjects}
                                    className="px-8 py-4 text-lg font-bold text-white rounded-full btn-orange"
                                >
                                    <Plus className="inline mr-2" size={20} />
                                    Charger Plus de Projets
                                </button>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Client Testimonials */}
                <section className="py-20 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                                Ce Que Disent <span className="text-primary-orange">Nos Clients</span>
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
                                Témoignages de satisfaction de nos partenaires
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name}
                                    className="p-8 bg-light-gray rounded-2xl hover-lift"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${index % 2 === 0
                                            ? 'from-primary-orange to-lemon-green'
                                            : 'from-lemon-green to-primary-orange'
                                            } rounded-full flex items-center justify-center mr-4`}>
                                            <ThumbsUp className="text-2xl text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark-blue">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="fill-current text-primary-orange"
                                                size={20}
                                            />
                                        ))}
                                    </div>
                                    <p className="italic leading-relaxed text-gray-600">
                                        "{testimonial.content}"
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="py-20 bg-light-gray">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                                Notre <span className="text-lemon-green">Méthodologie</span>
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
                                Un processus éprouvé pour garantir le succès de vos projets
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    className="flex items-start mb-12"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 ${index % 2 === 0
                                        ? 'from-primary-orange to-lemon-green'
                                        : 'from-lemon-green to-primary-orange'
                                        }`}>
                                        {step.number}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="mb-2 text-2xl font-bold text-dark-blue">{step.title}</h3>
                                        <p className="leading-relaxed text-gray-600">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries Served */}
                <section className="py-20 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                                Secteurs <span className="text-primary-orange">d'Activité</span>
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
                                Nous intervenons dans de nombreux secteurs industriels
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {industries.map((industry, index) => {
                                const Icon = industry.icon
                                return (
                                    <motion.div
                                        key={industry.name}
                                        className="text-center hover-lift"
                                        variants={itemVariants}
                                    >
                                        <div className={`w-24 h-24 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${index % 2 === 0
                                            ? 'from-primary-orange to-lemon-green'
                                            : 'from-lemon-green to-primary-orange'
                                            }`}>
                                            <Icon className="text-3xl text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-dark-blue">{industry.name}</h3>
                                        <p className="text-gray-600">{industry.description}</p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title="Votre Projet Mérite le Meilleur"
                    description="Faites confiance à CRIC Africa pour la réalisation de vos projets industriels. Notre expertise et notre engagement garantissent votre succès."
                    buttons={[
                        {
                            text: "Démarrer un Projet",
                            to: "/contact",
                            icon: "Phone",
                            className: "bg-white text-primary-orange hover:bg-gray-50"
                        },
                        {
                            text: "Voir Nos Produits",
                            to: "/products",
                            icon: "Box",
                            className: "bg-dark-blue text-white hover:bg-blue-900"
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Realisations