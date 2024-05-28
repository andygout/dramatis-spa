const path = require('path');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
	mode: 'none', // i.e. not production or development (see: https://webpack.js.org/configuration/mode).
	target: 'node',
	node: {
		__dirname: false
	},
	externals: [nodeExternals()],
	entry: './src/server/app.js',
	output: {
		path: path.join(__dirname, 'built'),
		filename: 'main.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										node: '22'
									}
								}
							],
							'@babel/preset-react'
						]
					}
				}
			}
		]
	},
	plugins: [
		new FaviconsWebpackPlugin({
			logo: './src/client/assets/favicon.ico',
			mode: 'light' // Generates only a single favicon for fast compilation time in development mode.
		})
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['node_modules'],
		descriptionFiles: ['package.json']
	}
};

const clientConfig = {
	mode: 'none', // i.e. not production or development (see: https://webpack.js.org/configuration/mode).
	entry: [
		'./src/client/stylesheets/index.scss',
		'./src/react/client-mount.jsx'
	],
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'main.js'
	},
	devtool: 'eval-cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass')
						}
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										node: '22'
									}
								}
							],
							'@babel/preset-react'
						]
					}
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new webpack.ProvidePlugin({
			process: 'process/browser'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
};

module.exports = [
	serverConfig,
	clientConfig
];
