import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hidoyattv/', // GitHub Pages: https://aliddin44.github.io/hidoyattv/
  plugins: [react()],
})
