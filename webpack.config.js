var webpack = require("webpack");
var pth = require("path");

module.exports = {
    mode: 'development',
entry: "./src/index.js",
output: {
    path: __dirname + "/dist/assets",
    filename: "bundle.js"
},
devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
},
module: {
    rules: [
      { test: /\.js$/, exclude: /(node_modules)/, use: 'babel-loader' }
    ]
  }
} 