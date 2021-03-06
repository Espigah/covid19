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
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", href: "/favicon-16x16.png" }
    ]
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
    { src: "@/plugins/analytics.js" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
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
    "nuxt-i18n"
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
          links: ""
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
          Afghanistan: "Afeganistão",
          "ALA Aland Islands": "Ilhas Aland ALA",
          Albania: "Albânia",
          Algeria: "Argélia",
          "American Samoa": "Samoa Americana",
          Andorra: "Andorra",
          Angola: "Angola",
          Anguilla: "Anguilla",
          Antarctica: "Antártica",
          "Antigua and Barbuda": "",
          Argentina: "Argentina",
          Armenia: "Armênia",
          Aruba: "Aruba",
          Australia: "Austrália",
          Austria: "Áustria",
          Azerbaijan: "Azerbaijão",
          Bahamas: "Bahamas",
          Bahrain: "Bahrain",
          Bangladesh: "Bangladesh",
          Barbados: "Barbados",
          Belarus: "Bielorrússia",
          Belgium: "Bélgica",
          Belize: "Belize",
          Benin: "Benin",
          Bermuda: "Bermudas",
          Bhutan: "Butão",
          Bolivia: "Bolívia",
          "Bosnia and Herzegovina": "Bósnia e Herzegovina,",
          Botswana: "Botsuana",
          "Bouvet Island": "Ilha Bouvet",
          Brazil: "Brasil",
          "British Indian Ocean Territory":
            "Território Britânico do Oceano Índico",
          "British Virgin Islands": "Ilhas Virgens Britânicas",
          "Brunei Darussalam": "Brunei Darussalam",
          Bulgaria: "Bulgária",
          "Burkina Faso": "Burkina Faso",
          Burundi: "Burundi",
          Cambodia: "Camboja",
          Cameroon: "Camarões",
          Canada: "Canadá",
          "Cape Verde": "Cabo Verde",
          "Cayman Islands": "Ilhas Cayman",
          "Central African Republic": "República Centro-Africana",
          Chad: "Chade",
          Chile: "Chile",
          China: "China",
          "Christmas Island": "Ilha do Natal",
          "Cocos (Keeling) Islands": "Ilhas Cocos (Keeling)",
          Colombia: "Colômbia",
          Comoros: "Comores",
          "Congo (Brazzaville)": "Congo (Brazzaville)",
          "Congo (Kinshasa)": "Congo (Kinshasa)",
          "Cook Islands": "Ilhas Cook",
          "Costa Rica": "Costa Rica",
          Croatia: "Croácia",
          Cuba: "Cuba",
          Cyprus: "Chipre",
          "Czech Republic": "República Checa",
          "Côte d'Ivoire": "Costa do Marfim",
          Denmark: "Dinamarca",
          Djibouti: "Djibuti",
          Dominica: "Dominica",
          "Dominican Republic": "República Dominicana",
          Ecuador: "Equador",
          Egypt: "Egito",
          "El Salvador": "El Salvador",
          "Equatorial Guinea": "Guiné Equatorial",
          Eritrea: "Eritreia",
          Estonia: "Estônia",
          Ethiopia: "Etiópia",
          "Falkland Islands (Malvinas)": "Ilhas Falkland (Malvinas)",
          "Faroe Islands": "Ilhas Faroe",
          Fiji: "Fiji",
          Finland: "Finlândia",
          France: "França",
          "French Guiana": "Guiana Francesa",
          "French Polynesia": "Polinésia Francesa",
          "French Southern Territories": "Territórios Franceses do Sul",
          Gabon: "Gabão",
          Gambia: "Gâmbia",
          Georgia: "Georgia",
          Germany: "Alemanha",
          Ghana: "Gana",
          Gibraltar: "Gibraltar",
          Greece: "Grécia",
          Greenland: "Gronelândia",
          Grenada: "Granada",
          Guadeloupe: "Guadalupe",
          Guam: "Guam",
          Guatemala: "Guatemala",
          Guernsey: "Guernsey",
          Guinea: "Guiné",
          "Guinea-Bissau": "Guiné-Bissau",
          Guyana: "Guiana",
          Haiti: "Haiti",
          "Heard and Mcdonald Islands": "Ilhas Heard e Mcdonald",
          "Holy See (Vatican City State)":
            "Santa Sé (Estado da Cidade do Vaticano)",
          Honduras: "Honduras",
          "Hong Kong, SAR China": "Hong Kong RAE China",
          Hungary: "Hungria",
          Iceland: "Islândia",
          India: "Índia",
          Indonesia: "Indonésia",
          "Iran, Islamic Republic of": "Irã (Republic Islâmica do Irã",
          Iraq: "Iraque",
          Ireland: "Irlanda",
          "Isle of Man": "Ilha de Man",
          Israel: "Israel",
          Italy: "Itália",
          Jamaica: "Jamaica",
          Japan: "Japão",
          Jersey: "Jersey",
          Jordan: "Jordânia",
          Kazakhstan: "Cazaquistão",
          Kenya: "Quênia",
          Kiribati: "Kiribati",
          "Korea (North)": "Coreia do Norte",
          "Korea (South)": "Coreia do Sul",
          Kuwait: "Kuwait",
          Kyrgyzstan: "Quirguistão",
          "Lao PDR": "PDR do Laos",
          Latvia: "Letônia",
          Lebanon: "Líbano",
          Lesotho: "Lesoto",
          Liberia: "Libéria",
          Libya: "Líbia",
          Liechtenstein: "Liechtenstein",
          Lithuania: "Lituânia",
          Luxembourg: "Luxemburgo",
          "Macao, SAR China": "Macau SAR China",
          "Macedonia, Republic of": "República da Macedônia",
          Madagascar: "Madagáscar",
          Malawi: "Malawi",
          Malaysia: "Malásia",
          Maldives: "Maldivas",
          Mali: "Mali",
          Malta: "Malta",
          "Marshall Islands": "Ilhas Marshall",
          Martinique: "Martinica",
          Mauritania: "Mauritânia",
          Mauritius: "Maurícia",
          Mayotte: "Mayotte",
          Mexico: "México",
          "Micronesia, Federated States of": "Estados Federados da Micronésia",
          Moldova: "Moldova",
          Monaco: "Mônaco",
          Mongolia: "Mongólia",
          Montenegro: "Montenegro",
          Montserrat: "Montserrat",
          Morocco: "Marrocos",
          Mozambique: "Moçambique",
          Myanmar: "Myanmar",
          Namibia: "Namíbia",
          Nauru: "Nauru",
          Nepal: "Nepal",
          Netherlands: "Países Baixos",
          "Netherlands Antilles": "Antilhas Holandesas",
          "New Caledonia": "Nova Caledônia",
          "New Zealand": "Nova Zelândia",
          Nicaragua: "Nicarágua",
          Niger: "Níger",
          Nigeria: "Nigéria",
          Niue: "Niue",
          "Norfolk Island": "Ilha Norfolk",
          "Northern Mariana Islands": "Ilhas Marianas do Norte",
          Norway: "Noruega",
          Oman: "Omã",
          Pakistan: "Paquistão",
          Palau: "Palau",
          "Palestinian Territory": "Território Palestino",
          Panama: "Panamá",
          "Papua New Guinea": "Papua Nova Guiné",
          Paraguay: "Paraguai",
          Peru: "Peru",
          Philippines: "Filipinas",
          Pitcairn: "Pitcairn",
          Poland: "Polônia",
          Portugal: "Portugal",
          "Puerto Rico": "Porto Rico",
          Qatar: "Catar",
          "Republic of Kosovo": "República do Kosovo",
          Romania: "Roménia",
          "Russian Federation": "Federação Russa",
          Rwanda: "Ruanda",
          Réunion: "Reunião",
          "Saint Helena": "Santa Helena",
          "Saint Kitts and Nevis": "São Cristóvão e Nevis",
          "Saint Lucia": "Santa Lúcia",
          "Saint Pierre and Miquelon": "São Pedro e Miquelon",
          "Saint Vincent and Grenadines": "São Vicente e Granadinas",
          "Saint-Barthélemy": "São Bartolomeu",
          "Saint-Martin (French part)": "Saint-Martin (parte francesa)",
          Samoa: "Samoa",
          "San Marino": "San Marino",
          "Sao Tome and Principe": "São Tomé e Príncipe",
          "Saudi Arabia": "Arábia Saudita",
          Senegal: "Senegal",
          Serbia: "Sérvia",
          Seychelles: "Seychelles",
          "Sierra Leone": "Serra Leoa",
          Singapore: "Cingapura",
          Slovakia: "Eslováquia",
          Slovenia: "Eslovénia",
          "Solomon Islands": "Ilhas Salomão",
          Somalia: "Somália",
          "South Africa": "África do Sul",
          "South Georgia and the South Sandwich Islands":
            "Ilhas Geórgia do Sul e Sandwich do Sul",
          "South Sudan": "Sudão do Sul",
          Spain: "Espanha",
          "Sri Lanka": "Sri Lanka",
          Sudan: "Sudão",
          Suriname: "Suriname",
          "Svalbard and Jan Mayen Islands": "Ilhas Svalbard e Jan Mayen",
          Swaziland: "Suazilândia",
          Sweden: "Suécia",
          Switzerland: "Suíça",
          "Syrian Arab Republic (Syria)": "República Árabe da Síria (Síria)",
          "Taiwan, Republic of China": "Taiwan República da China",
          Tajikistan: "Tajiquistão",
          "Tanzania, United Republic of": "República Unida da Tanzânia",
          Thailand: "Tailândia",
          "Timor-Leste": "Timor-Leste",
          Togo: "Ir",
          Tokelau: "Tokelau",
          Tonga: "Tonga",
          "Trinidad and Tobago": "Trinidad e Tobago",
          Tunisia: "Tunísia",
          Turkey: "Peru_",
          Turkmenistan: "Turquemenistão",
          "Turks and Caicos Islands": "Ilhas Turcas e Caicos",
          Tuvalu: "Tuvalu",
          Uganda: "Uganda",
          Ukraine: "Ucrânia",
          "United Arab Emirates": "Emirados Árabes Unidos",
          "United Kingdom": "Reino Unido",
          "United States of America": "Estados Unidos da America",
          Uruguay: "Uruguai",
          "US Minor Outlying Islands": "Ilhas Menores Distantes dos EUA",
          Uzbekistan: "Usbequistão",
          Vanuatu: "Vanuatu",
          "Venezuela (Bolivarian Republic)":
            "Venezuela (República Bolivariana)",
          "Viet Nam": "Vietname",
          "Virgin Islands, US": "Ilhas Virgens Americanas",
          "Wallis and Futuna Islands": "Ilhas Wallis e Futuna",
          "Western Sahara": "Saara Ocidental",
          Yemen: "Iémen",
          Zambia: "Zâmbia",
          Zimbabwe: "Zimbábue"
        }
      }
    }
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
    extend(config, ctx) {}
  }
};
