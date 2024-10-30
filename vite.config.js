import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure it's a string
  build: {
    rollupOptions: {
      external: ['react-type-animation']
    }
  }
})
