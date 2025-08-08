// vite.config.ts
import { defineConfig } from "file:///C:/Users/SnhAenIgseAl/Desktop/vite-vue3-template/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///C:/Users/SnhAenIgseAl/Desktop/vite-vue3-template/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/SnhAenIgseAl/Desktop/vite-vue3-template/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/SnhAenIgseAl/Desktop/vite-vue3-template/node_modules/unplugin-vue-components/dist/resolvers.js";
import ElementPlus from "file:///C:/Users/SnhAenIgseAl/Desktop/vite-vue3-template/node_modules/unplugin-element-plus/dist/vite.mjs";
import vue from "file:///C:/Users/SnhAenIgseAl/Desktop/vite-vue3-template/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import seoPrerender from "file:///C:/Users/SnhAenIgseAl/Desktop/vite-vue3-template/node_modules/vite-plugin-seo-prerender/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\SnhAenIgseAl\\Desktop\\vite-vue3-template";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    seoPrerender({
      routes: [
        "/index",
        "detail/:id"
      ]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ElementPlus({
      useSource: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "../": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    host: "127.0.0.1"
    // proxy: {
    //     '/api': {
    //         target: 'https://pilipili-server.icu',
    //         // target: 'http://127.0.0.1:18848',
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, '')
    //     },
    // }
  },
  base: "/",
  esbuild: {
    // drop: ['console', 'debugger'],
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTbmhBZW5JZ3NlQWxcXFxcRGVza3RvcFxcXFx2aXRlLXZ1ZTMtdGVtcGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNuaEFlbklnc2VBbFxcXFxEZXNrdG9wXFxcXHZpdGUtdnVlMy10ZW1wbGF0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvU25oQWVuSWdzZUFsL0Rlc2t0b3Avdml0ZS12dWUzLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBFbGVtZW50UGx1cyBmcm9tICd1bnBsdWdpbi1lbGVtZW50LXBsdXMvdml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzZW9QcmVyZW5kZXIgZnJvbSAndml0ZS1wbHVnaW4tc2VvLXByZXJlbmRlcidcblxuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICB2dWUoKSxcbiAgICAgICAgc2VvUHJlcmVuZGVyKHtcbiAgICAgICAgICAgIHJvdXRlczogW1xuICAgICAgICAgICAgICAgICcvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdkZXRhaWwvOmlkJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9KSxcbiAgICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgICB9KSxcbiAgICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgICAgIH0pLFxuICAgICAgICBFbGVtZW50UGx1cyh7XG4gICAgICAgICAgICB1c2VTb3VyY2U6IHRydWVcbiAgICAgICAgfSlcbiAgICBdLFxuXHRyZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOntcbiAgICAgICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgICAgICBcIi4uL1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgICAgICAvLyBwcm94eToge1xuICAgICAgICAvLyAgICAgJy9hcGknOiB7XG4gICAgICAgIC8vICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9waWxpcGlsaS1zZXJ2ZXIuaWN1JyxcbiAgICAgICAgLy8gICAgICAgICAvLyB0YXJnZXQ6ICdodHRwOi8vMTI3LjAuMC4xOjE4ODQ4JyxcbiAgICAgICAgLy8gICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gfVxuICAgIH0sXG4gICAgYmFzZTogJy8nLFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgICAgLy8gZHJvcDogWydjb25zb2xlJywgJ2RlYnVnZ2VyJ10sXG4gICAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRVLFNBQVMsb0JBQW9CO0FBQ3pXLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxrQkFBa0I7QUFQekIsSUFBTSxtQ0FBbUM7QUFXekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLElBQ0osYUFBYTtBQUFBLE1BQ1QsUUFBUTtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1AsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDckMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1AsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDckMsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBLE1BQ1IsV0FBVztBQUFBLElBQ2YsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNILFNBQVM7QUFBQSxJQUNGLE9BQU07QUFBQSxNQUNGLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxPQUFPLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDMUM7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1Y7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBRVQ7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
