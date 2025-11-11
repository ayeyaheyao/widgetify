/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  moduleNameMapper: {
    '^@/gadgets/(.*)$': '<rootDir>/src/gadgets/$1',
    '^@/resolvers/(.*)$': '<rootDir>/src/resolvers/$1'
  }
};
