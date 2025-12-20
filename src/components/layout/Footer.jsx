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
        <footer className="pt-16 pb-8 text-white bg-gradient-to-b from-[#2b2f33] to-[#1f2125]">
            <div className="container px-4 mx-auto lg:px-8">
                <div className="grid gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-6 space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                                <img src="/logo.png" alt="logo" className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {t('common.companyName')}
                                </h3>
                                <p className="text-xs text-[#b5b5b5]">{t('common.slogan')}</p>
                            </div>
                        </div>
                        <p className="mb-6 leading-relaxed text-[#b5b5b5]">
                            {t('footer.companyDescription')}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-[#ff8c42]">
                            {t('footer.navigation')}
                        </h4>
                        <ul className="space-y-3">
                            {navigation.map(item => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="flex items-center text-sm text-[#d0d0d0] transition-colors duration-150 hover:text-white"
                                    >
                                        <ChevronRight className="mr-2 text-xs" size={12} />
                                        {t(`navigation.${item.name.toLowerCase()}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-[#a8d05f]">
                            {t('footer.products')}
                        </h4>
                        <ul className="space-y-3">
                            {safeProductList.map((product, index) => (
                                <li key={index} className="flex items-start text-sm text-[#d0d0d0]">
                                    <Check
                                        className={`${
                                            index % 2 === 0 ? 'text-[#ff8c42]' : 'text-[#a8d05f]'
                                        } mr-2 mt-1 flex-shrink-0`}
                                        size={14}
                                    />
                                    {product}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-[#ff8c42]">
                            {t('footer.contactTitle')}
                        </h4>
                        <ul className="space-y-4 text-sm text-[#d0d0d0]">
                            <li className="flex items-start space-x-3">
                                <MapPin className="flex-shrink-0 mt-1 text-[#a8d05f]" size={16} />
                                <span>Douala, Cameroun</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="flex-shrink-0 mt-1 text-[#ff8c42]" size={16} />
                                <span>+237{WhatsAppNumber}</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="flex-shrink-0 mt-1 text-[#a8d05f]" size={16} />
                                <span>{Email}</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Clock className="flex-shrink-0 mt-1 text-[#ff8c42]" size={16} />
                                <span>
                                    Lun-Ven: 8h-18h
                                    <br />
                                    Sam: 9h-13h
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex justify-center">
                        <p className="text-sm text-center text-[#b5b5b5] md:text-left">
                            &copy; {currentYear}{' '}
                            <span className="font-semibold text-white">CRIC Africa SARL</span>.{' '}
                            {t('footer.rightsReserved')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
