const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true, //quando estiver executando testes, será escondida as credenciais
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1300,
});
