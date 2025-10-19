// src/pages/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
    Phone,
    Send,
    MessageCircle,
} from 'lucide-react'
import { contactInfo, faqs, socialMedia } from '../constants/contact'
import PageHeader from '../components/ui/PageHeader'
import { WhatsAppNumber } from '../constants'
import CTA from '../components/ui/CTA'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            consent: false
        })
    }

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
                <title>Contact - CRIC Africa SARL | Contactez-nous pour vos Projets Industriels</title>
                <meta
                    name="description"
                    content="Contactez CRIC Africa SARL pour vos projets industriels au Cameroun. Devis gratuit, conseil personnalisé."
                />
                <meta
                    name="keywords"
                    content="contact CRIC Africa, devis équipements industriels, installation maintenance Cameroun"
                />
                <meta property="og:title" content="Contact - CRIC Africa SARL" />
                <meta property="og:description" content="Contactez-nous pour vos projets industriels au Cameroun" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://cricafrica.com/contact" />
            </Helmet>

            <div className="pt-20">
                {/* Page Header */}
                <PageHeader
                    title="Nos Contact"
                    subtitle="Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets"
                    breadcrumbs={['Contact']}
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
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${info.color === 'orange'
                                            ? 'from-primary-orange to-lemon-green'
                                            : 'from-lemon-green to-primary-orange'
                                            }`} />
                                        <div className={`w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-4 ${info.color === 'orange'
                                            ? 'from-primary-orange to-lemon-green'
                                            : 'from-lemon-green to-primary-orange'
                                            }`}>
                                            <Icon className="text-2xl text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-dark-blue">{info.title}</h3>
                                        <div className="mb-4 space-y-1">
                                            {info.details.map((detail, i) => (
                                                <p key={i} className="text-gray-600">{detail}</p>
                                            ))}
                                        </div>
                                        {info.action && (
                                            <a
                                                href={info.action.href}
                                                className={`inline-block mt-2 font-semibold hover:underline ${info.color === 'orange' ? 'text-primary-orange' : 'text-lemon-green'
                                                    }`}
                                            >
                                                {info.action.label}
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
                            {/* Contact Form */}
                            <div className="p-8 bg-white shadow-lg rounded-2xl lg:p-12">
                                <h2 className="mb-2 text-3xl font-bold text-dark-blue">
                                    Envoyez-nous un <span className="text-primary-orange">Message</span>
                                </h2>
                                <p className="mb-8 text-gray-600">
                                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="block mb-2 font-semibold text-gray-700">Nom Complet *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-semibold text-gray-700">Entreprise</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                                                placeholder="Nom de votre entreprise"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="block mb-2 font-semibold text-gray-700">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-semibold text-gray-700">Téléphone *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                                                placeholder="+237 XXX XXX XXX"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-semibold text-gray-700">Sujet *</label>
                                        <select
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="devis">Demande de Devis</option>
                                            <option value="info-produit">Information sur un Produit</option>
                                            <option value="info-service">Information sur un Service</option>
                                            <option value="sav">Service Après-Vente</option>
                                            <option value="partenariat">Opportunité de Partenariat</option>
                                            <option value="recrutement">Candidature Spontanée</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-semibold text-gray-700">Message *</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                                            placeholder="Décrivez votre projet ou votre demande..."
                                        />
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            required
                                            checked={formData.consent}
                                            onChange={handleInputChange}
                                            name="consent"
                                            className="mt-1 mr-3"
                                        />
                                        <label htmlFor="consent" className="text-sm text-gray-600">
                                            J'accepte que mes données soient utilisées pour me recontacter concernant ma demande. *
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 text-lg font-bold text-white rounded-full btn-orange"
                                    >
                                        <Send className="inline mr-2" size={20} />
                                        Envoyer le Message
                                    </button>

                                    <p className="text-sm text-center text-gray-500">* Champs obligatoires</p>
                                </form>
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-8">
                                {/* Quick Contact */}
                                <div className="p-8 text-white bg-gradient-to-br from-primary-orange to-lemon-green rounded-2xl">
                                    <h3 className="mb-4 text-2xl font-bold">Besoin d'une Réponse Rapide ?</h3>
                                    <p className="mb-6 text-white/90">
                                        Notre équipe commerciale est disponible pour répondre à vos questions par téléphone ou MessageCircle
                                    </p>
                                    <div className="space-y-4">
                                        <a
                                            href={`tel:+237 ${WhatsAppNumber}`}
                                            className="flex items-center p-4 space-x-3 transition bg-white/20 hover:bg-white/30 rounded-xl"
                                        >
                                            <Phone className="text-2xl" />
                                            <div>
                                                <p className="font-semibold">Appelez-nous</p>
                                                <p className="text-sm text-white/90">+237 {WhatsAppNumber}</p>
                                            </div>
                                        </a>
                                        <a
                                            href={`https://wa.me/237 ${WhatsAppNumber}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center p-4 space-x-3 transition bg-white/20 hover:bg-white/30 rounded-xl"
                                        >
                                            <MessageCircle className="text-2xl" />
                                            <div>
                                                <p className="font-semibold">MessageCircle</p>
                                                <p className="text-sm text-white/90">Discutez avec nous</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* FAQ Quick Links */}
                                <div className="p-8 bg-white shadow-lg rounded-2xl">
                                    <h3 className="mb-4 text-2xl font-bold text-dark-blue">
                                        Questions <span className="text-lemon-green">Fréquentes</span>
                                    </h3>
                                    <div className="space-y-4">
                                        {faqs.map((faq, index) => (
                                            <div
                                                key={faq.question}
                                                className={`border-l-4 pl-4 ${index % 2 === 0 ? 'border-primary-orange' : 'border-lemon-green'
                                                    }`}
                                            >
                                                <h4 className="mb-1 font-bold text-dark-blue">{faq.question}</h4>
                                                <p className="text-sm text-gray-600">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="p-8 bg-light-gray rounded-2xl">
                                    <h3 className="mb-4 text-2xl font-bold text-dark-blue">Suivez-nous</h3>
                                    <p className="mb-6 text-gray-600">Restez informés de nos actualités et nouveautés</p>
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
                                </div>
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
                                Notre <span className="text-primary-orange">Localisation</span>
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
                                Trouvez-nous facilement à Douala
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127118.09103633!2d9.738499!3d4.0510563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0d3b6be0cb%3A0x8b6b6b6b6b6b6b6b!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                width="100%"
                                height="500"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="CRIC Africa Location"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title="Prêt à Démarrer Votre Projet ?"
                    description="Notre équipe d'experts est prête à vous accompagner. Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé."
                    buttons={[
                        {
                            text: "Appelez Maintenant",
                            href: `tel:+237 ${WhatsAppNumber}`,
                            icon: "Phone",
                            className: "bg-white text-primary-orange hover:bg-gray-50"
                        },
                        {
                            text: "Voir Nos Produits",
                            to: "/products",
                            icon: "Box",
                            className: "bg-dark-blue text-white hover:bg-blue-900"
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Contact