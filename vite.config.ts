import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [TDesignResolver({
                library: 'vue-next'
            })],
            imports: ["vue", "vue-router"],
            dts: "src/types/auto-imports.d.ts"
            // resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [TDesignResolver({
                library: 'vue-next'
            })],
            // resolvers: [ElementPlusResolver()]
        }),
        // ElementPlus({
        //     useSource: true
        // })
        tailwindcss()
    ],
	resolve: {
        alias:{
            '@': path.resolve(__dirname, './src'),
            "../": path.resolve(__dirname, './src')
        },
    },
    base: '/',
    esbuild: {
        // drop: ['console', 'debugger'],
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://api.galleryimg.top/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
