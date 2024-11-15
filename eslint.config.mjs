module.exports = {
  env: {
    browser: true,
    es2021: true,
    cypress: true // Adicione esta linha
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended' // Adicione esta linha para regras específicas do Cypress
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // Suas regras personalizadas, se houver
  }
};
