// src/components/layout/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Check, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Email, navigation, WhatsAppNumber } from '../../constants'
import { useTranslation } from '../../context/TranslationContext'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const { t } = useTranslation()

    const productList = t('footer.productList', { returnObjects: true })
    const safeProductList = Array.isArray(productList) ? productList : []

    return (
        <footer className="pt-20 pb-10 text-white bg-dark border-t-[3px] border-primary" aria-label="Pied de page">
            <div className="container mx-auto">
                <div className="grid gap-16 mb-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-[var(--radius-md)]">
                                <img src="/logo.png" alt="logo" className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold tracking-tight text-white uppercase">
                                    <span className="text-primary">CRIC</span> Africa
                                </h3>
                                <p className="text-[10px] uppercase tracking-widest text-white/50">{t('common.slogan')}</p>
                            </div>
                        </Link>
                        <p className="leading-relaxed text-white/60 text-sm">
                            {t('footer.companyDescription')}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                            {t('footer.navigation')}
                        </h4>
                        <ul className="space-y-4">
                            {navigation.map(item => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="flex items-center text-sm text-white/60 transition-all hover:text-white hover:translate-x-1"
                                    >
                                        <ChevronRight className="mr-3 text-secondary" size={14} />
                                        {t(`navigation.${item.name.toLowerCase()}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                            {t('footer.products')}
                        </h4>
                        <ul className="space-y-4">
                            {safeProductList.map((product, index) => (
                                <li key={index} className="flex items-start text-sm text-white/60">
                                    <Check
                                        className="text-primary mr-3 mt-0.5 flex-shrink-0"
                                        size={16}
                                    />
                                    {product}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                            {t('footer.contactTitle')}
                        </h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start space-x-4">
                                <div className="p-2 bg-white/5 rounded-[var(--radius-md)] text-secondary">
                                    <MapPin size={16} />
                                </div>
                                <span className="text-white/60 mt-1">Douala, Cameroun</span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <div className="p-2 bg-white/5 rounded-[var(--radius-md)] text-primary">
                                    <Phone size={16} />
                                </div>
                                <span className="text-white/60 mt-1">+237 {WhatsAppNumber}</span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <div className="p-2 bg-white/5 rounded-[var(--radius-md)] text-secondary">
                                    <Mail size={16} />
                                </div>
                                <span className="text-white/60 mt-1">{Email}</span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <div className="p-2 bg-white/5 rounded-[var(--radius-md)] text-primary">
                                    <Clock size={16} />
                                </div>
                                <div className="text-white/60 mt-1">
                                    <p>Lun-Ven: 8h-18h</p>
                                    <p>Sam: 9h-13h</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-center text-white/40">
                        &copy; {currentYear}{' '}
                        <span className="font-bold text-white/80">CRIC Africa SARL</span>.{' '}
                        {t('footer.rightsReserved')}
                    </p>
                    <div className="flex gap-8 text-white/40 text-xs font-semibold uppercase tracking-widest">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
