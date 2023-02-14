import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      VitePluginRadar({
        // Google Analytics tag injection
        analytics: {
          id: env.VITE_GOOGLE_ANALYTICS_ID
        }
      })
    ]
  }
})
