import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration file.
// This file is used to configure the Vite development server and build process.
// Learn more: https://vitejs.dev/config/
export default defineConfig({
  // Configure Vite plugins.
  // @vitejs/plugin-react provides React Fast Refresh and other React-specific optimizations.
  plugins: [react()],
})
