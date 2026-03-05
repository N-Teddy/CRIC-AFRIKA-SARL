// src/pages/Products.jsx
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle, Boxes, Download } from 'lucide-react'
import { additionalProducts, benefits, products } from '../constants/products'
import PageHeader from '../components/ui/PageHeader'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'
import { handleImageError } from '../utils/media'

const Products = () => {
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

    // Helper function to safely get array from translations
    const getTranslatedArray = key => {
        const result = t(key, { returnObjects: true })
        return Array.isArray(result) ? result : []
    }

    return (
        <>
            <Helmet>
                <title>{t('products.title')} - CRIC Africa SARL</title>
                <meta name="description" content={t('products.metaDescription')} />
                <meta name="keywords" content={t('products.metaKeywords')} />
                <meta property="og:title" content={t('products.title')} />
                <meta property="og:description" content={t('products.metaDescription')} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://cricafrica.com/products" />
            </Helmet>

            <div className="pt-20">
                {/* Page Header */}
                <PageHeader
                    title={t('products.title')}
                    subtitle={t('products.subtitle')}
                    breadcrumbs={[t('common.ourProducts')]}
                />

                {/* Products Grid */}
                <section className="py-20 bg-surface">
                    <div className="container px-4 mx-auto lg:px-8">
                        {products.map((product, index) => {
                            const Icon = product.icon
                            const BadgeIcon = product.badge.icon
                            const features = getTranslatedArray(
                                `products.items.${product.key}.features`
                            )

                            return (
                                <motion.div
                                    key={product.id}
                                    id={product.id}
                                    className="mb-16 scroll-mt-24"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, delay: index * 0.05 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                >
                                    <div
                                        className={`grid lg:grid-cols-2 gap-12 items-center ${product.reverse ? 'lg:flex-row-reverse' : ''
                                            }`}
                                    >
                                        {/* Image Section */}
                                        <div
                                            className={`relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-sm ${product.reverse ? 'lg:order-2' : ''
                                                }`}
                                        >
                                            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]" />
                                            <motion.img
                                                src={product.image}
                                                alt={t(`products.items.${product.key}.title`)}
                                                className="relative z-10 object-cover w-full h-[420px] rounded-[28px]"
                                                loading="lazy"
                                                onError={handleImageError}
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>

                                        {/* Content Section */}
                                        <div className={product.reverse ? 'lg:order-1' : ''}>
                                            <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold tracking-wide text-primary uppercase rounded-[var(--radius-sm)] border border-primary/30 bg-primary/10">
                                                <BadgeIcon className="mr-2" size={16} />
                                                {t(`products.items.${product.key}.badge`)}
                                            </div>

                                            <h2 className="mb-4 text-3xl font-bold text-ink">
                                                <Icon
                                                    className={`inline mr-3 ${product.color === 'orange'
                                                        ? 'text-primary'
                                                        : 'text-secondary'
                                                        }`}
                                                    size={32}
                                                />
                                                {t(`products.items.${product.key}.title`)}
                                            </h2>

                                            <p className="mb-6 text-base leading-relaxed text-ink-muted">
                                                {t(`products.items.${product.key}.description`)}
                                            </p>

                                            <ul className="mb-8 space-y-3">
                                                {features.map((feature, featureIndex) => (
                                                    <li
                                                        key={featureIndex}
                                                        className="flex items-start"
                                                    >
                                                        <CheckCircle
                                                            className={`${featureIndex % 2 === 0
                                                                ? 'text-lemon-green'
                                                                : 'text-primary-orange'
                                                                } text-xl mr-3 mt-1 flex-shrink-0`}
                                                        />
                                                        <span className="text-ink-muted">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                to="/contact"
                                                className={`mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-colors duration-150 ${product.color === 'orange'
                                                    ? 'bg-primary text-white hover:bg-primary/90'
                                                    : 'bg-dark text-white hover:bg-dark/90'
                                                    }`}
                                            >
                                                <Mail className="mr-2" size={20} />
                                                {t('common.getQuote')}
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}

                        {/* Additional Products Section */}
                        <motion.div
                            className="p-10 text-center bg-white/90 backdrop-blur border rounded-3xl border-white/60 shadow-[0_30px_70px_rgba(43,47,51,0.12)]"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <div className="max-w-4xl mx-auto">
                                <Boxes className="mx-auto mb-6 text-5xl text-primary" />
                                <h2 className="mb-4 text-3xl font-bold text-ink">
                                    {t('products.additional.title')}
                                </h2>
                                <p className="mb-8 text-base text-ink-muted">
                                    {t('products.additional.description')}
                                </p>

                                <div className="grid gap-4 mb-8 md:grid-cols-3">
                                    {additionalProducts.map(product => {
                                        const Icon = product.icon
                                        return (
                                            <div
                                                key={product.name}
                                                className="p-5 text-left border rounded-2xl border-white/60 bg-white/85 backdrop-blur"
                                            >
                                                <Icon className="text-primary" size={20} />
                                                <h3 className="mt-4 text-base font-bold text-ink">
                                                    {t(
                                                        `products.additional.items.${product.key}.name`
                                                    )}
                                                </h3>
                                                <p className="text-sm text-ink-muted">
                                                    {t(
                                                        `products.additional.items.${product.key}.description`
                                                    )}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>

                                <Link to="/contact" className="btn-primary">
                                    <Download className="inline mr-2" size={18} />
                                    {t('products.additional.cta')}
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-surface-warm">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-h2 font-bold text-ink">
                                {t('products.whyChooseUs.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
                                {t('products.whyChooseUs.subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                const benefitKeys = [
                                    'quality',
                                    'delivery',
                                    'installation',
                                    'support'
                                ]
                                const currentKey = benefitKeys[index]

                                return (
                                    <motion.div
                                        key={benefit.title}
                                        className="p-8 text-center hover-lift bg-white/85 backdrop-blur border border-white/60 rounded-[26px] shadow-[0_20px_45px_rgba(43,47,51,0.1)]"
                                        variants={itemVariants}
                                    >
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-white shadow-inner border border-white/70">
                                            <Icon
                                                className={
                                                    index % 2 === 0 ? 'text-primary' : 'text-secondary'
                                                }
                                                size={26}
                                            />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-ink">
                                            {t(`products.benefits.${currentKey}.title`)}
                                        </h3>
                                        <p className="text-gray-600">
                                            {t(`products.benefits.${currentKey}.description`)}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title={t('products.cta.title')}
                    description={t('products.cta.description')}
                    backgroundClass="bg-primary"
                    textColor="text-white"
                    className="relative overflow-hidden"
                    buttons={[
                        {
                            text: t('products.cta.contactExpert'),
                            to: '/contact',
                            icon: 'Phone',
                            className: 'bg-white text-primary-orange hover:bg-gray-50'
                        },
                        {
                            text: t('products.cta.downloadCatalog'),
                            to: '/contact',
                            icon: 'Download',
                            className: 'bg-dark text-white hover:bg-dark/90'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Products
