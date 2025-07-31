import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/aula-react-rick-and-morty/', // Substitua pelo nome do seu repositório

})
