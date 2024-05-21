import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false, //salvar e atualizar pagina automatico
  plugins: [react()],
  server: {
    port: 3000,
  },
});
