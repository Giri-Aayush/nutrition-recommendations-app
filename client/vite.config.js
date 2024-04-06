import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from './src/config/aliases'
import path from 'path'

const SRC = `./src`
const aliases = alias(SRC)

const resolvedAliases = Object.fromEntries(Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: resolvedAliases,
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
    host: true,
  },
})
