const { override, addBabelPlugin, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
    addWebpackModuleRule({ test: /\.css$/i, use: ["style-loader", "css-loader"] }),
    addBabelPlugin("emotion")
);