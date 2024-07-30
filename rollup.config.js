import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import esbuild from 'rollup-plugin-esbuild';
import scss from 'rollup-plugin-scss';
import * as sass from 'sass';

const serverBundle = {
	input: 'src/server/app.js',
	output: {
		file: 'built/main.js'
	},
	plugins: [
		esbuild({
			// All options are optional
			include: /\.[jt]sx?$/, // default, inferred from `loaders` option
			exclude: /node_modules/, // default
			sourceMap: true, // default
			minify: process.env.NODE_ENV === 'production',
			target: 'es2017', // default, or 'es20XX', 'esnext'
			jsx: 'transform', // default, or 'preserve'
			jsxFactory: 'React.createElement',
			jsxFragment: 'React.Fragment',
			// Add extra loaders
			loaders: {
				// Add .json files support
				// require @rollup/plugin-commonjs
				'.json': 'json',
				// Enable JSX in .js files too
				'.js': 'jsx'
			}
		})
	]
};

const clientScriptsBundle = {
	input: 'src/react/client-mount.jsx',
	output: {
		file: 'public/main.js',
		format: 'iife'
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
	plugins: [
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
]
