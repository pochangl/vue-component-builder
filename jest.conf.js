module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  moduleFileExtensions: [
    'js',
    'ts'
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "**/__tests__/*.spec.ts"
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/node_modules/**'
  ]
}
