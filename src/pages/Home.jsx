// src/pages/Home.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Box, LineChart, Shield } from 'lucide-react'
import Counter from '../components/ui/Counter'
import Skeleton from '../components/ui/Skeleton'
import { products, services, stats, testimonials } from '../constants/home'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'
import { clientLogos, heroImages, handleImageError, fallbackImage } from '../utils/media'

const Home = () => {
    const { t, isLoading } = useTranslation()
    const benefits = t('home.whyChooseUs.benefits', { returnObjects: true })
    const safeBenefits = Array.isArray(benefits) ? benefits : []

    const processKeys = ['import', 'installation', 'maintenance']
    const heroFeatureImage = heroImages[0] || fallbackImage
    const heroSecondaryImages = heroImages.slice(1, 3)
    const accentDots = ['#386FD5', '#FF8C42', '#A8D05F', '#3C9C9C']

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative overflow-hidden pt-28 pb-20 bg-hero-gradient">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="mesh-overlay opacity-70" />
                    <div className="absolute -top-24 left-10 w-72 h-72 rounded-full bg-[#386fd5]/20 blur-3xl" />
                    <div className="absolute -bottom-32 right-8 w-80 h-80 rounded-full bg-[#ff8c42]/15 blur-3xl" />
                </div>
                <div className="container relative px-4 mx-auto lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2 }}
                        >
                            {isLoading ? (
                                <Skeleton className="w-32 h-4 mb-3" />
                            ) : (
                                <span className="inline-flex items-center px-4 py-1 text-xs font-semibold tracking-[0.3em] text-[#386fd5] uppercase rounded-full border border-[#386fd5]/30 bg-white/80">
                                    {t('home.hero.badge')}
                                </span>
                            )}
                            {isLoading ? (
                                <Skeleton className="w-2/3 h-10 mb-4" />
                            ) : (
                                <h1 className="mt-6 mb-4 text-4xl font-semibold leading-tight text-[#2b2f33] lg:text-6xl">
                                    {t('home.hero.title')}
                                </h1>
                            )}
                            {isLoading ? (
                                <Skeleton className="w-full h-4 mb-2" />
                            ) : (
                                <p className="max-w-2xl text-lg text-[#6c7075]">
                                    {t('home.hero.subtitle')}
                                </p>
                            )}
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link to="/contact" className="btn-green">
                                    <Phone className="mr-2" size={18} />
                                    {t('home.hero.ctaQuote')}
                                </Link>
                                <Link to="/products" className="btn-outline-accent">
                                    <Box className="mr-2" size={18} />
                                    {t('home.hero.ctaProducts')}
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-12 mt-12">
                                <div className="col-span-2 bg-gradient-to-r from-[#ff8c42]/20 via-white to-[#a8d05f]/20 border border-white/60 rounded-[32px] p-6 lg:col-span-3">
                                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                                {stats.map((stat, index) => (
                                    <div key={stat.key} className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="inline-flex w-2 h-2 rounded-full"
                                                style={{ backgroundColor: accentDots[index % accentDots.length] }}
                                            />
                                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6c7075]">
                                                {t(`home.stats.${stat.key}`)}
                                            </p>
                                        </div>
                                        <div className="text-3xl font-semibold text-[#2b2f33]">
                                            <Counter
                                                end={stat.number}
                                                duration={1.2}
                                                suffix={stat.suffix || '+'}
                                            />
                                        </div>
                                    </div>
                                ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative space-y-6">
                            <div className="relative p-8 text-white rounded-[32px] shadow-[0_35px_80px_rgba(43,47,51,.3)] bg-[#2b2f33] overflow-hidden mesh-overlay">
                                <img
                                    src={heroFeatureImage}
                                    alt={t('home.hero.images.equipment')}
                                    className="relative z-10 object-cover w-full h-72 rounded-[24px] border border-white/15"
                                    loading="lazy"
                                    onError={handleImageError}
                                />
                                <div className="relative z-20 grid grid-cols-2 gap-4 mt-8">
                                    {stats.slice(0, 2).map(metric => (
                                        <div
                                            key={metric.key}
                                            className="p-4 border border-white/15 rounded-2xl bg-white/5 backdrop-blur"
                                        >
                                            <p className="text-3xl font-semibold">
                                                {metric.number}
                                                {metric.suffix}
                                            </p>
                                            <p className="text-xs tracking-[0.2em] uppercase text-white/70">
                                                {t(`home.stats.${metric.key}`)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {heroSecondaryImages.map((image, index) => (
                                    <motion.div
                                        key={image}
                                        whileHover={{ rotate: 1.5, y: -4 }}
                                        className="p-4 border border-[#e2e4da] rounded-[24px] bg-white shadow-[0_20px_45px_rgba(43,47,51,0.08)]"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs font-semibold tracking-[0.3em] text-[#6c7075] uppercase">
                                                {t('home.products.badge')}
                                            </p>
                                            <span
                                                className="inline-flex w-2 h-2 rounded-full"
                                                style={{ backgroundColor: accentDots[(index + 1) % accentDots.length] }}
                                            />
                                        </div>
                                        <img
                                            src={image}
                                            alt={t('home.products.title')}
                                            className="object-cover w-full h-28 mt-3 rounded-2xl"
                                            loading="lazy"
                                            onError={handleImageError}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos */}
            <section className="py-10 bg-[#f4f5f0] border-y border-[#e2e4da]">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
                        {clientLogos.map(logo => (
                            <div
                                key={logo.name}
                                className="flex items-center justify-center w-32 h-16 px-4 py-2 bg-white border rounded-2xl border-white/60 shadow-[0_15px_35px_rgba(43,47,51,0.08)]"
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
            <section className="py-16 bg-warm-gradient">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold tracking-wide text-[#ff8c42] uppercase rounded-full border border-[#ff8c42]/30 bg-[#fff8f3]">
                            {t('home.services.badge')}
                        </span>
                        <h2 className="mt-4 text-3xl font-semibold text-[#2b2f33] lg:text-4xl">
                            {t('home.services.title')}
                        </h2>
                        <p className="max-w-2xl mx-auto mt-3 text-base text-[#6c7075]">
                            {t('home.services.subtitle')}
                        </p>
                    </div>
                    <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.key}
                                whileHover={{ y: -6 }}
                                className={`relative overflow-hidden rounded-[28px] border border-[#e2e4da] p-6 ${
                                    index % 2 === 0 ? 'bg-white' : 'bg-[#f9faf4]'
                                }`}
                            >
                                <div
                                    className={`absolute top-0 right-0 w-16 h-16 rounded-bl-[32px] opacity-70 ${
                                        index % 2 === 0
                                            ? 'bg-gradient-to-br from-[#ff8c42] to-[#a8d05f]'
                                            : 'bg-gradient-to-br from-[#386fd5] to-[#a8d05f]'
                                    }`}
                                />
                                <div
                                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                                        index % 2 === 0
                                            ? 'from-[#ff8c42] via-transparent to-[#a8d05f]'
                                            : 'from-[#a8d05f] via-transparent to-[#ff8c42]'
                                    }`}
                                />
                                <div className="relative w-12 h-12 mb-4 rounded-[18px] bg-[#f4f5f0] border border-white shadow-inner flex items-center justify-center">
                                    <service.icon
                                        className={index % 2 === 0 ? 'text-[#ff8c42]' : 'text-[#386fd5]'}
                                        size={22}
                                    />
                                </div>
                                <h3 className="relative text-xl font-semibold text-[#2b2f33]">
                                    {t(`home.services.items.${service.key}.title`)}
                                </h3>
                                <p className="relative mt-2 text-sm text-[#6c7075]">
                                    {t(`home.services.items.${service.key}.description`)}
                                </p>
                                <Link
                                    to="/services"
                                    className="relative inline-flex items-center mt-6 text-sm font-semibold text-[#2b2f33]"
                                >
                                    {t('home.services.learnMore')}
                                    <ArrowRight size={16} className="ml-1 text-[#386fd5]" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 bg-[#f4f5f0]">
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
                            <motion.div
                                key={product.key}
                                whileHover={{ y: -4 }}
                                className="p-6 text-left bg-white border border-[#e2e4da] rounded-[28px] shadow-[0_15px_40px_rgba(43,47,51,0.08)]"
                            >
                                <div
                                    className={`h-1 w-16 rounded-full ${
                                        index % 2 === 0 ? 'bg-[#ff8c42]' : 'bg-[#a8d05f]'
                                    }`}
                                />
                                <div className="flex items-center justify-between">
                                    <div
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border border-white ${
                                            index % 2 === 0
                                                ? 'bg-gradient-to-br from-[#ffe1ce] to-[#fff4ef]'
                                                : 'bg-gradient-to-br from-[#e1ebff] to-[#f6f9ff]'
                                        }`}
                                    >
                                        <product.icon
                                            className={index % 2 === 0 ? 'text-[#ff8c42]' : 'text-[#386fd5]'}
                                            size={22}
                                        />
                                    </div>
                                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#6c7075]">
                                        {t(`home.products.items.${product.key}.count`)}
                                    </span>
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-[#2b2f33]">
                                    {t(`home.products.items.${product.key}.name`)}
                                </h3>
                                <div className="mt-4 flex items-center justify-between text-sm text-[#6c7075]">
                                    <span>{t('home.products.discover')}</span>
                                    <ArrowRight size={16} className="text-[#386fd5]" />
                                </div>
                            </motion.div>
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
            <section className="py-16 bg-lemon-blend">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <span className="inline-flex items-center px-4 py-1 text-xs font-semibold tracking-wide text-[#a8d05f] uppercase rounded-full border border-[#a8d05f]/30 bg-[#f9faf3]">
                                {t('home.whyChooseUs.badge')}
                            </span>
                            <h2 className="mt-4 text-3xl font-semibold text-[#2b2f33] lg:text-4xl">
                                {t('home.whyChooseUs.title')}
                            </h2>
                            <p className="mt-3 text-base text-[#6c7075]">
                                {t('home.whyChooseUs.subtitle')}
                            </p>
                            <div className="flex flex-col gap-5 mt-8">
                                {processKeys.map((key, index) => (
                                    <div key={key} className="flex items-start gap-4 p-4 border border-[#e2e4da] rounded-2xl bg-[#f9faf3]">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-inner">
                                            <LineChart
                                                className={index % 2 === 0 ? 'text-[#386fd5]' : 'text-[#ff8c42]'}
                                                size={20}
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#2b2f33]">
                                                {t(`home.services.items.${key}.title`)}
                                            </p>
                                            <p className="text-sm text-[#6c7075]">
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
                                    className="p-5 border-l-4 rounded-2xl border-[#e2e4da] bg-white shadow-[0_15px_35px_rgba(43,47,51,0.06)]"
                                >
                                    <div className="flex items-center gap-3">
                                        <Shield
                                            className={index % 2 === 0 ? 'text-[#386fd5]' : 'text-[#a8d05f]'}
                                            size={18}
                                        />
                                        <p className="text-sm font-semibold text-[#2b2f33]">{benefit}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-warm-gradient">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="text-center">
                        <span className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold tracking-wide text-[#ff8c42] uppercase rounded-full border border-[#ff8c42]/30 bg-white">
                            {t('home.testimonials.badge')}
                        </span>
                        <h2 className="mt-4 text-3xl font-semibold text-[#2b2f33] lg:text-4xl">
                            {t('home.testimonials.title')}
                        </h2>
                        <p className="max-w-2xl mx-auto mt-3 text-base text-[#6c7075]">
                            {t('home.testimonials.subtitle')}
                        </p>
                    </div>
                    <div className="grid gap-6 mt-12 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.key}
                                whileHover={{ y: -6 }}
                                className="h-full p-6 bg-white border border-[#e2e4da] rounded-[28px] shadow-[0_20px_45px_rgba(43,47,51,0.08)]"
                            >
                                <div
                                    className={`h-1 w-20 rounded-full mb-4 ${
                                        index % 2 === 0 ? 'bg-[#ff8c42]' : 'bg-[#a8d05f]'
                                    }`}
                                />
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex gap-1 text-[#ff8c42]" aria-hidden="true">
                                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                                            <span key={starIndex}>★</span>
                                        ))}
                                    </div>
                                    <span
                                        className="inline-flex px-3 py-1 text-xs font-semibold tracking-[0.3em] uppercase rounded-full text-[#386fd5] bg-[#e7edff]"
                                        style={{ borderColor: '#386fd5' }}
                                    >
                                        {index + 1}
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-[#4b4b4b]">
                                    “{t(`home.testimonials.items.${testimonial.key}.text`)}”
                                </p>
                                <div className="pt-6 mt-6 border-t border-[#f0f1ea]">
                                    <p className="text-sm font-semibold text-[#2b2f33]">
                                        {t(`home.testimonials.items.${testimonial.key}.name`)}
                                    </p>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#6c7075]">
                                        {t(`home.testimonials.items.${testimonial.key}.company`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-3 mt-10">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === 0 ? 'bg-[#386fd5]' : 'bg-[#c5c8bc]'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTA
                title={t('home.cta.title')}
                description={t('home.cta.description')}
                backgroundClass="bg-gradient-to-r from-[#2b2f33] via-[#1f2125] to-[#2b2f33]"
                textColor="text-white"
                className="relative overflow-hidden"
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
