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
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'maskable-icon-512x512.svg', 'screenshot1.png', 'screenshot2.png'],
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
            src: 'pwa-192x192.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '96x96',
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
        screenshots: [
          {
            src: 'screenshot1.png',
            sizes: '390x844',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Home Screen'
          },
          {
            src: 'screenshot2.png',
            sizes: '390x844',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'All Items'
          }
        ],
        shortcuts: [
          {
            name: 'Browse Items',
            short_name: 'Browse',
            description: 'Browse all grocery items',
            url: '/all-items',
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }]
          },
          {
            name: 'My Orders',
            short_name: 'Orders',
            description: 'View your order history',
            url: '/orders',
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }]
          }
        ],
        categories: ['shopping', 'food', 'lifestyle']
      }
    })
  ]
})
