module.exports = {
  extends: './node_modules/@percaysoinform/linting/eslintrc.js',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [],
  rules: {
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
};
