/// <reference types="vitest" />
import { defineConfig } from 'vite'
// import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    target: 'es2022',
    emptyOutDir: true,
    lib: {
      entry: 'src/lrs-button.ts',
      formats: ['es'],
      fileName: 'lrs-button'
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['src/**/*.{spec,test}.ts'],
    coverage: {
      exclude: ['**/*.{spec,test}.ts']
    }
  },
  // plugins: [eslintPlugin()],
})
