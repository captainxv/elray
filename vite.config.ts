import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
import * as path from 'path';

export default defineConfig({
  plugins: [
    svelte(),
    sveltekit(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ray PWA',
        short_name: 'Ray',
        start_url: '/',
        display: 'standalone',
        description: 'Ray Platform',
        theme_color: '#0B0B0B',
        background_color: '#1a1a1a',
        icons: [
          {
            src: '/images/raysquare.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/raysquare.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ]
      }
    })
  ],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib')
    }
  }
}); 