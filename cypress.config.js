const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "idom4e",
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://notes-serverless-app.com',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    viewportWidthBreakpoint: 768,
  },
  

});

