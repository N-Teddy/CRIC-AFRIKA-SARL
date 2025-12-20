// src/context/TranslationContext.jsx
import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

const TranslationContext = createContext()

const translationModules = import.meta.glob('../translations/*.json', { eager: true })
const translationsMap = Object.entries(translationModules).reduce((acc, [path, module]) => {
    const lang = path.split('/').pop().replace('.json', '')
    acc[lang] = module.default
    return acc
}, {})

const getStoredLanguage = () => {
    if (typeof window === 'undefined') return 'fr'
    return localStorage.getItem('language') || 'fr'
}

export const useTranslation = () => {
    const context = useContext(TranslationContext)
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider')
    }
    return context
}

export const TranslationProvider = ({ children }) => {
    const initialLanguage = useMemo(() => getStoredLanguage(), [])
    const [language, setLanguage] = useState(initialLanguage)
    const [translations, setTranslations] = useState(() => translationsMap[initialLanguage] || {})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let isMounted = true
        const loadTranslations = async () => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('language', language)
            }
            setIsLoading(true)
            const nextTranslations = translationsMap[language] || {}
            await Promise.resolve()
            if (isMounted) {
                setTranslations(nextTranslations)
                setIsLoading(false)
            }
        }

        loadTranslations()
        return () => {
            isMounted = false
        }
    }, [language])

    const changeLanguage = newLang => {
        if (!translationsMap[newLang]) return
        setLanguage(newLang)
    }

    const t = (key, options = {}) => {
        if (isLoading) {
            return options.loadingPlaceholder ?? ''
        }
        let translation = translations
        const keys = key.split('.')

        for (const currentKey of keys) {
            translation = translation?.[currentKey]
            if (translation === undefined) {
                if (options.returnObjects) return []
                return key
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
