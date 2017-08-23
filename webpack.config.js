const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './scripts/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
}
