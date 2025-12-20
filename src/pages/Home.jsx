// src/pages/Home.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Box, LineChart, Shield } from 'lucide-react'
import Counter from '../components/ui/Counter'
import { products, services, stats, testimonials } from '../constants/home'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'
import { clientLogos, heroImages, handleImageError } from '../utils/media'

const Home = () => {
    const { t } = useTranslation()
    const benefits = t('home.whyChooseUs.benefits', { returnObjects: true })
    const safeBenefits = Array.isArray(benefits) ? benefits : []

    const processKeys = ['import', 'installation', 'maintenance']
    const heroImageAlts = ['equipment', 'generator', 'site', 'maintenance']

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="pt-28 pb-16 bg-[#f5f5f0]">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="inline-flex items-center px-4 py-1 text-xs font-semibold tracking-wide text-[#ff8c42] uppercase rounded-full border border-[#ff8c42]/30 bg-white">
                                {t('home.hero.badge')}
                            </span>
                            <h1 className="mt-6 mb-4 text-4xl font-semibold leading-tight text-[#222222] lg:text-6xl">
                                {t('home.hero.title')}
                            </h1>
                            <p className="max-w-2xl text-lg text-[#4b4b4b]">
                                {t('home.hero.subtitle')}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link to="/contact" className="btn-green">
                                    <Phone className="mr-2" size={18} />
                                    {t('home.hero.ctaQuote')}
                                </Link>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#222222] transition-colors duration-150 rounded-full border border-[#222222]/10 bg-white hover:border-[#222222]/40"
                                >
                                    <Box className="mr-2" size={18} />
                                    {t('home.hero.ctaProducts')}
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-10 mt-10 border-t border-[#e1e1e1]">
                                {stats.map(stat => (
                                    <div key={stat.key}>
                                        <div className="text-3xl font-semibold text-[#222222]">
                                            <Counter
                                                end={stat.number}
                                                duration={1.2}
                                                suffix={stat.suffix || '+'}
                                            />
                                        </div>
                                        <p className="mt-1 text-sm text-[#6f6f6f]">
                                            {t(`home.stats.${stat.key}`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {heroImages.map((image, index) => (
                                <motion.div
                                    key={image}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.25, delay: index * 0.05 }}
                                    className={`overflow-hidden rounded-3xl border border-[#e1e1e1] ${
                                        index % 2 !== 0 ? 'mt-8 hidden sm:block' : ''
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={t(
                                            `home.hero.images.${heroImageAlts[index] || 'equipment'}`
                                        )}
                                        className="object-cover w-full h-64"
                                        loading="lazy"
                                        onError={handleImageError}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos */}
            <section className="py-10 bg-white border-b border-[#e1e1e1]">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
                        {clientLogos.map(logo => (
                            <div
                                key={logo.name}
                                className="flex items-center justify-center w-32 h-16 px-4 py-2 bg-white border rounded-xl border-[#e1e1e1]"
                            >
                                <img
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    className="object-contain h-8"
                                    loading="lazy"
                                    onError={handleImageError}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold tracking-wide text-[#ff8c42] uppercase rounded-full border border-[#ff8c42]/30 bg-[#fff8f3]">
                            {t('home.services.badge')}
                        </span>
                        <h2 className="mt-4 text-3xl font-semibold text-[#222222] lg:text-4xl">
                            {t('home.services.title')}
                        </h2>
                        <p className="max-w-2xl mx-auto mt-3 text-base text-[#6f6f6f]">
                            {t('home.services.subtitle')}
                        </p>
                    </div>
                    <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
                        {services.map(service => (
                            <div
                                key={service.key}
                                className="p-6 rounded-2xl border border-[#e1e1e1] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                            >
                                <div className="w-12 h-12 mb-4 rounded-full bg-[#e7efd5] flex items-center justify-center">
                                    <service.icon className="text-[#a8d05f]" size={22} />
                                </div>
                                <h3 className="text-xl font-semibold text-[#222222]">
                                    {t(`home.services.items.${service.key}.title`)}
                                </h3>
                                <p className="mt-2 text-sm text-[#6f6f6f]">
                                    {t(`home.services.items.${service.key}.description`)}
                                </p>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center mt-6 text-sm font-semibold text-[#222222]"
                                >
                                    {t('home.services.learnMore')}
                                    <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 bg-[#f5f5f0]">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="flex flex-col gap-4 text-center">
                        <span className="inline-flex items-center justify-center self-center px-4 py-1 text-xs font-semibold tracking-wide text-[#a8d05f] uppercase rounded-full border border-[#a8d05f]/30 bg-white">
                            {t('home.products.badge')}
                        </span>
                        <h2 className="text-3xl font-semibold text-[#222222] lg:text-4xl">
                            {t('home.products.title')}
                        </h2>
                        <p className="max-w-2xl mx-auto text-base text-[#6f6f6f]">
                            {t('home.products.subtitle')}
                        </p>
                    </div>
                    <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <div
                                key={product.key}
                                className="p-6 text-left bg-white border rounded-2xl border-[#e1e1e1]"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-full bg-[#f9faf3] flex items-center justify-center">
                                        <product.icon
                                            className={index % 2 === 0 ? 'text-[#ff8c42]' : 'text-[#a8d05f]'}
                                            size={22}
                                        />
                                    </div>
                                    <span className="text-sm text-[#6f6f6f]">
                                        {t(`home.products.items.${product.key}.count`)}
                                    </span>
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-[#222222]">
                                    {t(`home.products.items.${product.key}.name`)}
                                </h3>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center mt-4 text-sm font-semibold text-[#222222]"
                                >
                                    {t('home.products.discover')}
                                    <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link to="/products" className="btn-orange">
                            {t('home.products.cta')}
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <span className="inline-flex items-center px-4 py-1 text-xs font-semibold tracking-wide text-[#a8d05f] uppercase rounded-full border border-[#a8d05f]/30 bg-[#f9faf3]">
                                {t('home.whyChooseUs.badge')}
                            </span>
                            <h2 className="mt-4 text-3xl font-semibold text-[#222222] lg:text-4xl">
                                {t('home.whyChooseUs.title')}
                            </h2>
                            <p className="mt-3 text-base text-[#6f6f6f]">
                                {t('home.whyChooseUs.subtitle')}
                            </p>
                            <div className="flex flex-col gap-5 mt-8">
                                {processKeys.map(key => (
                                    <div key={key} className="flex items-start gap-3">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e7efd5]">
                                            <LineChart className="text-[#ff8c42]" size={18} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#222222]">
                                                {t(`home.services.items.${key}.title`)}
                                            </p>
                                            <p className="text-sm text-[#6f6f6f]">
                                                {t(`home.services.items.${key}.description`)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {safeBenefits.slice(0, 4).map((benefit, index) => (
                                <div
                                    key={benefit}
                                    className="p-5 border rounded-2xl border-[#e1e1e1] bg-[#f9faf3]"
                                >
                                    <Shield className="text-[#a8d05f]" size={18} />
                                    <p className="mt-4 text-sm text-[#222222]">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-[#f5f5f0]">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold tracking-wide text-[#ff8c42] uppercase rounded-full border border-[#ff8c42]/30 bg-white">
                            {t('home.testimonials.badge')}
                        </span>
                        <h2 className="mt-4 text-3xl font-semibold text-[#222222] lg:text-4xl">
                            {t('home.testimonials.title')}
                        </h2>
                        <p className="max-w-2xl mx-auto mt-3 text-base text-[#6f6f6f]">
                            {t('home.testimonials.subtitle')}
                        </p>
                    </div>
                    <div className="grid gap-6 mt-12 md:grid-cols-3">
                        {testimonials.map(testimonial => (
                            <div
                                key={testimonial.key}
                                className="h-full p-6 border rounded-2xl border-[#e1e1e1] bg-white"
                            >
                                <div className="flex mb-4 text-[#ff8c42]">
                                    {[...Array(testimonial.rating)].map((_, index) => (
                                        <span key={index} aria-hidden="true">
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-[#4b4b4b]">
                                    “{t(`home.testimonials.items.${testimonial.key}.text`)}”
                                </p>
                                <div className="mt-6">
                                    <p className="text-sm font-semibold text-[#222222]">
                                        {t(`home.testimonials.items.${testimonial.key}.name`)}
                                    </p>
                                    <p className="text-xs text-[#6f6f6f]">
                                        {t(`home.testimonials.items.${testimonial.key}.company`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA
                title={t('home.cta.title')}
                description={t('home.cta.description')}
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
                        text: t('common.ourServices'),
                        to: '/services',
                        icon: 'Wrench',
                        className: 'bg-[#ff8c42] text-white hover:bg-[#f7792a]'
                    }
                ]}
            />
        </div>
    )
}

export default Home
