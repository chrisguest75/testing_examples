module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'allure-jest/node',
  testEnvironmentOptions: {
    resultsDir: "../results",
    links: [
      { name: "issue", urlTemplate: "https://issues.example.com/%s" },
      { name: "tms", urlTemplate: "https://tms.example.com/%s" },
    ],
  },
  testRegex: 'tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['jest-extended/all'],
}
