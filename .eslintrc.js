module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    camelcase: 'off',
    'consistent-return': 'off',
    'eslintimport/no-extraneous-dependencies': 'off',
    'no-empty': 'off',
    'no-lone-blocks': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'react/button-has-type': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react-hooks/exhaustive-deps': 'off',
  },
}
