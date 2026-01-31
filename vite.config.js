import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: 'resources/js/main.jsx',
            output: {
                entryFileNames: 'js/db-browser.js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/db-browser.css'
                    }
                    return 'assets/[name][extname]'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js')
        }
    }
})
