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
    backgroundClass = 'bg-[#f5f5f0]',
    textColor = 'text-[#222222]',
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
    const descriptionColor = textColor === 'text-white' ? 'text-white/80' : 'text-[#6f6f6f]'

    return (
        <section className={`py-20 ${sectionBackground} ${className}`}>
            <div className="container px-4 mx-auto text-center lg:px-8">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Animated Icon Section */}
                    {IconComponent && (
                        <div className="mb-8">
                            <motion.div
                                animate={
                                    iconAnimation || {
                                        rotate: [0, 5, -5, 5, 0]
                                    }
                                }
                                transition={
                                    iconAnimation
                                        ? undefined
                                        : {
                                              duration: 2,
                                              repeat: Infinity,
                                              repeatDelay: 3
                                          }
                                }
                                className="inline-block"
                            >
                                <IconComponent className={textColor} size={80} />
                            </motion.div>
                        </div>
                    )}

                    <h2 className={`mb-4 text-3xl font-semibold ${textColor} lg:text-4xl`}>
                        {title}
                    </h2>
                    <p className={`mb-8 text-base leading-relaxed ${descriptionColor}`}>
                        {description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {buttons.map((button, index) => {
                            const ButtonIconComponent = iconMap[button.icon]
                            const isExternal =
                                button.href?.startsWith('http') ||
                                button.href?.startsWith('tel:') ||
                                button.href?.startsWith('mailto:')

                            const buttonContent = (
                                <>
                                    {ButtonIconComponent && (
                                        <ButtonIconComponent className="inline mr-2" size={20} />
                                    )}
                                    {button.text}
                                </>
                            )

                            // Common props WITHOUT the key
                            const commonProps = {
                                className: `inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${button.className}`
                            }

                            if (isExternal) {
                                return (
                                    <a
                                        key={index} // Key passed directly here
                                        href={button.href}
                                        {...commonProps}
                                    >
                                        {buttonContent}
                                    </a>
                                )
                            }

                            if (button.to) {
                                return (
                                    <Link
                                        key={index} // Key passed directly here
                                        to={button.to}
                                        {...commonProps}
                                    >
                                        {buttonContent}
                                    </Link>
                                )
                            }

                            return (
                                <button
                                    key={index} // Key passed directly here
                                    onClick={button.onClick}
                                    {...commonProps}
                                >
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
