// src/components/ui/WhatsAppButton.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WhatsAppNumber } from '../../constants'

const WhatsAppButton = () => {
    return (
        <motion.a
            href={`https://wa.me/237${WhatsAppNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 flex items-center justify-center text-white transition-all bg-green-500 rounded-full shadow-lg bottom-24 right-8 w-14 h-14 hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
        >
            <MessageCircle className="text-2xl" />
        </motion.a>
    )
}

export default WhatsAppButton
