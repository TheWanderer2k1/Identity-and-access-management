// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      AUTHORIZATION_ENDPOINT: process.env.AUTHORIZATION_ENDPOINT,
      TOKEN_ENDPOINT: process.env.TOKEN_ENDPOINT,
      OAUTH_RESPONSE_TYPE: 'code',
      REDIRECT_URI: process.env.LOGIN_CALLBACK,
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      AUTH_SCOPES: process.env.AUTH_SCOPES,
      TOKEN_SCOPES: process.env.TOKEN_SCOPES
    }
  },
  devServer: {
    port: parseInt(process.env.PORT || '3001')
  }
})
