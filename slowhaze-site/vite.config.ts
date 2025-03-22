import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Caminho base para desenvolvimento
  plugins: [react()],
  server: {
    open: true, // Abre o navegador automaticamente
  },
  root: './', // Especifica que o diretório raiz é a raiz do projeto
})