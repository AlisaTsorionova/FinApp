module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'jsx-a11y/control-has-associated-label': 0,
  },
};
