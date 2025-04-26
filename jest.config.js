const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};