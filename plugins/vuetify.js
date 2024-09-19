// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
})

nuxtApp.vueApp.use(vuetify)
})