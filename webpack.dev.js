const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: false,
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: 9000,
        compress: true,
    },
});
