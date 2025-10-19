// src/components/layout/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Factory,
    ChevronRight,
    Check,
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Linkedin,
    Twitter,
    MessageCircle
} from 'lucide-react'
import { CompanyName, navigation, WhatsAppNumber } from '../../constants'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="pt-16 pb-8 text-white bg-dark-blue">
            <div className="container px-4 mx-auto lg:px-8">
                <div className="grid gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-6 space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-orange to-lemon-green">
                                <Factory className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{CompanyName.toUpperCase()}</h3>
                                <p className="text-xs italic text-gray-400">Ensemble Énergisons L'Afrique</p>
                            </div>
                        </div>
                        <p className="mb-6 leading-relaxed text-gray-400">
                            Votre partenaire de confiance pour l'importation, l'installation et la maintenance d'équipements industriels au Cameroun.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 transition rounded-full bg-white/10 hover:bg-primary-orange"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 transition rounded-full bg-white/10 hover:bg-lemon-green"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 transition rounded-full bg-white/10 hover:bg-primary-orange"
                            >
                                <Twitter size={16} />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 transition rounded-full bg-white/10 hover:bg-lemon-green"
                            >
                                <MessageCircle size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-6 text-lg font-bold text-primary-orange">Navigation</h4>
                        <ul className="space-y-3">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="flex items-center text-gray-400 transition hover:text-primary-orange"
                                    >
                                        <ChevronRight className="mr-2 text-xs" size={12} />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="mb-6 text-lg font-bold text-lemon-green">Nos Produits</h4>
                        <ul className="space-y-3">
                            {[
                                'Groupes Électrogènes',
                                'Compresseurs Industriels',
                                'Équipements Sécurité',
                                'Matériels de Pompage',
                                'Engins de Manutention',
                                'Transformateurs'
                            ].map((product, index) => (
                                <li key={product} className="flex items-start text-gray-400">
                                    <Check className={`${index % 2 === 0 ? 'text-primary-orange' : 'text-lemon-green'
                                        } text-xs mr-2 mt-1 flex-shrink-0`} />
                                    {product}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-6 text-lg font-bold text-primary-orange">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="flex-shrink-0 mt-1 text-primary-orange" />
                                <span className="text-gray-400">Douala, Cameroun</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="flex-shrink-0 mt-1 text-lemon-green" />
                                <span className="text-gray-400">+237 {WhatsAppNumber}</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="flex-shrink-0 mt-1 text-primary-orange" />
                                <span className="text-gray-400">contact@cricafrica.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Clock className="flex-shrink-0 mt-1 text-lemon-green" />
                                <span className="text-gray-400">Lun-Ven: 8h-18h<br />Sam: 9h-13h</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex justify-center">
                        <p className="text-sm text-center text-gray-400 md:text-left">
                            &copy; {currentYear} <span className="font-semibold text-primary-orange">CRIC Africa SARL</span>. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer