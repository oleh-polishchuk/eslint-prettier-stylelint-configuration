/**
 * ESLint configuration
 *
 * @see https://eslint.org/docs/user-guide/configuring
 */

require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: [],
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: [],
      },
    },
  },
}
