import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DataHub-55-School/', // <- имя репозитория на GitHub
})
