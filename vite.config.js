import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: [
        resolve(__dirname, 'src/pages/index.njk'),
        resolve(__dirname, 'src/pages/about.njk'),
        resolve(__dirname, 'src/pages/portfolio.njk'),
      ]
    }
  },
  plugins: [
    tailwindcss(),
    vituum({
        pages: {
            dir: 'src/pages',
            extensions: ['html', 'njk', 'njk.html'],
        },
    }),
    nunjucks({
      root: 'src',
      include: ['**/*.njk', '**/*.html'],
      exclude: ['**/*.js', '**/*.mjs', '**/*.ts']
    })
  ]
})
