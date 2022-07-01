import { defineConfig } from 'vite'

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
  }
})
