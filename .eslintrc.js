module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    // 自定義規則
  },
};
