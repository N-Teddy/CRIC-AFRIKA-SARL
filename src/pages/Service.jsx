// src/pages/Services.jsx
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { guarantees, processSteps, services } from '../constants/services'
import PageHeader from '../components/ui/PageHeader'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'
import { handleImageError } from '../utils/media'

const Services = () => {
    const { t } = useTranslation()

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
                <title>{t('services.title')} - CRIC Africa SARL</title>
                <meta name="description" content={t('services.metaDescription')} />
                <meta name="keywords" content={t('services.metaKeywords')} />
                <meta property="og:title" content={t('services.title')} />
                <meta property="og:description" content={t('services.metaDescription')} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://cricafrica.com/services" />
            </Helmet>

            <div className="pt-20">
                {/* Page Header */}
                <PageHeader
                    title={t('services.title')}
                    subtitle={t('services.subtitle')}
                    breadcrumbs={[t('common.ourServices')]}
                />

                {/* Services Grid */}
                <section className="py-16 bg-[#f5f5f0]">
                    <div className="container px-4 mx-auto lg:px-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="p-8 mb-8 bg-white border rounded-3xl border-[#e1e1e1]"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.05 }}
                                viewport={{ once: true, margin: '-80px' }}
                            >
                                <div className="grid items-center gap-8 lg:grid-cols-2">
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e7efd5]">
                                                <service.icon className="text-[#a8d05f]" size={22} />
                                            </div>
                                            <div>
                                                <span
                                                    className={`text-sm font-semibold ${
                                                        service.color === 'orange'
                                                            ? 'text-primary-orange'
                                                            : 'text-lemon-green'
                                                    } uppercase tracking-wide`}
                                                >
                                                    {t(`services.items.${service.key}.category`)}
                                                </span>
                                                <h2 className="text-3xl font-semibold text-[#222222]">
                                                    {t(`services.items.${service.key}.title`)}
                                                </h2>
                                            </div>
                                        </div>
                                        <p className="mb-6 text-base leading-relaxed text-[#4b4b4b]">
                                            {t(`services.items.${service.key}.description`)}
                                        </p>
                                        <ul className="mb-6 space-y-3">
                                            {t(`services.items.${service.key}.features`, {
                                                returnObjects: true
                                            }).map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start">
                                                    <CheckCircle
                                                        className={`${
                                                            featureIndex % 2 === 0
                                                                ? 'text-lemon-green'
                                                                : 'text-primary-orange'
                                                        } text-xl mr-3 mt-1 flex-shrink-0`}
                                                    />
                                                    <span className="text-[#4b4b4b]">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className={service.color === 'orange' ? 'btn-orange' : 'btn-green'}
                                        >
                                            <Phone className="mr-2" size={16} />
                                            {t('common.getQuote')}
                                        </Link>
                                    </div>
                                    <div
                                        className={`overflow-hidden rounded-2xl border border-[#e1e1e1] ${
                                            index % 2 === 1 ? 'lg:order-1' : ''
                                        }`}
                                    >
                                        <motion.img
                                            src={service.image}
                                            alt={t(`services.items.${service.key}.title`)}
                                            className="object-cover w-full h-80"
                                            loading="lazy"
                                            onError={handleImageError}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.25 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Service Process */}
                <section className="py-16 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-semibold lg:text-5xl text-[#222222]">
                                {t('services.process.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-[#6f6f6f]">
                                {t('services.process.subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
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
                                        <div className="flex items-center justify-center w-20 h-20 mx-auto text-2xl font-semibold text-[#222222] border rounded-full border-[#e1e1e1] bg-[#f9faf3]">
                                            <span>
                                                {step.number}
                                            </span>
                                        </div>
                                        {index < processSteps.length - 1 && (
                                            <div className="absolute right-0 hidden top-12 lg:block">
                                                <ArrowRight className="text-4xl text-gray-300" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-[#222222]">
                                        {t(`services.process.steps.${step.key}.title`)}
                                    </h3>
                                    <p className="text-[#6f6f6f]">
                                        {t(`services.process.steps.${step.key}.description`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Service Guarantees */}
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
                                {t('services.guarantees.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-[#6f6f6f]">
                                {t('services.guarantees.subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {guarantees.map((guarantee, index) => (
                                <motion.div
                                    key={guarantee.title}
                                    className="p-6 bg-white border rounded-2xl border-[#e1e1e1]"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#f9faf3]">
                                        <guarantee.icon
                                            className={
                                                guarantee.color === 'orange'
                                                    ? 'text-[#ff8c42]'
                                                    : 'text-[#a8d05f]'
                                            }
                                            size={20}
                                        />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold text-[#222222]">
                                        {t(`services.guarantees.items.${guarantee.key}.title`)}
                                    </h3>
                                    <p className="text-sm text-[#6f6f6f] leading-relaxed">
                                        {t(`services.guarantees.items.${guarantee.key}.description`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title={t('services.cta.title')}
                    description={t('services.cta.description')}
                    backgroundClass="bg-[#111111]"
                    textColor="text-white"
                    buttons={[
                        {
                            text: t('common.contactUs'),
                            to: '/contact',
                            icon: 'Phone',
                            className: 'bg-white text-[#222222] hover:bg-[#f5f5f0]'
                        },
                        {
                            text: t('common.ourProjects'),
                            to: '/realisations',
                            icon: 'FolderOpen',
                            className: 'bg-[#ff8c42] text-white hover:bg-[#f7792a]'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Services
