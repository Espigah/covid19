module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
  moduleFileExtensions: ["js", "vue", "json"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/pages/**/*.vue"],
  coverageReporters: ["html", "text-summary"],
  reporters: [
    "default",
    [
      "jest-stare",
      {
        resultDir: "__test_result__",
        reportTitle: "Covid",
        additionalResultsProcessors: ["jest-junit","jest-html-reporter", "jest-junit"],
        coverageLink: "../coverage/index.html"
      }
    ]
  ]
};
