import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Use absolute base for Netlify
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
