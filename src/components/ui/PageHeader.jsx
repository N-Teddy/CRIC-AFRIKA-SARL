import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const PageHeader = ({
    title,
    subtitle,
    breadcrumbs,
    background = 'bg-[#f5f5f0]'
}) => {
    return (
        <section className={`pt-28 pb-16 border-b border-[#e1e1e1] ${background}`}>
            <div className="container px-4 mx-auto text-center lg:px-8">
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
