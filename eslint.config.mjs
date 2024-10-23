import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,



{
  "env": {
      "browser": true,
      "commonjs": true,
      "es2021": true,
      "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 12
  },
  "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "never"
      ],
      "no-trailing-spaces": [
          "error"
      ]
  }
}

];
