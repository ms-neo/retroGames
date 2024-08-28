import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
    proxy: {
      '/': {
        port:5173,
        target: 'https://retrogames-e0ob.onrender.com',
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //     configure: (proxy, _options) => {
    //       proxy.on('error', (err, _req, _res) => {
    //         console.log('proxy error', err);
    //       });
    //       proxy.on('proxyReq', (proxyReq, req, _res) => {
    //         console.log('Sending Request to the Target:', req.method, req.url);
    //       });
    //       proxy.on('proxyRes', (proxyRes, req, _res) => {
    //         console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
    //       });
    //     }

    //   },
    },

    
  },
  build: {
    //  to NOT wanting increase the chunkSizeWarningLimit and focus more on solving the actual size issue
    rollupOptions: {
      input: {
        app: './index.html', // default
      },
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
}
})
