const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
	watch: true,
	cache: true,
	devtool: '#cheap-module-eval-source-map',
	context: __dirname,
	entry: {
		app: './src/index.js'
	},
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: [
						'react', 'es2015', 'stage-0'
					],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
				}
			}
		]
	},
	plugins: debug
		? []
		: [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurrenceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
		]
}
