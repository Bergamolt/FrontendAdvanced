module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'i18next'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'i18next/no-literal-string': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
