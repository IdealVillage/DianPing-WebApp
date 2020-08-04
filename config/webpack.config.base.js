const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const babelPolyfill = require("babel-polyfill");
const ProgressBar = require("progress-bar-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@public": path.resolve(__dirname, "../public"),
      "@ducks": path.resolve(__dirname, "../src/ducks")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [path.resolve(__dirname, "../src")],
        use: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 2 } },
            {
              loader: "postcss-loader",
              options: { plugins: [require("autoprefixer")("last 2 versions")] }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html"
    }),
    new ExtractTextPlugin("index.css"),
    new ProgressBar()
  ]
};
