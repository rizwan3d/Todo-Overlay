const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, './overlay'),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
};