import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: { tailwindcss: {} }
  },
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})
