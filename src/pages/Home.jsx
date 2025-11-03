// src/pages/Home.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Phone, Box } from 'lucide-react'
import Counter from '../components/ui/Counter'
import { products, services, stats, testimonials } from '../constants/home'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'

const Home = () => {
    const { t } = useTranslation()

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative flex items-center min-h-screen pt-20 bg-gradient-to-br from-dark-blue via-dark-blue to-primary-orange">
                <div className="container px-4 py-20 mx-auto lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-primary-orange/20 text-primary-orange"
                            >
                                {t('home.hero.badge')}
                            </motion.span>
                            <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
                                {t('home.hero.title')}
                            </h1>
                            <p className="mb-8 text-xl leading-relaxed text-gray-200">
                                {t('home.hero.subtitle')}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition rounded-full shadow-lg bg-gradient-to-r from-primary-orange to-lemon-green hover:shadow-2xl hover:scale-105"
                                >
                                    <Phone className="mr-2" size={20} />
                                    {t('home.hero.ctaQuote')}
                                </Link>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center px-8 py-4 text-lg font-bold transition bg-white rounded-full shadow-lg text-dark-blue hover:shadow-2xl hover:scale-105"
                                >
                                    <Box className="mr-2" size={20} />
                                    {t('home.hero.ctaProducts')}
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=600"
                                    alt={t('home.hero.images.equipment')}
                                    className="object-cover w-full h-64 shadow-2xl rounded-2xl"
                                />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600"
                                    alt={t('home.hero.images.generator')}
                                    className="object-cover w-full h-64 mt-8 shadow-2xl rounded-2xl"
                                />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600"
                                    alt={t('home.hero.images.site')}
                                    className="object-cover w-full h-64 shadow-2xl rounded-2xl"
                                />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="https://images.unsplash.com/photo-1621905252472-9b6e78c09a0f?w=600"
                                    alt={t('home.hero.images.maintenance')}
                                    className="object-cover w-full h-64 mt-8 shadow-2xl rounded-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-orange to-lemon-green">
                                    <stat.icon className="text-white" size={32} />
                                </div>
                                <h3 className="mb-2 text-4xl font-bold text-dark-blue">
                                    <Counter end={stat.number} duration={2} suffix={stat.suffix} />
                                </h3>
                                <p className="text-gray-600">{t(`home.stats.${stat.key}`)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-light-gray">
                <div className="container px-4 mx-auto lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-primary-orange/10 text-primary-orange">
                            {t('home.services.badge')}
                        </span>
                        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                            {t('home.services.title')}
                        </h2>
                        <p className="max-w-3xl mx-auto text-xl text-gray-600">
                            {t('home.services.subtitle')}
                        </p>
                    </motion.div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="p-8 transition-all bg-white shadow-lg rounded-2xl hover:shadow-2xl"
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6`}
                                >
                                    <service.icon className="text-white" size={28} />
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-dark-blue">
                                    {t(`home.services.items.${service.key}.title`)}
                                </h3>
                                <p className="mb-6 text-gray-600">
                                    {t(`home.services.items.${service.key}.description`)}
                                </p>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center font-semibold transition-all text-primary-orange hover:gap-2"
                                >
                                    {t('home.services.learnMore')}{' '}
                                    <ArrowRight size={18} className="ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-lemon-green/10 text-lemon-green">
                            {t('home.products.badge')}
                        </span>
                        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                            {t('home.products.title')}
                        </h2>
                        <p className="max-w-3xl mx-auto text-xl text-gray-600">
                            {t('home.products.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 transition-all cursor-pointer bg-light-gray rounded-2xl hover:shadow-xl"
                            >
                                <div
                                    className={`w-16 h-16 ${index % 2 === 0 ? 'bg-primary-orange/10' : 'bg-lemon-green/10'} rounded-full flex items-center justify-center mb-6`}
                                >
                                    <product.icon
                                        className={
                                            index % 2 === 0
                                                ? 'text-primary-orange'
                                                : 'text-lemon-green'
                                        }
                                        size={28}
                                    />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-dark-blue">
                                    {t(`home.products.items.${product.key}.name`)}
                                </h3>
                                <p className="mb-4 text-gray-600">
                                    {t(`home.products.items.${product.key}.count`)}
                                </p>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center font-semibold transition-all text-primary-orange hover:gap-2"
                                >
                                    {t('home.products.discover')}{' '}
                                    <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <Link
                            to="/products"
                            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition rounded-full shadow-lg bg-gradient-to-r from-primary-orange to-lemon-green hover:shadow-2xl hover:scale-105"
                        >
                            {t('home.products.cta')} <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gradient-to-br from-dark-blue to-primary-orange">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-white rounded-full bg-white/20">
                                {t('home.whyChooseUs.badge')}
                            </span>
                            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                                {t('home.whyChooseUs.title')}
                            </h2>
                            <p className="mb-8 text-xl leading-relaxed text-white/90">
                                {t('home.whyChooseUs.subtitle')}
                            </p>
                            <div className="space-y-4">
                                {(() => {
                                    const benefits = t('home.whyChooseUs.benefits', {
                                        returnObjects: true
                                    })
                                    // Check if benefits is an array before mapping
                                    if (Array.isArray(benefits)) {
                                        return benefits.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <CheckCircle
                                                    className="text-lemon-green"
                                                    size={24}
                                                />
                                                <span className="text-lg text-white">{item}</span>
                                            </motion.div>
                                        ))
                                    } else {
                                        // Fallback if benefits is not an array
                                        return (
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                className="flex items-center space-x-3"
                                            >
                                                <CheckCircle
                                                    className="text-lemon-green"
                                                    size={24}
                                                />
                                                <span className="text-lg text-white">
                                                    {benefits}
                                                </span>
                                            </motion.div>
                                        )
                                    }
                                })()}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=800"
                                alt={t('home.whyChooseUs.imageAlt')}
                                className="shadow-2xl rounded-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-light-gray">
                <div className="container px-4 mx-auto lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-primary-orange/10 text-primary-orange">
                            {t('home.testimonials.badge')}
                        </span>
                        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                            {t('home.testimonials.title')}
                        </h2>
                        <p className="max-w-3xl mx-auto text-xl text-gray-600">
                            {t('home.testimonials.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="p-8 transition-all bg-white shadow-lg rounded-2xl hover:shadow-2xl"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="fill-current text-primary-orange"
                                            size={20}
                                        />
                                    ))}
                                </div>
                                <p className="mb-6 italic leading-relaxed text-gray-600">
                                    "{t(`home.testimonials.items.${testimonial.key}.text`)}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-dark-blue">
                                        {t(`home.testimonials.items.${testimonial.key}.name`)}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {t(`home.testimonials.items.${testimonial.key}.company`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA
                title={t('home.cta.title')}
                description={t('home.cta.description')}
                buttons={[
                    {
                        text: t('common.contactUs'),
                        to: '/contact',
                        icon: 'Phone',
                        className: 'bg-white text-primary-orange hover:bg-gray-50'
                    },
                    {
                        text: t('common.ourServices'),
                        to: '/services',
                        icon: 'Wrench',
                        className: 'bg-dark-blue text-white hover:bg-blue-900'
                    }
                ]}
            />
        </div>
    )
}

export default Home
