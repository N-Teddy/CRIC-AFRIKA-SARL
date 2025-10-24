// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Mail, AlertCircle } from 'lucide-react';
import { popularPages, quickLinks } from '../constants/not-found';
import CTA from '../components/ui/CTA';
import { Email, WhatsAppNumber } from '../constants';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen pt-20 bg-light-gray">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-dark-blue via-primary-orange to-lemon-green">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute rounded-full -top-20 -left-20 w-96 h-96 bg-white/5 blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [360, 180, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute rounded-full -bottom-20 -right-20 w-96 h-96 bg-white/5 blur-3xl"
                    />
                </div>

                <div className="container relative z-10 px-4 mx-auto lg:px-8">
                    <div className="text-center">
                        {/* 404 Animation */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                duration: 1
                            }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <AlertCircle className="text-white" size={120} strokeWidth={1.5} />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* 404 Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="text-9xl lg:text-[200px] font-black text-white mb-4 leading-none">
                                404
                            </h1>
                            <div className="w-32 h-2 mx-auto mb-8 bg-white rounded-full"></div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="mb-6 text-3xl font-bold text-white lg:text-5xl">
                                {t('notFound.hero.title')}
                            </h2>
                            <p className="mb-8 text-xl leading-relaxed text-white/90">
                                {t('notFound.hero.description')}
                            </p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center px-8 py-4 text-lg font-bold transition bg-white rounded-full shadow-lg text-primary-orange hover:shadow-2xl hover:scale-105"
                            >
                                <Home className="mr-2" size={20} />
                                {t('notFound.hero.buttons.home')}
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition rounded-full shadow-lg bg-dark-blue hover:shadow-2xl hover:scale-105"
                            >
                                <Mail className="mr-2" size={20} />
                                {t('notFound.hero.buttons.contact')}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-primary-orange/10 text-primary-orange">
                            {t('notFound.quickLinks.badge')}
                        </span>
                        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                            {t('notFound.quickLinks.title')}
                        </h2>
                        <p className="max-w-3xl mx-auto text-xl text-gray-600">
                            {t('notFound.quickLinks.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {quickLinks.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <Link
                                    to={item.link}
                                    className="block h-full p-8 text-center transition-all bg-light-gray rounded-2xl hover:shadow-2xl"
                                >
                                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="text-white" size={32} />
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold transition-colors text-dark-blue group-hover:text-primary-orange">
                                        {t(`notFound.quickLinks.items.${item.key}.title`)}
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        {t(`notFound.quickLinks.items.${item.key}.description`)}
                                    </p>
                                    <span className="inline-flex items-center font-semibold transition-all text-primary-orange group-hover:gap-2">
                                        {t('notFound.quickLinks.access')} <ArrowLeft className="ml-1 rotate-180" size={18} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <CTA
                title={t('notFound.help.title')}
                description={t('notFound.help.description')}
                icon="FileText"
                buttons={[
                    {
                        text: `+237 ${WhatsAppNumber}`,
                        href: `tel:+237 ${WhatsAppNumber}`,
                        icon: "Phone",
                        className: "bg-white text-primary-orange hover:bg-gray-50"
                    },
                    {
                        text: `${Email}`,
                        href: `mailto:${Email}`,
                        icon: "Mail",
                        className: "bg-dark-blue text-white hover:bg-blue-900"
                    }
                ]}
            />
        </div>
    );
};

export default NotFound;