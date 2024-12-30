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
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'quotes': ['error', 'single']
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