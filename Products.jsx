// ============================================
// src/pages/Products.jsx
// ============================================

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Zap,
    Wind,
    Shield,
    Droplet,
    Truck,
    Factory,
    Search,
    Filter,
    Phone,
    ArrowRight,
    Star,
    CheckCircle
} from 'lucide-react'
import PageHeader from './src/components/ui/PageHeader'

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')

    const categories = [
        { id: 'all', name: 'Tous les Produits', icon: Factory },
        { id: 'generators', name: 'Groupes Électrogènes', icon: Zap },
        { id: 'compressors', name: 'Compresseurs', icon: Wind },
        { id: 'safety', name: 'Équipements Sécurité', icon: Shield },
        { id: 'pumps', name: 'Matériels de Pompage', icon: Droplet },
        { id: 'handling', name: 'Engins de Manutention', icon: Truck }
    ]

    const products = [
        {
            id: 1,
            category: 'generators',
            name: 'Groupe Électrogène 50 KVA',
            brand: 'CATERPILLAR',
            power: '50 KVA',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
            features: ['Démarrage automatique', 'Silencieux', 'Économique'],
            inStock: true
        },
        {
            id: 2,
            category: 'generators',
            name: 'Groupe Électrogène 100 KVA',
            brand: 'CUMMINS',
            power: '100 KVA',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1621905252472-9b6e78c09a0f?w=600',
            features: ['Haute performance', 'Faible consommation', 'Garantie 2 ans'],
            inStock: true
        },
        {
            id: 3,
            category: 'generators',
            name: 'Groupe Électrogène 200 KVA',
            brand: 'PERKINS',
            power: '200 KVA',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=600',
            features: ['Usage industriel', 'Robuste', 'Maintenance facile'],
            inStock: true
        },
        {
            id: 4,
            category: 'compressors',
            name: 'Compresseur à Vis 15 KW',
            brand: 'ATLAS COPCO',
            power: '15 KW',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
            features: ['Silencieux', 'Économe en énergie', 'Compact'],
            inStock: true
        },
        {
            id: 5,
            category: 'compressors',
            name: 'Compresseur à Piston 5.5 KW',
            brand: 'INGERSOLL RAND',
            power: '5.5 KW',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
            features: ['Portable', 'Fiable', 'Entretien simple'],
            inStock: true
        },
        {
            id: 6,
            category: 'safety',
            name: 'Détecteur de Gaz Multi-Gaz',
            brand: 'HONEYWELL',
            power: 'N/A',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=600',
            features: ['4 capteurs', 'Alarme sonore', 'Certification CE'],
            inStock: true
        },
        {
            id: 7,
            category: 'safety',
            name: 'Système Extinction Incendie',
            brand: 'SIEMENS',
            power: 'N/A',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1621905252472-9b6e78c09a0f?w=600',
            features: ['Automatique', 'Certifié', 'Installation incluse'],
            inStock: true
        },
        {
            id: 8,
            category: 'pumps',
            name: 'Pompe Centrifuge 10 HP',
            brand: 'GRUNDFOS',
            power: '10 HP',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
            features: ['Haute pression', 'Durable', 'Faible maintenance'],
            inStock: true
        },
        {
            id: 9,
            category: 'pumps',
            name: 'Pompe Immergée 5 HP',
            brand: 'PEDROLLO',
            power: '5 HP',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
            features: ['Inox', 'Silencieuse', 'Économique'],
            inStock: true
        },
        {
            id: 10,
            category: 'handling',
            name: 'Chariot Élévateur 3T',
            brand: 'TOYOTA',
            power: '3 Tonnes',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=600',
            features: ['Électrique', 'Compact', 'Sécurisé'],
            inStock: true
        },
        {
            id: 11,
            category: 'handling',
            name: 'Transpalette Électrique',
            brand: 'JUNGHEINRICH',
            power: '2 Tonnes',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1621905252472-9b6e78c09a0f?w=600',
            features: ['Maniable', 'Batterie longue durée', 'Ergonomique'],
            inStock: true
        },
        {
            id: 12,
            category: 'generators',
            name: 'Groupe Électrogène 500 KVA',
            brand: 'CATERPILLAR',
            power: '500 KVA',
            price: 'Sur devis',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
            features: ['Industriel', 'Très haute puissance', 'Support 24/7'],
            inStock: false
        }
    ]

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div>
            <PageHeader
                title="Nos Produits"
                subtitle="Large gamme d'équipements industriels de qualité supérieure"
                breadcrumbs={['Produits']}
            />

            {/* Filter Section */}
            <section className="py-12 bg-white sticky top-20 z-20 border-b border-[#e1e1e1]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full lg:w-96">
                            <Search
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#b5b5b5]"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Rechercher un produit..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-[#e1e1e1] rounded-full focus:border-[#a8d05f] focus:outline-none transition"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map(category => (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-semibold transition ${
                                        selectedCategory === category.id
                                            ? 'bg-[#222222] text-white border border-[#222222]'
                                            : 'bg-white text-[#6f6f6f] border border-[#e1e1e1] hover:text-[#222222]'
                                    }`}
                                >
                                    <category.icon size={18} />
                                    <span className="hidden md:inline">{category.name}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 bg-[#f5f5f0]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-8">
                        <p className="text-gray-600">
                            <span className="font-bold text-[#222222]">
                                {filteredProducts.length}
                            </span>{' '}
                            produit(s) trouvé(s)
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl overflow-hidden border border-[#e1e1e1] transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    {product.inStock ? (
                                        <span className="absolute top-4 right-4 bg-[#a8d05f] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            En Stock
                                        </span>
                                    ) : (
                                        <span className="absolute top-4 right-4 bg-[#b5b5b5] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            Sur Commande
                                        </span>
                                    )}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#111111]/65">
                                        <span className="text-white text-sm font-semibold">
                                            {product.brand}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#222222] mb-2">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[#ff8c42] font-semibold text-lg">
                                            {product.power}
                                        </span>
                                        <span className="text-gray-600">{product.price}</span>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center space-x-2 text-sm text-gray-600"
                                            >
                                                <CheckCircle
                                                    className="text-lemon-green"
                                                    size={16}
                                                />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <Link
                                            to="/contact"
                                            className="flex-1 btn-orange justify-center"
                                        >
                                            <Phone className="inline mr-2" size={16} />
                                            Devis
                                        </Link>
                                        <button className="px-4 py-3 border border-[#e1e1e1] text-[#222222] rounded-full font-semibold hover:border-[#222222] transition">
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-600 mb-4">Aucun produit trouvé</p>
                            <button
                                onClick={() => {
                                    setSelectedCategory('all')
                                    setSearchTerm('')
                                }}
                                className="btn-orange"
                            >
                                Réinitialiser les filtres
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#111111]">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
                            Besoin d'un Conseil ?
                        </h2>
                        <p className="text-base text-white/80 mb-8 leading-relaxed">
                            Notre équipe d'experts est à votre disposition pour vous aider à choisir
                            l'équipement adapté à vos besoins
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#222222] rounded-full bg-white hover:bg-[#f5f5f0]"
                        >
                            <Phone className="mr-2" size={20} />
                            Contactez un Expert
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Products
