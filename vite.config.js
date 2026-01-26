import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace 'mergerware-frontend' with your exact repository name if it differs
  base: "/mergerware-frontend/", 
})