import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/js/toast.js',
      name: 'Toast',
      fileName: (format) => `toast.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
});
