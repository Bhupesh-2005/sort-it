import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'maskable-icon-512x512.svg'],
      manifest: {
        name: 'sort it.',
        short_name: 'sort it.',
        description: 'Premium Grocery & Essentials Delivery. Fast, reliable, and always sorted.',
        theme_color: '#F7C600',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        dir: 'ltr',
        start_url: '/',
        id: 'https://sort-it-05by.onrender.com/',
        scope: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        categories: ['shopping', 'food', 'lifestyle']
      }
    })
  ]
})
