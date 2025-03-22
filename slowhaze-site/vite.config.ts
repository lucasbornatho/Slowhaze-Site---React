import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Use '/' para desenvolvimento
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})