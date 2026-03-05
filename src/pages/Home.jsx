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
import { Star } from 'lucide-react'
import { CheckCircle } from 'lucide-react'

const Home = () => {
    const { t, isLoading } = useTranslation()
    const benefits = t('home.whyChooseUs.benefits', { returnObjects: true })
    const safeBenefits = Array.isArray(benefits) ? benefits : []

    const processKeys = ['import', 'installation', 'maintenance']
    const heroFeatureImage = heroImages[0] || fallbackImage

    return (
        <div className="overflow-hidden bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 bg-surface-muted overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(var(--color-dark) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="container mx-auto relative z-10">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-primary uppercase bg-white border border-border rounded-full shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                {t('home.hero.badge')}
                            </div>

                            <h1 className="text-4xl font-extrabold leading-[1.1] text-ink lg:text-7xl mb-6">
                                {t('home.hero.title').split(' ').map((word, i) => (
                                    <span key={i} className={i === 0 ? 'text-primary' : ''}>{word} </span>
                                ))}
                            </h1>

                            <p className="max-w-xl text-lg text-ink-muted leading-relaxed mb-10">
                                {t('home.hero.subtitle')}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-16">
                                <Link to="/contact" className="btn-primary px-8 py-4 shadow-lg shadow-primary/20">
                                    <Phone className="mr-3" size={20} />
                                    {t('home.hero.ctaQuote')}
                                </Link>
                                <Link to="/products" className="btn-outline px-8 py-4 bg-white">
                                    <Box className="mr-3" size={20} />
                                    {t('home.hero.ctaProducts')}
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border">
                                {stats.map((stat, index) => (
                                    <div key={stat.key} className="space-y-1">
                                        <div className="text-3xl font-bold text-ink flex items-baseline">
                                            <Counter end={stat.number} duration={2} />
                                            <span className="text-secondary ml-0.5">{stat.suffix || '+'}</span>
                                        </div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">
                                            {t(`home.stats.${stat.key}`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[var(--radius-md)] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src={heroFeatureImage}
                                    alt="CRIC Africa Industrial"
                                    className="w-full h-[500px] object-cover"
                                    onError={handleImageError}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue/60 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-[var(--radius-md)] border border-white/20">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-secondary rounded-[var(--radius-sm)] text-white shadow-lg">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">{t('home.whyChooseUs.title')}</p>
                                            <p className="text-white/70 text-sm">Industrial Excellence & Safety First</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-4 block">
                                {t('home.services.badge')}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-ink">
                                {t('home.services.title')}
                            </h2>
                        </div>
                        <p className="text-ink-muted text-lg max-w-md">
                            {t('home.services.subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.key}
                                whileHover={{ y: -8 }}
                                className="group p-8 rounded-[var(--radius-md)] border border-border bg-white transition-all hover:shadow-xl hover:border-primary/20"
                            >
                                <div className="w-14 h-14 mb-8 rounded-[var(--radius-sm)] bg-surface-muted border border-border flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-ink mb-4">
                                    {t(`home.services.items.${service.key}.title`)}
                                </h3>
                                <p className="text-ink-muted text-sm leading-relaxed mb-8">
                                    {t(`home.services.items.${service.key}.description`)}
                                </p>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80"
                                >
                                    {t('home.services.learnMore')}
                                    <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-corporate-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />

                <div className="container mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                            {t('home.products.badge')}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {t('home.products.title')}
                        </h2>
                        <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
                        <p className="text-white/60 text-lg">
                            {t('home.products.subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.key}
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-[var(--radius-md)] bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10"
                            >
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                        <product.icon size={24} className="text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                                        {t(`home.products.items.${product.key}.count`)}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{t(`home.products.items.${product.key}.name`)}</h3>
                                <Link to="/products" className="flex items-center text-sm font-semibold text-white/40 hover:text-white transition-colors group">
                                    {t('home.products.discover')}
                                    <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/products" className="btn-primary px-10 py-4">
                            {t('home.products.cta')}
                            <ArrowRight size={20} className="ml-3" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-surface-muted">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {safeBenefits.map((benefit, index) => (
                                    <div key={index} className="p-6 bg-white rounded-[var(--radius-md)] border border-border shadow-sm flex items-start gap-4">
                                        <div className={`p-2 rounded-[var(--radius-sm)] ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                                            <CheckCircle size={20} />
                                        </div>
                                        <p className="font-bold text-ink text-sm leading-tight">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                                {t('home.whyChooseUs.badge')}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-8">
                                {t('home.whyChooseUs.title')}
                            </h2>
                            <p className="text-ink-muted text-lg mb-10 leading-relaxed">
                                {t('home.whyChooseUs.subtitle')}
                            </p>

                            <div className="space-y-4">
                                {processKeys.map((key, index) => (
                                    <div key={key} className="flex items-center gap-6 p-4 bg-white rounded-[var(--radius-md)] border-l-4 border-l-secondary shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold">
                                            0{index + 1}
                                        </div>
                                        <h4 className="font-bold text-ink">{t(`home.services.items.${key}.title`)}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-4 block">
                            {t('home.testimonials.badge')}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6">
                            {t('home.testimonials.title')}
                        </h2>
                        <p className="text-ink-muted text-lg">
                            {t('home.testimonials.subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.key}
                                whileHover={{ y: -10 }}
                                className="relative p-10 rounded-[var(--radius-md)] bg-surface-muted border border-border group"
                            >
                                <div className="absolute -top-4 left-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                                    <span className="text-xl font-serif">“</span>
                                </div>
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className={i < testimonial.rating ? 'fill-primary text-primary' : 'text-border'} />
                                    ))}
                                </div>
                                <p className="text-ink leading-relaxed mb-10 italic">
                                    “{t(`home.testimonials.items.${testimonial.key}.text`)}”
                                </p>
                                <div className="flex items-center gap-4 pt-8 border-t border-border">
                                    <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-ink leading-none mb-1">{t(`home.testimonials.items.${testimonial.key}.name`)}</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">{t(`home.testimonials.items.${testimonial.key}.company`)}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA
                title={t('home.cta.title')}
                description={t('home.cta.description')}
                backgroundClass="bg-primary overflow-hidden relative"
                textColor="text-white"
                className="py-20"
                buttons={[
                    {
                        text: t('common.contactUs'),
                        to: '/contact',
                        icon: 'Phone',
                        className: 'bg-corporate-blue text-white hover:bg-corporate-blue/90 border-none'
                    },
                    {
                        text: t('common.ourServices'),
                        to: '/services',
                        icon: 'Wrench',
                        className: 'bg-white text-primary hover:bg-surface-muted border-none'
                    }
                ]}
            />
        </div>
    )
}

export default Home
