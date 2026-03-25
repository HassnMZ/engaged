import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/engaged/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'html2canvas': ['html2canvas'],
        },
      },
    },
  },
})
