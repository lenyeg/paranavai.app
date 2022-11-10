module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'vue/script-setup-no-uses-vars': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
  },
}
