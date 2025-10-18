import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/pages/index.njk'),
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
