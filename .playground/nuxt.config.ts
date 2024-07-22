export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-18',

  extends: ['..'],

  modules: [
    '@nuxt/eslint',
  ],

  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },

  /* typescript: {
    includeWorkspace: true,
    tsConfig: {
      include: ['../../.release-it.ts'],
    },
  }, */
})
