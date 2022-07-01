/// <reference types="vitest" />
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['packages/**/*.{spec,test}.ts'],
    coverage: {
      exclude: ['**/*.{spec,test}.ts'],
      reporter: ['lcov', 'text', 'html', 'json']
    }
  }
})