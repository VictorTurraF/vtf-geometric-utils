module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript/base',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off'
  },
  env: {
    jest: true,
    node: true
  }
};