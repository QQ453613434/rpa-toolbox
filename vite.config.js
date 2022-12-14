import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'erp-form',
  },
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@api': resolve(__dirname, '/src/api'),
      '@assets': resolve(__dirname, '/src/assets'),
    },
  },
  server: {
    cors: true,
    port: 3000,
    proxy: {
      '^/api': {
        // target: 'http://10.66.240.8',
        target: 'http://rpa.topwinchance.com:5056',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
