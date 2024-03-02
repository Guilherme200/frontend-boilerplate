// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  modules: [
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
  ],
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'], // => _isLodashDate
    ],
  },
}) 
