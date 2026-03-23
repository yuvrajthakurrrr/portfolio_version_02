import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  // For GitHub Pages deployment, set base to your repo name
  // Example: if your repo is https://github.com/username/portfolio_version_02
  // then set base: '/portfolio_version_02/'
  // For custom domain or root deployment, use base: '/'
  const base = command === 'build' ? '/portfolio_version_02/' : '/'
  
  return {
    base,
    plugins: [
      // The React and Tailwind plugins are both required for Make, even if
      // Tailwind is not being actively used – do not remove them
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': path.resolve(__dirname, './src'),
      },
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})