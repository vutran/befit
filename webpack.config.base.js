const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        main: path.resolve(__dirname, './index'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
};

module.exports = config;
