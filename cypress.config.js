const { defineConfig } = require('cypress');

module.exports = defineConfig({//Function Call
  e2e: {
    baseUrl: 'http://localhost',//Application URL
  },
  fixturesFolder: false,
  video: false,
});
