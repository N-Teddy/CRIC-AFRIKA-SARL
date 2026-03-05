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
        <div className="min-h-screen pt-20 bg-surface">
            {/* Hero Section */}
            <section className="relative py-20 bg-surface-warm border-b border-border">
                <div className="container relative px-4 mx-auto lg:px-8">
                    <div className="text-center">
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
                            <h1 className="text-7xl font-bold text-ink">404</h1>
                            <div className="w-16 h-1 mx-auto mt-4 mb-6 bg-secondary" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="mb-4 text-3xl font-bold text-ink lg:text-4xl">
                                {t('notFound.hero.title')}
                            </h2>
                            <p className="mb-8 text-base leading-relaxed text-ink-muted">
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
                                className="btn-primary"
                            >
                                <Home className="mr-2" size={20} />
                                {t('notFound.hero.buttons.home')}
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-ink transition-all duration-150 border rounded-[var(--radius-sm)] border-border bg-white hover:border-ink/40 shadow-sm"
                            >
                                <Mail className="mr-2" size={20} />
                                {t('notFound.hero.buttons.contact')}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-16 bg-surface-warm">
                <div className="container px-4 mx-auto lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-semibold tracking-wide text-primary uppercase rounded-[var(--radius-sm)] border border-primary/30">
                            {t('notFound.quickLinks.badge')}
                        </span>
                        <h2 className="mb-4 text-h2 font-bold text-ink">
                            {t('notFound.quickLinks.title')}
                        </h2>
                        <p className="max-w-3xl mx-auto text-base text-ink-muted">
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
                                            className={item.color.includes('orange') ? 'text-primary' : 'text-secondary'}
                                            size={20}
                                        />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-ink">
                                        {t(`notFound.quickLinks.items.${item.key}.title`)}
                                    </h3>
                                    <p className="mb-4 text-sm text-ink-muted">
                                        {t(`notFound.quickLinks.items.${item.key}.description`)}
                                    </p>
                                    <span className="inline-flex items-center text-sm font-semibold text-primary">
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
                backgroundClass="bg-dark"
                textColor="text-white"
                className="relative overflow-hidden"
                buttons={[
                    {
                        text: `+237 ${WhatsAppNumber}`,
                        href: `tel:+237 ${WhatsAppNumber}`,
                        icon: 'Phone',
                        className: 'bg-white text-ink hover:bg-surface-muted'
                    },
                    {
                        text: `${Email}`,
                        href: `mailto:${Email}`,
                        icon: 'Mail',
                        className: 'bg-primary text-white hover:bg-primary/90'
                    }
                ]}
            />
        </div>
    )
}

export default NotFound
