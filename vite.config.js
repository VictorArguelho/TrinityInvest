import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './js/utils'),
      '@calculator': path.resolve(__dirname, './js/calculator')
    }
  }
});