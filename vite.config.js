import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    target: 'es2019',
    cssTarget: 'chrome61',
    outDir: 'dist',
    assetsInlineLimit: 100000000
  }
});


