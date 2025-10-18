import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, subtitle, breadcrumbs }) => {
    return (
        <section className="bg-gradient-to-r from-dark-blue via-dark-blue to-lemon-green pt-32 pb-20">
            <div className="container mx-auto px-4 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
                >
                    {subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center items-center space-x-2 text-white"
                >
                    <Link to="/" className="hover:text-primary-orange transition">Accueil</Link>
                    <ChevronRight size={16} />
                    {breadcrumbs && breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <span className={index === breadcrumbs.length - 1 ? 'text-primary-orange' : ''}>
                                {crumb}
                            </span>
                            {index < breadcrumbs.length - 1 && <ChevronRight size={16} />}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;