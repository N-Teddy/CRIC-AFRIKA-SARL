// src/context/TranslationContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'fr';
        setLanguage(savedLanguage);
        loadTranslations(savedLanguage);
    }, []);

    const loadTranslations = async (lang) => {
        try {
            const translationModule = await import(`../translations/${lang}.json`);
            setTranslations(translationModule.default);
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    };

    const changeLanguage = (newLang) => {
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
        loadTranslations(newLang);
    };

    const t = (key, options = {}) => {
        let translation = translations;
        const keys = key.split('.');

        for (const k of keys) {
            translation = translation?.[k];
            if (translation === undefined) return key;
        }

        // Handle arrays and objects
        if (options.returnObjects && (Array.isArray(translation) || typeof translation === 'object')) {
            return translation;
        }

        // Handle strings with parameters
        if (typeof translation === 'string') {
            return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => options[param] || match);
        }

        return translation || key;
    };

    const value = {
        language,
        changeLanguage,
        t,
        isFrench: language === 'fr',
        isEnglish: language === 'en'
    };

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    );
};