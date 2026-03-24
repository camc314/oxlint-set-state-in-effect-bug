import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-compiler': reactHooks,
    },
    rules: {
      'react-compiler/set-state-in-render': 'error',
      'react-compiler/set-state-in-effect': 'error',
    },
  },
];
