import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-transition-group/TransitionGroupContext':
        'react-transition-group/cjs/TransitionGroupContext.js',
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: true,
    server: {
      deps: {
        inline: [
          '@mui/material',
          '@mui/icons-material',
          '@mui/system',
          '@emotion/react',
          '@emotion/styled',
          'react-transition-group',
        ],
      },
    },
  },
})
