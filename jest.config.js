module.exports = {
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/*.(test|spec).(js|jsx)'],
  name: "explore-emojis",
  jest: {
    "verbose": "true"
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/src/__mocks__/mocks.js',
  },
  moduleDirectories: ['node_modules'],
}