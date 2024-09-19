// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
 
export default defineNuxtConfig({
  compatibilityDate: '2024-09-19',
  devtools: { enabled: true },
  css: [
    '@/node_modules/vuetify/lib/styles/main.css',
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
 ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})