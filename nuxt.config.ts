// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  modules: [
    'dayjs-nuxt',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig: {
    public: {
      mockActive: process.env.MOCK_ACTIVE,
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
  },
}) 
