import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

// ESLint configuration for the client-side React application.
export default [
  // Ignore the 'dist' directory from linting
  { ignores: ['dist'] },
  {
    // Apply these configurations to all .js and .jsx files
    files: ['**/*.{js,jsx}'],
    // Language options for parsing JavaScript
    languageOptions: {
      ecmaVersion: 2020, // Specify ECMAScript version
      globals: globals.browser, // Define browser global variables
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version for parsing
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Allow ES modules
      },
    },
    // Register ESLint plugins
    plugins: {
      'react-hooks': reactHooks, // Plugin for React Hooks specific rules
      'react-refresh': reactRefresh, // Plugin for React Fast Refresh rules
    },
    // Define and override ESLint rules
    rules: {
      ...js.configs.recommended.rules, // Apply recommended JavaScript rules
      ...reactHooks.configs.recommended.rules, // Apply recommended React Hooks rules
      // Custom rule: Warn about unused variables, but ignore those starting with an uppercase letter (e.g., React components)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // Custom rule: Warn if components are not exported as constants, which can break React Fast Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
