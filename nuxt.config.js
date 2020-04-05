module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "covid19",
        name: "covid19",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/vueflags.js" },
    { src: "@/plugins/breakpoints.js" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "nuxt-i18n",
  ],
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
    vueI18n: {
      fallbackLocale: "pt-BR",
      messages: {
        en: {
          title: "Covid19",
          introduction: "",
          dropdown: "",
          graph_cases_confirmed: "Cases confirmed",
          graph_deaths: "Deaths",
          info_title: "",
          info_description: "",
          info_: "",
          links: "",
        },
        "pt-BR": {
          title: "Covid19",
          introduction:
            "A pandemia da COVID-19, doença respiratória causada pelo novo coronavírus (SARS-CoV-2) vem causando grande preocupação no mundo em função da rapida disseminação da infecção. Aqui você vai poder acompanhar em tempo real os numeros da covid19 no mundo.",
          dropdown: "Selecione um país",
          graph_cases_confirmed: "Casos confirmados",
          graph_deaths: "Mortes",
          info_title: "Covid19",
          info_description:
            "A doença transmite-se através de gotículas produzidas nas vias respiratórias das pessoas infetadas. Ao espirrar ou tossir, estas gotículas podem ser inaladas ou atingir diretamente a boca, nariz ou olhos de pessoas em contacto próximo. Estas gotículas podem também depositar-se em objetos e superfícies próximos que podem infetar quem nelas toque e leve a mão aos olhos, nariz ou boca, embora esta forma de transmissão seja menos comum. O intervalo de tempo entre a exposição ao vírus e o início dos sintomas é de 2 a 14 dias, sendo em média 5 dias. Entre os fatores de risco estão a idade avançada e doenças crónicas graves como doenças cardiovasculares, diabetes ou doenças pulmonares. O diagnóstico é suspeito com base nos sintomas e fatores de risco e confirmado com ensaios em tempo real de reação em cadeia de polimerase para deteção de ARN do vírus em amostras de muco ou de sangue.",
          info_: "",
          links: "Links úteis",
        },
      },
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
