const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
require("@babel/polyfill");

module.exports = {
  target: "node",
  node: false,
  mode: process.env.NODE_ENV || "development",
  externals: [nodeExternals()],
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js",
    sourceMapFilename: "index.map",
    library: "library",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.graphql|.gql$/,
        use: "raw-loader"
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: "./src/typeDefs.graphql", to: "./typeDefs.graphql" }
    ])
  ]
};
