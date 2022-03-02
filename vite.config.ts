import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  federation({
    name: 'host',
    filename: 'remoteEntry.js',
    remotes: {

      'static-remote': `http://localhost:3001/assets/remoteEntry.js`,
    },
    shared: ['vue'],
  }),

  ],
  build: {
    outDir: 'dist',
    assetsDir: 'js', // 兼容
    minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: envData.VITE_ENV_TYPE === 'production',
    //     drop_debugger: envData.VITE_ENV_TYPE === 'production',
    //   },
    // },
    rollupOptions: {
      // external: ['static-remote/Hello'],
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo
          console.log(name, '====1===')
          if (name) {
            let assetDir = '[ext]'
            if (/\.css$/.test(name)) {
              assetDir = 'css'
            } else if (/\.png|gif|jpg|jpeg$/.test(name)) {
              assetDir = 'img'
            }

            return `${assetDir}/[name]-[hash].[ext]`
          } else {
            return `assets/[name]-[hash].[ext]`
          }
        },
      },
    },
  },
})
