process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const path = require('path');
const config = require('./node_modules/react-scripts-ts/config/webpack.config.dev')

module.exports = {
    ...config,
    entry: {
        singleSpaEntry: './src/index.tsx',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'release'),

        library: 'reactApp',
        libraryTarget: 'window',
    },

    devServer: {
        headers: {
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Origin": "*",
        },
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    },

    devtool: 'eval-source-map',
    // devtool: 'none',

};