import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [react(), imagetools()],
  base: '',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
