const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {'^@/(.*)$': '<rootDir>/src/$1'},
  transform: {'^.+\\.js$': '<rootDir>/node_modules/babel-jest'},
  testMatch: ['**/**/**/*.(test|spec).(js|jsx|ts|tsx)'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: ['!**/node_modules/**']
}
