module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest'
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['@babel/eslint-plugin'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.vue']
      }
    }
  ],
  rules: {
    'no-undef': 0,
    'no-unused-vars': 0,
    'vue/require-default-prop': 0,
    'vue/no-unused-components': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-reserved-component-names': 0
  }
};
