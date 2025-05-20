import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {ignores: ['dist/', 'node_modules/']},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.all,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-no-literals': 'off',
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'react/jsx-indent': ['error', 2],
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];