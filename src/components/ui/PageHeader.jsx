import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const PageHeader = ({
    title,
    subtitle,
    breadcrumbs,
    gradient = 'from-dark-blue via-blue-900 to-primary-orange'
}) => {
    return (
        <section className={`pt-32 pb-20 bg-gradient-to-br ${gradient}`}>
            <div className="container px-4 mx-auto text-center lg:px-8">
                <motion.h1
                    className="mb-6 text-5xl font-bold text-white lg:text-6xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-lemon-green">{title}</span>
                </motion.h1>
                <motion.p
                    className="max-w-3xl mx-auto mb-8 text-xl text-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
                <motion.div
                    className="flex items-center justify-center space-x-2 text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link to="/" className="transition hover:text-primary-orange">
                        Accueil
                    </Link>
                    <span>/</span>
                    {breadcrumbs &&
                        breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <span
                                    className={
                                        index === breadcrumbs.length - 1
                                            ? 'text-primary-orange'
                                            : ''
                                    }
                                >
                                    {crumb}
                                </span>
                                {index < breadcrumbs.length - 1 && <ChevronRight size={16} />}
                            </React.Fragment>
                        ))}
                </motion.div>
            </div>
        </section>
    )
}

export default PageHeader
