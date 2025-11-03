// src/pages/Products.jsx
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle, Boxes, Download } from 'lucide-react'
import { additionalProducts, benefits, products } from '../constants/products'
import PageHeader from '../components/ui/PageHeader'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'

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
                <section className="py-20 bg-light-gray">
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
                                    className="mb-20 scroll-mt-20"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                >
                                    <div
                                        className={`grid lg:grid-cols-2 gap-12 items-center ${
                                            product.reverse ? 'lg:flex-row-reverse' : ''
                                        }`}
                                    >
                                        {/* Image Section */}
                                        <div
                                            className={`product-card rounded-2xl overflow-hidden shadow-xl ${
                                                product.reverse ? 'lg:order-2' : ''
                                            }`}
                                        >
                                            <motion.img
                                                src={product.image}
                                                alt={t(`products.items.${product.key}.title`)}
                                                className="object-cover w-full h-96"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </div>

                                        {/* Content Section */}
                                        <div className={product.reverse ? 'lg:order-1' : ''}>
                                            <div
                                                className={`inline-flex items-center ${product.badge.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}
                                            >
                                                <BadgeIcon className="mr-2" size={16} />
                                                {t(`products.items.${product.key}.badge`)}
                                            </div>

                                            <h2 className="mb-4 text-4xl font-bold text-dark-blue">
                                                <Icon
                                                    className={`inline mr-3 ${
                                                        product.color === 'orange'
                                                            ? 'text-primary-orange'
                                                            : 'text-lemon-green'
                                                    }`}
                                                    size={32}
                                                />
                                                {t(`products.items.${product.key}.title`)}
                                            </h2>

                                            <p className="mb-6 text-lg leading-relaxed text-gray-600">
                                                {t(`products.items.${product.key}.description`)}
                                            </p>

                                            <ul className="mb-8 space-y-3">
                                                {features.map((feature, featureIndex) => (
                                                    <li
                                                        key={featureIndex}
                                                        className="flex items-start"
                                                    >
                                                        <CheckCircle
                                                            className={`${
                                                                featureIndex % 2 === 0
                                                                    ? 'text-lemon-green'
                                                                    : 'text-primary-orange'
                                                            } text-xl mr-3 mt-1 flex-shrink-0`}
                                                        />
                                                        <span className="text-gray-700">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                to="/contact"
                                                className={`inline-flex items-center ${
                                                    product.color === 'orange'
                                                        ? 'btn-orange'
                                                        : 'btn-green'
                                                } text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all`}
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
                            className="p-8 text-center text-white bg-gradient-to-br from-dark-blue to-gray-900 rounded-3xl lg:p-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="max-w-4xl mx-auto">
                                <Boxes className="mx-auto mb-6 text-6xl text-primary-orange" />
                                <h2 className="mb-6 text-4xl font-bold">
                                    {t('products.additional.title')}
                                </h2>
                                <p className="mb-8 text-xl leading-relaxed text-gray-300">
                                    {t('products.additional.description')}
                                </p>

                                <div className="grid gap-6 mb-8 md:grid-cols-3">
                                    {additionalProducts.map((product, index) => {
                                        const Icon = product.icon
                                        return (
                                            <motion.div
                                                key={product.name}
                                                className="p-6 transition-colors bg-white/10 rounded-xl hover:bg-white/20"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Icon
                                                    className={`text-3xl ${
                                                        index % 2 === 0
                                                            ? 'text-lemon-green'
                                                            : 'text-primary-orange'
                                                    } mb-3 mx-auto`}
                                                />
                                                <h3 className="mb-2 text-lg font-bold">
                                                    {t(
                                                        `products.additional.items.${product.key}.name`
                                                    )}
                                                </h3>
                                                <p className="text-sm text-gray-400">
                                                    {t(
                                                        `products.additional.items.${product.key}.description`
                                                    )}
                                                </p>
                                            </motion.div>
                                        )
                                    })}
                                </div>

                                <Link
                                    to="/contact"
                                    className="inline-block px-10 py-5 text-lg font-bold text-white transition-all rounded-full shadow-2xl btn-orange hover:shadow-3xl"
                                >
                                    <Download className="inline mr-2" size={20} />
                                    {t('products.additional.cta')}
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us */}
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
                                        className="p-8 text-center hover-lift bg-light-gray rounded-2xl"
                                        variants={itemVariants}
                                    >
                                        <div
                                            className={`w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-6 ${
                                                benefit.color === 'orange'
                                                    ? 'from-primary-orange to-lemon-green'
                                                    : 'from-lemon-green to-primary-orange'
                                            }`}
                                        >
                                            <Icon className="text-3xl text-white" />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-dark-blue">
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
                            className: 'bg-dark-blue text-white hover:bg-blue-900'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Products
