import js from '@eslint/js';
import mochaPlugin from 'eslint-plugin-mocha';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

export default [
	js.configs.recommended,
	mochaPlugin.configs.recommended,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	{
		settings: {
			react: {
				version: 'detect'
			}
		}
	},
	{
		ignores: [
			'built/*',
			'public/*'
		]
	},
	{
		languageOptions: {
			globals: {
				...globals.node
			},
			ecmaVersion: 2020,
			sourceType: 'module'
		},
		rules: {
			'comma-dangle': 'error',
			eqeqeq: 'error',
			'guard-for-in': 'error',
			'new-cap': 'error',
			'no-caller': 'error',
			'no-console': 'error',
			'no-extend-native': 'error',
			'no-irregular-whitespace': 'error',
			'no-loop-func': 'error',
			'no-multi-spaces': 'error',
			'no-multiple-empty-lines': ['error', { max: 1 }],
			'no-undef': 'error',
			'no-underscore-dangle': 'error',
			'no-unused-vars': 'error',
			'no-var': 'error',
			'one-var': ['error', 'never'],
			quotes: ['error', 'single'],
			semi: 'error',
			'space-before-function-paren': 'error',
			'spaced-comment': 'error',
			strict: ['error', 'global'],
			'wrap-iife': 'error'
		}
	},
	{
		files: [
			'**/*.jsx'
		],
		languageOptions: {
			globals: {
				...globals.browser
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		plugins: {
			react: reactPlugin
		},
		rules: {
			'react/prop-types': 'off'
		}
	},
	{
		files: [
			'test/**/*.test.js'
		],
		languageOptions: {
			globals: {
				...globals.mocha
			}
		},
		plugins: {
			mocha: mochaPlugin
		},
		rules: {
			'mocha/no-exclusive-tests': 'error',
			'mocha/no-mocha-arrows': 'off'
		}
	}
];
