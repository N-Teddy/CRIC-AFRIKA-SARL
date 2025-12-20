// src/pages/Realisations.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ThumbsUp, Calendar, Star, Plus } from 'lucide-react'
import {
    filters,
    industries,
    processSteps,
    projects,
    testimonials
} from '../constants/realisations'
import PageHeader from '../components/ui/PageHeader'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'
import { handleImageError } from '../utils/media'

const Realisations = () => {
    const { t } = useTranslation()
    const [activeFilter, setActiveFilter] = useState('all')
    const [visibleProjects, setVisibleProjects] = useState(6)

    const filteredProjects =
        activeFilter === 'all'
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
                <title>{t('realisations.title')} - CRIC Africa SARL</title>
                <meta name="description" content={t('realisations.metaDescription')} />
                <meta name="keywords" content={t('realisations.metaKeywords')} />
                <meta property="og:title" content={t('realisations.title')} />
                <meta property="og:description" content={t('realisations.metaDescription')} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://cricafrica.com/realisations" />
            </Helmet>

            <div className="pt-20">
                {/* Page Header */}
                <PageHeader
                    title={t('realisations.title')}
                    subtitle={t('realisations.subtitle')}
                    breadcrumbs={[t('common.ourProjects')]}
                />

                {/* Stats Section */}
                <section className="py-16 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <div className="grid gap-6 md:grid-cols-4">
                            {[
                                { number: '150+', key: 'projects' },
                                { number: '80+', key: 'clients' },
                                { number: '15+', key: 'experience' },
                                { number: '98%', key: 'satisfaction' }
                            ].map(stat => (
                                <div
                                    key={stat.key}
                                    className="p-6 text-center border rounded-2xl border-[#e1e1e1] bg-[#f9faf3]"
                                >
                                    <div className="text-3xl font-semibold text-[#222222]">
                                        {stat.number}
                                    </div>
                                    <p className="mt-2 text-sm text-[#6f6f6f]">
                                        {t(`realisations.stats.${stat.key}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Filter Buttons */}
                <section className="py-8 bg-[#f5f5f0]">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="flex flex-wrap justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            {filters.map(filter => {
                                const Icon = filter.icon
                                return (
                                    <button
                                        key={filter.key}
                                        onClick={() => setActiveFilter(filter.key)}
                                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                                            activeFilter === filter.key
                                                ? 'bg-[#222222] text-white border-[#222222]'
                                                : 'bg-white text-[#6f6f6f] border-[#e1e1e1] hover:text-[#222222]'
                                        }`}
                                    >
                                        <Icon className="mr-2" size={16} />
                                        {t(`realisations.filters.${filter.key}`)}
                                    </button>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-16 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <AnimatePresence>
                            <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" layout>
                                {visibleProjectsList.map(project => {
                                    return (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.5 }}
                                            className="overflow-hidden border rounded-3xl border-[#e1e1e1] bg-[#f9faf3]"
                                        >
                                            <div className="relative overflow-hidden">
                                                <motion.img
                                                    src={project.image}
                                                    alt={t(
                                                        `realisations.projects.${project.key}.title`
                                                    )}
                                                    className="object-cover w-full h-80"
                                                    loading="lazy"
                                                    onError={handleImageError}
                                                    whileHover={{ scale: 1.03 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                            <div className="p-6">
                                                <span className="inline-flex px-3 py-1 mb-3 text-xs font-semibold tracking-wide uppercase rounded-full bg-white border border-[#e1e1e1] text-[#6f6f6f]">
                                                    {t(`realisations.filters.${project.category}`)}
                                                </span>
                                                <h3 className="text-xl font-semibold text-[#222222]">
                                                    {t(`realisations.projects.${project.key}.title`)}
                                                </h3>
                                                <p className="mt-2 text-sm text-[#6f6f6f]">
                                                    {t(
                                                        `realisations.projects.${project.key}.description`
                                                    )}
                                                </p>
                                                <div className="flex items-center mt-4 text-xs text-[#6f6f6f]">
                                                    <Calendar className="mr-2" size={14} />
                                                    <span>{project.date}</span>
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
                                <button onClick={loadMoreProjects} className="btn-orange">
                                    <Plus className="inline mr-2" size={20} />
                                    {t('realisations.loadMore')}
                                </button>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Client Testimonials */}
                <section className="py-16 bg-[#f5f5f0]">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-semibold lg:text-5xl text-[#222222]">
                                {t('realisations.testimonials.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-[#6f6f6f]">
                                {t('realisations.testimonials.subtitle')}
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
                                    className="p-6 bg-white border rounded-2xl border-[#e1e1e1]"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f9faf3] mr-3">
                                            <ThumbsUp className="text-[#a8d05f]" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#222222]">
                                                {t(
                                                    `realisations.testimonials.items.${testimonial.key}.name`
                                                )}
                                            </h4>
                                            <p className="text-xs text-[#6f6f6f]">
                                                {t(
                                                    `realisations.testimonials.items.${testimonial.key}.position`
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-3 text-[#ff8c42]">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} />
                                        ))}
                                    </div>
                                    <p className="text-sm text-[#4b4b4b] leading-relaxed">
                                        “
                                        {t(
                                            `realisations.testimonials.items.${testimonial.key}.content`
                                        )}
                                        ”
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="py-16 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-semibold lg:text-5xl text-[#222222]">
                                {t('realisations.process.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-[#6f6f6f]">
                                {t('realisations.process.subtitle')}
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    className="flex items-start mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 w-14 h-14 mr-6 text-base font-semibold text-[#222222] border rounded-full border-[#e1e1e1] flex items-center justify-center bg-[#f9faf3]">
                                        <span>{step.number}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="mb-1 text-xl font-semibold text-[#222222]">
                                            {t(`realisations.process.steps.${step.key}.title`)}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-[#6f6f6f]">
                                            {t(
                                                `realisations.process.steps.${step.key}.description`
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries Served */}
                <section className="py-16 bg-[#f5f5f0]">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-semibold lg:text-5xl text-[#222222]">
                                {t('realisations.industries.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-[#6f6f6f]">
                                {t('realisations.industries.subtitle')}
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
                                        className="p-6 text-center bg-white border rounded-2xl border-[#e1e1e1]"
                                        variants={itemVariants}
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#f9faf3]">
                                            <Icon className="text-[#a8d05f]" size={18} />
                                        </div>
                                        <h3 className="mb-1 text-lg font-semibold text-[#222222]">
                                            {t(
                                                `realisations.industries.items.${industry.key}.name`
                                            )}
                                        </h3>
                                        <p className="text-sm text-[#6f6f6f]">
                                            {t(
                                                `realisations.industries.items.${industry.key}.description`
                                            )}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title={t('realisations.cta.title')}
                    description={t('realisations.cta.description')}
                    backgroundClass="bg-[#111111]"
                    textColor="text-white"
                    buttons={[
                        {
                            text: t('realisations.cta.startProject'),
                            to: '/contact',
                            icon: 'Phone',
                            className: 'bg-white text-[#222222] hover:bg-[#f5f5f0]'
                        },
                        {
                            text: t('common.ourProducts'),
                            to: '/products',
                            icon: 'Box',
                            className: 'bg-[#ff8c42] text-white hover:bg-[#f7792a]'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Realisations
