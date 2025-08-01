// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['shadcn-docs-nuxt'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'cn', // language 2 letters code (e.g. 'fr')
        name: '简体中文', // language name (e.g. 'Français')
        language: 'zh-CN', // language ISO code (e.g. 'fr-FR')
      },
    ],
  },
  compatibilityDate: '2024-07-06',
  app: {
    baseURL: '/'
  }
});
