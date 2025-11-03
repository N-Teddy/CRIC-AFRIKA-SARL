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
                <section className="py-20 bg-light-gray">
                    <div className="container px-4 mx-auto lg:px-8">
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
                                        className="relative p-8 overflow-hidden text-center bg-white contact-card rounded-2xl hover-lift"
                                        variants={itemVariants}
                                    >
                                        <div
                                            className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                                                info.color === 'orange'
                                                    ? 'from-primary-orange to-lemon-green'
                                                    : 'from-lemon-green to-primary-orange'
                                            }`}
                                        />
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-4 ${
                                                info.color === 'orange'
                                                    ? 'from-primary-orange to-lemon-green'
                                                    : 'from-lemon-green to-primary-orange'
                                            }`}
                                        >
                                            <Icon className="text-2xl text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-dark-blue">
                                            {t(`contact.info.${info.key}.title`)}
                                        </h3>
                                        <div className="mb-4 space-y-1">
                                            {info.details.map((detail, i) => (
                                                <p key={i} className="text-gray-600">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                        {info.action && (
                                            <a
                                                href={info.action.href}
                                                className={`inline-block mt-2 font-semibold hover:underline ${
                                                    info.color === 'orange'
                                                        ? 'text-primary-orange'
                                                        : 'text-lemon-green'
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Contact Form Component */}
                            <ContactForm />

                            {/* Additional Info */}
                            <div className="space-y-8">
                                {/* Quick Contact */}
                                <div className="p-8 text-white bg-gradient-to-br from-primary-orange to-lemon-green rounded-2xl">
                                    <h3 className="mb-4 text-2xl font-bold">
                                        {t('contact.quickContact.title')}
                                    </h3>
                                    <p className="mb-6 text-white/90">
                                        {t('contact.quickContact.description')}
                                    </p>
                                    <div className="space-y-4">
                                        <a
                                            href={`tel:+237${WhatsAppNumber}`}
                                            className="flex items-center p-4 space-x-3 transition bg-white/20 hover:bg-white/30 rounded-xl"
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
                                            className="flex items-center p-4 space-x-3 transition bg-white/20 hover:bg-white/30 rounded-xl"
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

                                {/* FAQ Quick Links */}
                                <div className="p-8 bg-white shadow-lg rounded-2xl">
                                    <h3 className="mb-4 text-2xl font-bold text-dark-blue">
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
                                                <h4 className="mb-1 font-bold text-dark-blue">
                                                    {t(`contact.faq.items.${faq.key}.question`)}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    {t(`contact.faq.items.${faq.key}.answer`)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Media */}
                                {/* <div className="p-8 bg-light-gray rounded-2xl">
                                    <h3 className="mb-4 text-2xl font-bold text-dark-blue">
                                        {t('contact.social.title')}
                                    </h3>
                                    <p className="mb-6 text-gray-600">
                                        {t('contact.social.description')}
                                    </p>
                                    <div className="flex space-x-4">
                                        {socialMedia.map((social, index) => {
                                            const Icon = social.icon
                                            return (
                                                <a
                                                    key={index}
                                                    href={social.href}
                                                    className={`w-12 h-12 bg-white ${social.color} ${social.textColor} hover:text-white rounded-full flex items-center justify-center transition shadow-md`}
                                                >
                                                    <Icon className="text-xl" />
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div> */}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Map Section */}
                <section id="map" className="py-20 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-12 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                                {t('contact.location.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
                                {t('contact.location.subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="overflow-hidden shadow-xl rounded-2xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
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
                    buttons={[
                        {
                            text: t('contact.cta.callNow'),
                            href: `tel:+237 ${WhatsAppNumber}`,
                            icon: 'Phone',
                            className: 'bg-white text-primary-orange hover:bg-gray-50'
                        },
                        {
                            text: t('common.ourProducts'),
                            to: '/products',
                            icon: 'Box',
                            className: 'bg-dark-blue text-white hover:bg-blue-900'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Contact
