// src/components/ui/LanguageSwitcher.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Check } from 'lucide-react'
import { useTranslation } from '../../context/TranslationContext'

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷', shortCode: 'FR' },
        { code: 'en', name: 'English', flag: '🇬🇧', shortCode: 'EN' }
    ]

    const currentLanguage = languages.find(lang => lang.code === language)

    return (
        <div className="relative">
            {/* Desktop Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="items-center hidden px-3 py-2 space-x-2 text-ink transition-colors rounded-[var(--radius-sm)] md:flex bg-surface-muted border border-border hover:bg-white hover:border-primary/30 shadow-sm"
            >
                <Globe size={16} className="text-primary" />
                <span className="text-sm font-bold">{currentLanguage?.shortCode}</span>
            </button>

            {/* Mobile Button - Shows Code Only */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 text-ink transition-colors rounded-[var(--radius-sm)] md:hidden bg-surface-muted border border-border"
            >
                <span className="text-sm font-bold">{currentLanguage?.shortCode}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -4 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -4 }}
                            className="absolute right-0 z-50 w-48 mt-2 bg-white border border-border rounded-[var(--radius-md)] shadow-xl top-full"
                        >
                            <div className="p-2">
                                {languages.map(lang => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            changeLanguage(lang.code)
                                            setIsOpen(false)
                                        }}
                                        className={`flex items-center justify-between w-full px-4 py-3 rounded-[var(--radius-sm)] text-sm font-semibold transition-all ${language === lang.code
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-lg">{lang.flag}</span>
                                            <span>{lang.name}</span>
                                        </div>
                                        {language === lang.code && (
                                            <Check size={16} className="text-primary" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LanguageSwitcher
