import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    animation: ['framer-motion'],
                    icons: ['lucide-react']
                }
            }
        }
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, '/api')
            }
        }
    }
})
