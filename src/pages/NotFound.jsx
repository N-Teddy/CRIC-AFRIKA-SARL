// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Mail, AlertCircle } from 'lucide-react'
import { quickLinks } from '../constants/not-found'
import CTA from '../components/ui/CTA'
import { Email, WhatsAppNumber } from '../constants'
import { motion } from 'framer-motion'
import { useTranslation } from '../context/TranslationContext'

const NotFound = () => {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-b from-[#f4f5f0] via-white to-[#fff2e8]">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-warm-gradient border-b border-white/50">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 right-10 w-72 h-72 rounded-full bg-[#386fd5]/15 blur-3xl" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#ff8c42]/15 blur-3xl" aria-hidden="true" />
                </div>
                <div className="container relative px-4 mx-auto lg:px-8">
                    <div className="text-center">
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-[#ff8c42]" />
                            <h1 className="text-7xl font-semibold text-[#222222]">404</h1>
                            <div className="w-16 h-1 mx-auto mt-4 mb-6 bg-[#a8d05f]" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="mb-4 text-3xl font-semibold text-[#222222] lg:text-4xl">
                                {t('notFound.hero.title')}
                            </h2>
                            <p className="mb-8 text-base leading-relaxed text-[#6f6f6f]">
                                {t('notFound.hero.description')}
                            </p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            <Link
                                to="/"
                                className="btn-orange"
                            >
                                <Home className="mr-2" size={20} />
                                {t('notFound.hero.buttons.home')}
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#2b2f33] transition-all duration-150 border rounded-full border-white/60 bg-white/90 hover:border-[#2b2f33]/40 shadow-[0_12px_30px_rgba(43,47,51,0.15)]"
                            >
                                <Mail className="mr-2" size={20} />
                                {t('notFound.hero.buttons.contact')}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-16 bg-lemon-blend">
                <div className="container px-4 mx-auto lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-semibold tracking-wide text-[#ff8c42] uppercase rounded-full border border-[#ff8c42]/30">
                            {t('notFound.quickLinks.badge')}
                        </span>
                        <h2 className="mb-4 text-4xl font-semibold lg:text-5xl text-[#222222]">
                            {t('notFound.quickLinks.title')}
                        </h2>
                        <p className="max-w-3xl mx-auto text-base text-[#6f6f6f]">
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
                                whileHover={{ y: -6 }}
                                className="group"
                            >
                                <Link
                                    to={item.link}
                                    className="block h-full p-6 text-center transition-all border rounded-2xl border-white/60 bg-white/85 backdrop-blur hover:-translate-y-1 shadow-[0_20px_45px_rgba(43,47,51,0.1)]"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-white">
                                        <item.icon
                                            className={item.color.includes('orange') ? 'text-[#ff8c42]' : 'text-[#a8d05f]'}
                                            size={20}
                                        />
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-[#222222]">
                                        {t(`notFound.quickLinks.items.${item.key}.title`)}
                                    </h3>
                                    <p className="mb-4 text-sm text-[#6f6f6f]">
                                        {t(`notFound.quickLinks.items.${item.key}.description`)}
                                    </p>
                                    <span className="inline-flex items-center text-sm font-semibold text-[#ff8c42]">
                                        {t('notFound.quickLinks.access')}{' '}
                                        <ArrowLeft className="ml-1 rotate-180" size={18} />
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
                backgroundClass="bg-gradient-to-r from-[#2b2f33] via-[#1f2125] to-[#2b2f33]"
                textColor="text-white"
                className="relative overflow-hidden"
                buttons={[
                    {
                        text: `+237 ${WhatsAppNumber}`,
                        href: `tel:+237 ${WhatsAppNumber}`,
                        icon: 'Phone',
                        className: 'bg-white text-[#222222] hover:bg-[#f5f5f0]'
                    },
                    {
                        text: `${Email}`,
                        href: `mailto:${Email}`,
                        icon: 'Mail',
                        className: 'bg-[#ff8c42] text-white hover:bg-[#f7792a]'
                    }
                ]}
            />
        </div>
    )
}

export default NotFound
