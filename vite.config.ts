import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      Routes: path.resolve(__dirname, './src/Routes'),
      Components: path.resolve(__dirname, './src/Components'),
      Styles: path.resolve(__dirname, './src/Styles'),
      Types: path.resolve(__dirname, './src/Types'),
      consts: path.resolve(__dirname, './src/consts'),
      API: path.resolve(__dirname, './src/API'),
      Queries: path.resolve(__dirname, './src/Queries'),
      Store: path.resolve(__dirname, './src/Store'),
      Providers: path.resolve(__dirname, './src/Providers'),
      Pages: path.resolve(__dirname, './src/Pages'),
      utils: path.resolve(__dirname, './src/utils'),
      Context: path.resolve(__dirname, './src/Context'),
    },
  },
});
