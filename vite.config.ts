import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/abhay-puzzle-game/'  // <-- Add this line for GitHub Pages
})
