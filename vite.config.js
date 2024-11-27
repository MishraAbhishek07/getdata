// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()], // Place plugins directly here
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com', // The base URL for your Google Apps Script
        changeOrigin: true,  // This is necessary for proper CORS handling
        secure: false, // Set to false if the target is using HTTP instead of HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix from the path when sending request
      },
    },
  },
};
