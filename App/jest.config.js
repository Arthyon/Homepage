module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest"
  },
  testMatch: ["**/tests/**/*.ts?(x)", "**/tests/**/*.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  collectCoverage: true,
  collectCoverageFrom: ["App/**/*.ts", "App/**/*.tsx"],
  coverageReporters: ["lcov"]
};
