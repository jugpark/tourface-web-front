import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue2(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'https://www.koreaexim.go.kr',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
                secure: false,
                ws: true
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                @import "./src/styles/scss/reset.scss";
                @import "./src/styles/scss/common.scss";
                @import "./src/styles/scss/icon.scss";
                `
            }
        }
    }
})
