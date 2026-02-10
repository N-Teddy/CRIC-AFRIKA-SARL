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
    gradient,
    backgroundClass = 'bg-surface-muted',
    textColor = 'text-ink',
    className = '',
    icon = null,
    iconAnimation = null
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

    const IconComponent = icon ? iconMap[icon] : null

    const sectionBackground = gradient
        ? `bg-gradient-to-r ${gradient}`
        : backgroundClass
    const descriptionColor = textColor.includes('white') ? 'text-white/70' : 'text-ink-muted'

    return (
        <section className={`py-24 ${sectionBackground} ${className}`}>
            <div className="container mx-auto text-center">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Animated Icon Section */}
                    {IconComponent && (
                        <div className="mb-10">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-corporate border border-white/20">
                                <motion.div
                                    animate={
                                        iconAnimation || {
                                            y: [0, -10, 0]
                                        }
                                    }
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <IconComponent className={textColor} size={48} />
                                </motion.div>
                            </div>
                        </div>
                    )}

                    <h2 className={`mb-6 text-4xl font-extrabold tracking-tight ${textColor} lg:text-5xl`}>
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
                                className: `inline-flex items-center justify-center px-10 py-5 rounded-button transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl ${button.className}`
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
