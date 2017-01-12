const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const config = Object.assign({}, baseConfig);

if (!config.plugins) {
    config.plugins = [];
}

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
    })
);

module.exports = config;

