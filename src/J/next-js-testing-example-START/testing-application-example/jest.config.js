// ~/jest.config.js
const nextJest = require('next/jest');
// Note: the line above uses the CommonJS approach to bringing in (importing)
// JavaScript modules. Whenever you see the require('module/path') function call,
// that's a clear indicator of the older CommonJS approach.

const createJestConfig = nextJest({
    // Provide the path to our Next.js app to load next.config.js and .env files for our tests
    dir: './', // dir is short for directory
});

// Add our custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
}

// We'll use the createJestConfig to export our full configuration settings
//createJestConfig is exported this way to ensure that next/jest can load the Next.js configuration setting
module.exports = createJestConfig(customJestConfig)
