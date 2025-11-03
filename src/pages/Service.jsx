// src/pages/Services.jsx
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { guarantees, processSteps, services } from '../constants/services'
import PageHeader from '../components/ui/PageHeader'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'

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
                <section className="py-20 bg-light-gray">
                    <div className="container px-4 mx-auto lg:px-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className={`service-card bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8 hover:shadow-xl transition-all duration-300 ${
                                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="grid items-center gap-8 lg:grid-cols-2">
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        <div className="flex items-center mb-6">
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-br ${
                                                    service.color === 'orange'
                                                        ? 'from-primary-orange to-lemon-green'
                                                        : 'from-lemon-green to-primary-orange'
                                                } rounded-full flex items-center justify-center mr-4`}
                                            >
                                                <service.icon className="text-2xl text-white" />
                                            </div>
                                            <div>
                                                <span
                                                    className={`text-sm font-semibold ${
                                                        service.color === 'orange'
                                                            ? 'text-primary-orange'
                                                            : 'text-lemon-green'
                                                    } uppercase`}
                                                >
                                                    {t(`services.items.${service.key}.category`)}
                                                </span>
                                                <h2 className="text-3xl font-bold text-dark-blue">
                                                    {t(`services.items.${service.key}.title`)}
                                                </h2>
                                            </div>
                                        </div>
                                        <p className="mb-6 text-lg leading-relaxed text-gray-600">
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
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className={`inline-flex items-center ${
                                                service.color === 'orange'
                                                    ? 'btn-orange'
                                                    : 'btn-green'
                                            } text-white px-6 py-3 rounded-full font-semibold`}
                                        >
                                            <Phone className="mr-2" size={16} />
                                            {t('common.getQuote')}
                                        </Link>
                                    </div>
                                    <div
                                        className={`rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                                    >
                                        <motion.img
                                            src={service.image}
                                            alt={t(`services.items.${service.key}.title`)}
                                            className="object-cover w-full h-80"
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
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                                {t('services.process.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
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
                                        <div
                                            className={`w-24 h-24 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto shadow-lg ${
                                                index % 2 === 0
                                                    ? 'from-primary-orange to-lemon-green'
                                                    : 'from-lemon-green to-primary-orange'
                                            }`}
                                        >
                                            <span className="text-4xl font-bold text-white">
                                                {step.number}
                                            </span>
                                        </div>
                                        {index < processSteps.length - 1 && (
                                            <div className="absolute right-0 hidden top-12 lg:block">
                                                <ArrowRight className="text-4xl text-gray-300" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-dark-blue">
                                        {t(`services.process.steps.${step.key}.title`)}
                                    </h3>
                                    <p className="text-gray-600">
                                        {t(`services.process.steps.${step.key}.description`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Service Guarantees */}
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
                                {t('services.guarantees.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
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
                                    className="relative p-8 overflow-hidden bg-white shadow-lg rounded-2xl hover-lift"
                                    variants={itemVariants}
                                >
                                    <div
                                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                                            guarantee.color === 'orange'
                                                ? 'from-primary-orange to-lemon-green'
                                                : 'from-lemon-green to-primary-orange'
                                        }`}
                                    />
                                    <div
                                        className={`w-16 h-16 ${
                                            guarantee.color === 'orange'
                                                ? 'bg-primary-orange/10'
                                                : 'bg-lemon-green/10'
                                        } rounded-full flex items-center justify-center mb-6`}
                                    >
                                        <guarantee.icon
                                            className={`${
                                                guarantee.color === 'orange'
                                                    ? 'text-primary-orange'
                                                    : 'text-lemon-green'
                                            } text-3xl`}
                                        />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-dark-blue">
                                        {t(`services.guarantees.items.${guarantee.key}.title`)}
                                    </h3>
                                    <p className="leading-relaxed text-gray-600">
                                        {t(
                                            `services.guarantees.items.${guarantee.key}.description`
                                        )}
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
                    gradient="from-lemon-green to-primary-orange"
                    buttons={[
                        {
                            text: t('common.contactUs'),
                            to: '/contact',
                            icon: 'Phone',
                            className: 'bg-white text-lemon-green hover:bg-gray-50'
                        },
                        {
                            text: t('common.ourProjects'),
                            to: '/realisations',
                            icon: 'FolderOpen',
                            className: 'bg-dark-blue text-white hover:bg-blue-900'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Services
