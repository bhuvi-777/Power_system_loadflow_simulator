import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Power_system_loadflow_simulator/',
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
});
