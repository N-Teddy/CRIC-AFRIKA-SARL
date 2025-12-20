import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const PageHeader = ({
    title,
    subtitle,
    breadcrumbs,
    background = 'bg-hero-gradient'
}) => {
    return (
        <section className={`relative overflow-hidden pt-28 pb-16 border-b border-[#e1e1e1] ${background}`}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="mesh-overlay opacity-50" />
                <div className="absolute -top-12 right-12 w-48 h-48 rounded-full bg-[#ff8c42]/15 blur-3xl" />
                <div className="absolute -bottom-12 left-10 w-56 h-56 rounded-full bg-[#a8d05f]/12 blur-3xl" />
            </div>
            <div className="container relative px-4 mx-auto text-center lg:px-8">
                <motion.h1
                    className="mb-4 text-4xl font-semibold text-[#222222] lg:text-5xl"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="max-w-2xl mx-auto mb-6 text-base text-[#6f6f6f] lg:text-lg"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                >
                    {subtitle}
                </motion.p>
                <motion.nav
                    className="flex items-center justify-center gap-2 text-sm text-[#6f6f6f]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.1 }}
                    aria-label="Breadcrumb"
                >
                    <Link to="/" className="transition-colors duration-150 hover:text-[#222222]">
                        Accueil
                    </Link>
                    <ChevronRight size={14} aria-hidden="true" />
                    {breadcrumbs &&
                        breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <span
                                    className={
                                        index === breadcrumbs.length - 1
                                            ? 'text-[#222222]'
                                            : 'text-[#6f6f6f]'
                                    }
                                >
                                    {crumb}
                                </span>
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronRight size={14} aria-hidden="true" />
                                )}
                            </React.Fragment>
                        ))}
                </motion.nav>
            </div>
        </section>
    )
}

export default PageHeader
