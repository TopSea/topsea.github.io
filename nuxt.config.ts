// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  i18n: {
    defaultLocale: 'cn',
    locales: [
      {
        code: 'cn', // language 2 letters code (e.g. 'fr')
        name: '简体中文', // language name (e.g. 'Français')
        language: 'zh-CN', // language ISO code (e.g. 'fr-FR')
      },
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
    ],
  },
  compatibilityDate: '2024-07-06',
  app: {
    baseURL: '/'
  },
  // 禁用字体下载或配置为本地
  fonts: {
    provider: 'local'
  }
});
