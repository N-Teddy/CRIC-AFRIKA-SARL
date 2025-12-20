// src/pages/Contact.jsx
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Phone, MessageCircle } from 'lucide-react'
import { contactInfo, faqs, socialMedia } from '../constants/contact'
import PageHeader from '../components/ui/PageHeader'
import { location, WhatsAppNumber } from '../constants'
import CTA from '../components/ui/CTA'
import ContactForm from '../components/forms/ContactForm'
import { useTranslation } from '../context/TranslationContext'

const Contact = () => {
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
                <title>{t('contact.title')} - CRIC Africa SARL</title>
                <meta name="description" content={t('contact.metaDescription')} />
                <meta name="keywords" content={t('contact.metaKeywords')} />
                <meta property="og:title" content={t('contact.title')} />
                <meta property="og:description" content={t('contact.metaDescription')} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://cricafrica.com/contact" />
            </Helmet>

            <div className="pt-20">
                {/* Page Header */}
                <PageHeader
                    title={t('contact.title')}
                    subtitle={t('contact.subtitle')}
                    breadcrumbs={[t('common.contactUs')]}
                />

                {/* Contact Info Cards */}
                <section className="relative py-16 overflow-hidden bg-warm-gradient">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-16 left-0 w-48 h-48 rounded-full bg-[#ff8c42]/20 blur-3xl" aria-hidden="true" />
                        <div className="absolute bottom-0 right-4 w-56 h-56 rounded-full bg-[#a8d05f]/25 blur-3xl" aria-hidden="true" />
                    </div>
                    <div className="container relative px-4 mx-auto lg:px-8">
                        <motion.div
                            className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon
                                return (
                                    <motion.div
                                        key={info.title}
                                        className="p-6 text-center bg-white/85 backdrop-blur border border-white/60 rounded-2xl shadow-[0_20px_45px_rgba(43,47,51,0.12)]"
                                        variants={itemVariants}
                                    >
                                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#f9faf3]">
                                            <Icon
                                                className={
                                                    info.color === 'orange'
                                                        ? 'text-[#ff8c42]'
                                                        : 'text-[#a8d05f]'
                                                }
                                                size={20}
                                            />
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold text-[#222222]">
                                            {t(`contact.info.${info.key}.title`)}
                                        </h3>
                                        <div className="mb-4 space-y-1">
                                            {info.details.map((detail, i) => (
                                                <p key={i} className="text-sm text-[#6f6f6f]">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                        {info.action && (
                                            <a
                                                href={info.action.href}
                                                className={`inline-flex items-center justify-center px-4 py-2 mt-2 text-sm font-semibold rounded-full border ${
                                                    info.color === 'orange'
                                                        ? 'text-[#ff8c42] border-[#ff8c42]'
                                                        : 'text-[#a8d05f] border-[#a8d05f]'
                                                }`}
                                            >
                                                {t(`contact.info.${info.key}.action`)}
                                            </a>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        {/* Contact Form & Info */}
                        <motion.div
                            className="grid gap-12 lg:grid-cols-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            {/* Contact Form Component */}
                            <ContactForm />

                            {/* Additional Info */}
                            <div className="space-y-8">
                                {/* Quick Contact */}
                                <div className="relative p-8 text-white rounded-2xl bg-gradient-to-br from-[#2b2f33] via-[#1f2125] to-[#2b2f33] overflow-hidden">
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="mesh-overlay opacity-60" />
                                    </div>
                                    <div className="relative z-10">
                                    <h3 className="mb-4 text-2xl font-semibold">
                                        {t('contact.quickContact.title')}
                                    </h3>
                                    <p className="mb-6 text-white/90">
                                        {t('contact.quickContact.description')}
                                    </p>
                                    <div className="space-y-4">
                                        <a
                                            href={`tel:+237${WhatsAppNumber}`}
                                            className="flex items-center p-4 space-x-3 transition rounded-xl bg-white/10 hover:bg-white/20"
                                        >
                                            <Phone className="text-2xl" />
                                            <div>
                                                <p className="font-semibold">
                                                    {t('contact.quickContact.call')}
                                                </p>
                                                <p className="text-sm text-white/90">
                                                    +237{WhatsAppNumber}
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href={`https://wa.me/237${WhatsAppNumber}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center p-4 space-x-3 transition rounded-xl bg-white/10 hover:bg-white/20"
                                        >
                                            <MessageCircle className="text-2xl" />
                                            <div>
                                                <p className="font-semibold">
                                                    {t('contact.quickContact.whatsapp')}
                                                </p>
                                                <p className="text-sm text-white/90">
                                                    {t('contact.quickContact.chat')}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    </div>
                                </div>

                                {/* FAQ Quick Links */}
                                <div className="p-8 bg-white border rounded-2xl border-[#e1e1e1]">
                                    <h3 className="mb-4 text-2xl font-semibold text-[#222222]">
                                        {t('contact.faq.title')}
                                    </h3>
                                    <div className="space-y-4">
                                        {faqs.map((faq, index) => (
                                            <div
                                                key={faq.question}
                                                className={`border-l-4 pl-4 ${
                                                    index % 2 === 0
                                                        ? 'border-primary-orange'
                                                        : 'border-lemon-green'
                                                }`}
                                            >
                                                <h4 className="mb-1 text-base font-semibold text-[#222222]">
                                                    {t(`contact.faq.items.${faq.key}.question`)}
                                                </h4>
                                                <p className="text-sm text-[#6f6f6f]">
                                                    {t(`contact.faq.items.${faq.key}.answer`)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Placeholder for future social media section */}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Map Section */}
                <section id="map" className="py-16 bg-gradient-to-b from-[#f9faf4] via-white to-[#fff2e8]">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-semibold lg:text-5xl text-[#222222]">
                                {t('contact.location.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-[#6f6f6f]">
                                {t('contact.location.subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="overflow-hidden border rounded-3xl border-white/60 shadow-[0_25px_60px_rgba(43,47,51,0.1)] bg-white"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <iframe
                                src={location}
                                width="100%"
                                height="500"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={t('contact.location.mapTitle')}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title={t('contact.cta.title')}
                    description={t('contact.cta.description')}
                    backgroundClass="bg-gradient-to-r from-[#2b2f33] via-[#1f2125] to-[#2b2f33]"
                    textColor="text-white"
                    className="relative overflow-hidden"
                    buttons={[
                        {
                            text: t('contact.cta.callNow'),
                            href: `tel:+237 ${WhatsAppNumber}`,
                            icon: 'Phone',
                            className: 'bg-white text-[#222222] hover:bg-[#f5f5f0]'
                        },
                        {
                            text: t('common.ourProducts'),
                            to: '/products',
                            icon: 'Box',
                            className: 'bg-[#ff8c42] text-white hover:bg-[#f7792a]'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Contact
