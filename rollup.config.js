import path from 'node:path';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import sassPlugin from 'rollup-plugin-sass';
import watchGlobs from 'rollup-plugin-watch-globs';
import * as sass from 'sass';

const serverBundle = {
	input: 'src/server/app.js',
	output: {
		file: 'built/main.js',
		sourcemap: 'inline'
	},
	external: [
		'@reduxjs/toolkit',
		'@reduxjs/toolkit/query/react',
		'express',
		'express-session',
		'morgan',
		'node:http',
		'node:path',
		'node:url',
		'react',
		'react/jsx-runtime',
		'react-bootstrap-typeahead',
		'react-dom/server',
		'react-redux',
		'react-router',
		'serve-favicon'
	],
	watch: {
		clearScreen: false
	},
	plugins: [
		esbuild({
			jsx: 'automatic'
		}),
		copy({
			targets: [
				{ src: './src/server/assets/favicon.ico', dest: 'built/assets' }
			]
		})
	]
};

const clientScriptsBundle = {
	input: 'src/react/client-mount.jsx',
	output: {
		file: 'public/scripts/main.js',
		format: 'iife'
	},
	watch: {
		clearScreen: false
	},
	onwarn: (warning, warn) => {
		if (
			warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
			/"use client"/.test(warning.message || '')
		) {
			return; // Silence only this specific warning.
		}
		warn(warning); // Keep all other warnings.
	},
	plugins: [
		nodeResolve({
			browser: true,
			extensions: ['.js', '.jsx']
		}),
		babel({
			babelHelpers: 'bundled',
			presets: [
				[
					'@babel/preset-react',
					{ runtime: 'automatic' }
				]
			],
			extensions: ['.js', '.jsx'],
			exclude: 'node_modules/**'
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
};

const clientStylesBundle = {
	// Rollup requires a JavaScript entry point.
	// index.js is a placeholder for this purpose.
	input: 'src/client/stylesheets/index.js',
	output: {
		dir: 'public'
	},
	watch: {
		clearScreen: false
	},
	plugins: [
		watchGlobs([
			'src/client/stylesheets/**/*.css'
		]),
		copy({
			targets: [
				{
					src: 'src/client/stylesheets/**/*.css',
					dest: 'public/stylesheets',
					flatten: false
				},
				{
					src: 'node_modules/react-bootstrap-typeahead/css/Typeahead.css',
					dest: 'public/stylesheets',
					rename: 'react-bootstrap-typeahead.css'
				},
				{
					src: 'node_modules/react-bootstrap-typeahead/css/Typeahead.bs5.css',
					dest: 'public/stylesheets',
					rename: 'react-bootstrap-typeahead.bs5.css'
				}
			]
		})
	]
};

const clientScssImportsStylesBundle = {
	input: 'src/client/stylesheets/scss-imports/index.scss',
	output: {
		dir: 'public'
	},
	watch: {
		clearScreen: false
	},
	plugins: [
		watchGlobs([
			'src/client/stylesheets/scss-imports/**/*.scss'
		]),
		sassPlugin({
			output: 'public/stylesheets/scss-imports.css',
			api: 'modern',
			runtime: sass,
			options: {
				// Let @import find packages' stylesheets by looking in node_modules directory.
				loadPaths: [
					path.resolve('node_modules')
				],
				// Until dependencies have migrated to Sass's modern compiler API.
				silenceDeprecations: [
					'import',
					'global-builtin',
					'color-functions'
				]
			}
		})
	]
};

export default [
	serverBundle,
	clientScriptsBundle,
	clientStylesBundle,
	clientScssImportsStylesBundle
];
