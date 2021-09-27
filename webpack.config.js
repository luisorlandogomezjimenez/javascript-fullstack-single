const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "development",
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname, "./backend/public"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css",
    }),
  ],
  devtool: "source-map",
};
