import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import blogPages from './scripts/blog-pages.mjs'

export default defineConfig({
  plugins: [react(), blogPages()],
  server: {
    port: 5173,
  },
})
