import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'core-js',
      '@instructure/ui',
      '@instructure/canvas-theme',
      '@instructure/ui-icons',
    ],
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
