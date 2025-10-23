// Alternative version - More compact mobile design
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useTranslation } from '../../context/TranslationContext';

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷', shortCode: 'FR' },
        { code: 'en', name: 'English', flag: '🇬🇧', shortCode: 'EN' }
    ];

    const currentLanguage = languages.find(lang => lang.code === language);

    return (
        <div className="relative">
            {/* Desktop Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="items-center hidden px-3 py-2 space-x-2 text-white transition-colors rounded-lg md:flex bg-white/10 hover:bg-white/20"
            >
                <Globe size={16} />
                <span className="text-sm font-medium">{currentLanguage?.flag}</span>
            </button>

            {/* Mobile Button - Compact with chevron */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-2 py-2 space-x-1 text-white transition-colors rounded-lg md:hidden bg-white/10 hover:bg-white/20"
            >
                <span className="text-xs font-bold">{currentLanguage?.shortCode}</span>
                <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown - Compact on mobile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            className="absolute right-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg top-full md:w-48 w-36"
                        >
                            <div className="p-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            changeLanguage(lang.code);
                                            setIsOpen(false);
                                        }}
                                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm transition-colors ${language === lang.code
                                            ? 'bg-primary-orange/10 text-primary-orange'
                                            : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-2">
                                            {/* Show flag and full name on desktop, flag + code on mobile */}
                                            <span className="text-base">{lang.flag}</span>
                                            <span className="hidden md:inline">{lang.name}</span>
                                            <span className="text-xs font-bold md:hidden">{lang.shortCode}</span>
                                        </div>
                                        {language === lang.code && (
                                            <Check size={14} className="text-primary-orange" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;