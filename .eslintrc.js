module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  extends: ['./configs/eslint/.eslintrc.base.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./configs/eslint/.eslintrc.typescript.js']
    },
    {
      files: ['**/shared/ui/components/**/*.[jt]sx?(x)'],
      rules: {
        'no-restricted-imports': 'off',
        'react/button-has-type': 'off'
      }
    }
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn'
  },
  globals: {
    __IS_DEV__: true
  }
};
