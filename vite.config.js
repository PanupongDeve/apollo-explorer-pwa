import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: false
      },
      manifest: {
        "name": "Apollo Explorer Sandbox",
        "short_name": "Apollo Explorer Sandbox",
        "start_url": "/",
        "display": "standalone",
        "theme_color": "#ffffff",
        "icons": [
            {
                "src": "apollographql_logo_192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "apollographql_logo_144.png",
                "sizes": "144x144",
                "type": "image/png"
            }
    
        ]
      }
    })
  ]
})
