// webpack integrate js files into a single one

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),  // __dirname is the current directory
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true, // minimize the js file
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        // ref: https://stackoverflow.com/questions/66772358/webpack-warning-warning-in-defineplugin-conflicting-values-for-process-env-no
        'process.env.NODE_ENV' : JSON.stringify('production')
      },
    }),
  ],
};
