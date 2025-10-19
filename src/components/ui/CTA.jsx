// src/components/CTA.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';

const CTA = ({
    title,
    description,
    buttons,
    gradient = "from-primary-orange to-lemon-green",
    textColor = "text-white",
    className = "",
    icon = null, // New prop for animated icon
    iconAnimation = null // New prop for icon animation
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
    };

    const IconComponent = icon ? iconMap[icon] : null;

    return (
        <section className={`py-20 bg-gradient-to-r ${gradient} ${className}`}>
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
                                animate={iconAnimation || {
                                    rotate: [0, 5, -5, 5, 0],
                                }}
                                transition={iconAnimation ? undefined : {
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }}
                                className="inline-block"
                            >
                                <IconComponent className={textColor} size={80} />
                            </motion.div>
                        </div>
                    )}

                    <h2 className={`mb-6 text-4xl font-bold ${textColor} lg:text-5xl`}>
                        {title}
                    </h2>
                    <p className={`mb-8 text-xl leading-relaxed ${textColor}/90`}>
                        {description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {buttons.map((button, index) => {
                            const ButtonIconComponent = iconMap[button.icon];
                            const isExternal = button.href?.startsWith('http') || button.href?.startsWith('tel:') || button.href?.startsWith('mailto:');

                            const buttonContent = (
                                <>
                                    {ButtonIconComponent && <ButtonIconComponent className="inline mr-2" size={20} />}
                                    {button.text}
                                </>
                            );

                            const commonProps = {
                                className: `px-8 py-4 text-lg font-bold transition rounded-full shadow-lg hover:shadow-2xl hover:scale-105 ${button.className}`,
                                key: index
                            };

                            if (isExternal) {
                                return (
                                    <a href={button.href} {...commonProps}>
                                        {buttonContent}
                                    </a>
                                );
                            }

                            if (button.to) {
                                return (
                                    <Link to={button.to} {...commonProps}>
                                        {buttonContent}
                                    </Link>
                                );
                            }

                            return (
                                <button onClick={button.onClick} {...commonProps}>
                                    {buttonContent}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;