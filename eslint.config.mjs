import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import _import from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import testingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    {
        ignores: ['**/dist/', '**/docs/', '**/node_modules/'],
    },
    ...fixupConfigRules(
        compat.extends(
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:import/errors',
            'plugin:import/warnings',
            'plugin:import/typescript',
            'plugin:jest-dom/recommended',
            'plugin:testing-library/react',
            'plugin:react/recommended',
            'plugin:react-hooks/recommended',
            'plugin:prettier/recommended',
            'prettier',
        ),
    ),
    {
        plugins: {
            '@typescript-eslint': fixupPluginRules(typescriptEslint),
            import: fixupPluginRules(_import),
            react: fixupPluginRules(react),
            'testing-library': fixupPluginRules(testingLibrary),
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },

            parser: tsParser,
            ecmaVersion: 8,
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    impliedStrict: true,
                    experimentalObjectRestSpread: true,
                },

                allowImportExportEverywhere: true,
            },
        },

        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },

            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
            },

            react: {
                version: 'detect',
            },
        },

        rules: {
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',

            '@typescript-eslint/no-unused-vars': [
                2,
                {
                    argsIgnorePattern: '^_',
                },
            ],

            '@typescript-eslint/no-var-requires': 'off',

            'import/order': [
                'error',
                {
                    groups: ['external', 'internal'],
                    'newlines-between': 'always-and-inside-groups',
                },
            ],

            'sort-imports': [
                'warn',
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                },
            ],

            'react/display-name': 'off',
            'react/jsx-boolean-value': ['warn', 'never'],

            'react/jsx-sort-props': [
                'error',
                {
                    callbacksLast: true,
                },
            ],

            'react/jsx-wrap-multilines': 'error',
            'react/no-array-index-key': 'error',
            'react/no-multi-comp': 'off',
            'react/prop-types': 'off',
            'react/self-closing-comp': 'warn',
        },
    },
]
