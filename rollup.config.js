import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import scss from 'rollup-plugin-scss';
import watchGlobs from 'rollup-plugin-watch-globs';
import * as sass from 'sass';

const serverBundle = {
	input: 'src/server/app.js',
	output: {
		file: 'built/main.js',
		sourcemap: 'inline'
	},
	external: [
		'express',
		'express-session',
		'node:http',
		'prop-types',
		'react',
		'react-bootstrap-typeahead',
		'react-dom/server',
		'react-helmet',
		'react-redux',
		'react-router-dom',
		'react-router-dom/server.js',
		'redux',
		'redux-thunk'
	],
	watch: {
		clearScreen: false
	},
	plugins: [
		esbuild({
			jsxFactory: 'React.createElement',
			jsxFragment: 'React.Fragment'
		}),
		copy({
			targets: [
				{ src: './src/client/assets/favicon.ico', dest: 'built/assets' }
			]
		})
	]
};

const clientScriptsBundle = {
	input: 'src/react/client-mount.jsx',
	output: {
		file: 'public/main.js',
		format: 'iife'
	},
	watch: {
		clearScreen: false
	},
	plugins: [
		nodeResolve({
			browser: true,
			extensions: ['.js', '.jsx']
		}),
		babel({
			babelHelpers: 'bundled',
			presets: ['@babel/preset-react'],
			extensions: ['.js', '.jsx']
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
};

const clientStylesBundle = {
	input: 'src/client/stylesheets/index.scss',
	output: {
		dir: 'public'
	},
	watch: {
		clearScreen: false
	},
	plugins: [
		watchGlobs([
			'src/client/stylesheets/**/*.scss'
		]),
		scss({
			fileName: 'main.css',
			failOnError: true,
			sass
		})
	]
};

export default [
	serverBundle,
	clientScriptsBundle,
	clientStylesBundle
];