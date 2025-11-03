// src/components/forms/ContactForm.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { useTranslation } from '../../context/TranslationContext'

const ContactForm = () => {
    const { t } = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleInputChange = e => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch('http://localhost:3001/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: t('contact.form.successMessage')
                })
                // Reset form
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    consent: false
                })
            } else {
                throw new Error(result.message)
            }
        } catch (error) {
            console.error('Error sending message:', error)
            setSubmitStatus({
                type: 'error',
                message: t('contact.form.errorMessage')
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="p-8 bg-white shadow-lg rounded-2xl lg:p-12">
            <h2 className="mb-2 text-3xl font-bold text-dark-blue">{t('contact.form.title')}</h2>
            <p className="mb-8 text-gray-600">{t('contact.form.subtitle')}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            {t('contact.form.fields.name')} *
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                            placeholder={t('contact.form.placeholders.name')}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            {t('contact.form.fields.company')}
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                            placeholder={t('contact.form.placeholders.company')}
                        />
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            {t('contact.form.fields.email')} *
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                            placeholder={t('contact.form.placeholders.email')}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            {t('contact.form.fields.phone')} *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                            placeholder={t('contact.form.placeholders.phone')}
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-2 font-semibold text-gray-700">
                        {t('contact.form.fields.subject')} *
                    </label>
                    <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                    >
                        <option value="">{t('contact.form.placeholders.subject')}</option>
                        <option value="Demande de Devis">{t('contact.form.subjects.quote')}</option>
                        <option value="Information Produit">
                            {t('contact.form.subjects.productInfo')}
                        </option>
                        <option value="Information Service">
                            {t('contact.form.subjects.serviceInfo')}
                        </option>
                        <option value="Service Après-Vente">
                            {t('contact.form.subjects.afterSales')}
                        </option>
                        <option value="Partenariat">
                            {t('contact.form.subjects.partnership')}
                        </option>
                        <option value="Recrutement">
                            {t('contact.form.subjects.recruitment')}
                        </option>
                        <option value="Autre">{t('contact.form.subjects.other')}</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 font-semibold text-gray-700">
                        {t('contact.form.fields.message')} *
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 transition border-2 border-gray-200 rounded-xl focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10"
                        placeholder={t('contact.form.placeholders.message')}
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
                        {t('contact.form.consent')} *
                    </label>
                </div>

                {/* Submit Status */}
                {submitStatus && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg ${
                            submitStatus.type === 'success'
                                ? 'bg-green-50 border border-green-200 text-green-800'
                                : 'bg-red-50 border border-red-200 text-red-800'
                        }`}
                    >
                        <div className="flex items-center">
                            {submitStatus.type === 'success' ? (
                                <CheckCircle className="w-5 h-5 mr-2" />
                            ) : (
                                <AlertCircle className="w-5 h-5 mr-2" />
                            )}
                            <span>{submitStatus.message}</span>
                        </div>
                    </motion.div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-bold text-white rounded-full btn-orange disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="inline w-5 h-5 mr-2 animate-spin" />
                            {t('contact.form.sending')}
                        </>
                    ) : (
                        <>
                            <Send className="inline mr-2" size={20} />
                            {t('contact.form.submit')}
                        </>
                    )}
                </button>

                <p className="text-sm text-center text-gray-500">
                    {t('contact.form.requiredFields')}
                </p>
            </form>
        </div>
    )
}

export default ContactForm
