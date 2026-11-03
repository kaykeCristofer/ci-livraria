import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: funciona em usuario.github.io/<repo>/ sem configurar o nome do repo.
  base: './',
})
