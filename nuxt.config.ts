// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  modules: [
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.BASE_URL,
      mockActive: process.env.MOCK_ACTIVE,
      mockBaseUrl: process.env.MOCK_BASE_URL,
    },
  },

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
  },
}) 
