const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const serverConfig = {
	target: 'node',
	externals: [nodeExternals()],
	entry: './src/server/app.js',
	output: {
		path: path.join(__dirname, 'built'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				loader: 'babel-loader',
				options: {
					presets: ['react', 'latest']
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			WEBPACK_CONFIG_IS_NODE: true
		})
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['node_modules'],
		descriptionFiles: ['package.json']
	}
};

const clientConfig = {
	entry: {
		main: [
			'./src/client/stylesheets/index.scss',
			'./src/react/client-mount.jsx'
		]
	},
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'main.js'
	},
	devtool: 'cheap-module-eval-source-map',
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader!sass-loader')
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'latest']
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'main.css',
			allChunks: true,
			disable: false
		}),
		new webpack.DefinePlugin({
			WEBPACK_CONFIG_IS_NODE: false
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
