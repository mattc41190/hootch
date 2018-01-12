const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const PATHS = {
    app: path.resolve(__dirname, './src'),
    build: path.resolve(__dirname, './public')
};

module.exports = {
    watch: true,
    cache: true,
    devtool: 'source-map',
    context: __dirname,
    entry: {
        app: `${PATHS.app}/index.js`
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react', 'es2015', 'stage-0'
                    ],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties']
                }
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }, {
                test: /\.jpg$/,
                loader: 'file-loader'
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader? limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: debug
        ? []
        : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
        ]
};
