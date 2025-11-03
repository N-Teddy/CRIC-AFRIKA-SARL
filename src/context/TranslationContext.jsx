// src/context/TranslationContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'

const TranslationContext = createContext()

// Preload common languages
const preloadedTranslations = {}

const loadTranslationFile = async lang => {
    if (preloadedTranslations[lang]) {
        return preloadedTranslations[lang]
    }

    try {
        const translationModule = await import(`../translations/${lang}.json`)
        preloadedTranslations[lang] = translationModule.default
        return translationModule.default
    } catch (error) {
        console.error('Error loading translations:', error)
        return {}
    }
}

export const useTranslation = () => {
    const context = useContext(TranslationContext)
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider')
    }
    return context
}

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr')
    const [translations, setTranslations] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const initializeTranslations = async () => {
            const savedLanguage = localStorage.getItem('language') || 'fr'
            setLanguage(savedLanguage)

            // Preload both languages for faster switching
            const [currentTranslations] = await Promise.all([
                loadTranslationFile(savedLanguage),
                loadTranslationFile(savedLanguage === 'fr' ? 'en' : 'fr')
            ])

            setTranslations(currentTranslations)
            setIsLoading(false)
        }

        initializeTranslations()
    }, [])

    const changeLanguage = async newLang => {
        setIsLoading(true)
        setLanguage(newLang)
        localStorage.setItem('language', newLang)

        const newTranslations = await loadTranslationFile(newLang)
        setTranslations(newTranslations)
        setIsLoading(false)
    }

    const t = (key, options = {}) => {
        // Show loading indicator or empty string while loading
        if (isLoading) {
            return options.loadingPlaceholder || ''
        }

        let translation = translations
        const keys = key.split('.')

        for (const k of keys) {
            translation = translation?.[k]
            if (translation === undefined) {
                if (options.returnObjects) return []
                return key // Only return key when translations are loaded but key not found
            }
        }

        if (options.returnObjects) {
            if (Array.isArray(translation)) return translation
            if (typeof translation === 'object' && translation !== null) return translation
            return []
        }

        if (typeof translation === 'string') {
            return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => options[param] || match)
        }

        return translation || key
    }

    const value = {
        language,
        changeLanguage,
        t,
        isFrench: language === 'fr',
        isEnglish: language === 'en',
        isLoading
    }

    return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}
