// src/components/CTA.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Phone,
    Box,
    Download,
    FolderOpen,
    Factory,
    Wrench,
    MessageCircle,
    Mail,
    FileText
} from 'lucide-react'

const CTA = ({
    title,
    description,
    buttons,
    backgroundClass = 'bg-dark',
    textColor = 'text-white',
    className = '',
}) => {
    const iconMap = {
        Phone,
        Box,
        Download,
        FolderOpen,
        Factory,
        Wrench,
        MessageCircle,
        Mail,
        FileText
    }

    const descriptionColor = textColor.includes('white') ? 'text-white/70' : 'text-ink-muted'

    return (
        <section className={`py-24 ${backgroundClass} ${className}`}>
            <div className="container mx-auto text-center">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`mb-6 text-h2 font-bold tracking-tight ${textColor}`}>
                        {title}
                    </h2>
                    <p className={`mb-12 text-lg leading-relaxed ${descriptionColor}`}>
                        {description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {buttons.map((button, index) => {
                            const ButtonIconComponent = iconMap[button.icon]
                            const isExternal =
                                button.href?.startsWith('http') ||
                                button.href?.startsWith('tel:') ||
                                button.href?.startsWith('mailto:')

                            const buttonContent = (
                                <>
                                    {ButtonIconComponent && (
                                        <ButtonIconComponent className="mr-3" size={20} />
                                    )}
                                    <span className="font-bold uppercase tracking-widest text-xs">{button.text}</span>
                                </>
                            )

                            const commonProps = {
                                className: `inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-md)] transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg ${button.className}`
                            }

                            if (isExternal) {
                                return (
                                    <a key={index} href={button.href} {...commonProps}>
                                        {buttonContent}
                                    </a>
                                )
                            }

                            if (button.to) {
                                return (
                                    <Link key={index} to={button.to} {...commonProps}>
                                        {buttonContent}
                                    </Link>
                                )
                            }

                            return (
                                <button key={index} onClick={button.onClick} {...commonProps}>
                                    {buttonContent}
                                </button>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
