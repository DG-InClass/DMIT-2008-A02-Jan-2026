const path = require('path'); // This is the Common JS way...
// The 'path' module is one that come with NodeJS
// It contains utilities to safely assemble file paths

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // The __dirname is a global variable (thanks to NodeJS)
    // that holds the absolute path of our Node project's directory
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
