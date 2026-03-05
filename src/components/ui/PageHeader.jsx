import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const PageHeader = ({
    title,
    subtitle,
    breadcrumbs,
}) => {
    return (
        <section className="pt-36 pb-16 bg-surface-warm border-b border-border">
            <div className="container mx-auto text-center">
                <motion.h1
                    className="text-h1 font-bold text-ink mb-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-body-lg text-ink-secondary max-w-2xl mx-auto mb-6"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                >
                    {subtitle}
                </motion.p>
                <motion.nav
                    className="flex items-center justify-center gap-2 text-caption text-ink-muted"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.1 }}
                    aria-label="Breadcrumb"
                >
                    <Link to="/" className="transition-colors duration-150 hover:text-ink">
                        Accueil
                    </Link>
                    <ChevronRight size={14} aria-hidden="true" />
                    {breadcrumbs &&
                        breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <span
                                    className={
                                        index === breadcrumbs.length - 1
                                            ? 'text-ink'
                                            : 'text-ink-muted'
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
