module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/App.vue', '!<rootDir>/src/*?(.d).ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  coverageReporters: ['json', 'lcov'],
  maxWorkers: '50%',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  // moduleNameMapper: {},
  testEnvironment: 'jsdom',
  testMatch: ['**/*.(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.vue$': require.resolve('vue-jest'),
    '^.+\\.tsx?$': require.resolve('ts-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
require.resolve('jest-transform-stub'),
  },
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],
};
