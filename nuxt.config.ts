// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
 
export default defineNuxtConfig({
  compatibilityDate: '2024-09-19',
  dev: true, // 开发模式开启
  ssr: false, // 关闭服务器端渲染
  devtools: { enabled: true },
  css: [
    '@/node_modules/vuetify/lib/styles/main.css',
    '@/node_modules/element-plus/dist/index.css',
    '@/node_modules/element-plus/theme-chalk/display.css',
    '@/assets/css/common.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules:[
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    
    '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
  vite: {
    server: {
      hmr: true, // 启用热模块替换
      watch: {
        usePolling: true, // 使用轮询监视文件变化
      },
    },
    define: {
      'process.env.DEBUG': false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  postcss: {
    plugins:{
      // 自动添加浏览器前缀
      autoprefixer: {},
      // 预配置的tailwindcss，用于快速利用已有的组合css
      tailwindcss: {},
    }
  },
})