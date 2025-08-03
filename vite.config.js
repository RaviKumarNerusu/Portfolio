import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your GitHub repo name
const repoName = 'Portfolio'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
