module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@modules/(.*)': 'src/modules/$1',
    '@theme/(.*)': 'src/theme/$1',
  },
}
