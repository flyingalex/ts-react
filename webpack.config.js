
const path = require('path');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PROJECT_ROOT = __dirname;
const SRC =  path.join(PROJECT_ROOT, '/', 'src');
const PUBLIC =  path.join(PROJECT_ROOT, '/', 'public');
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
const isDevelopment = ENVIRONMENT === 'development';

module.exports = {
  context: PROJECT_ROOT,
  entry: "./src/index.tsx",
  output: {
      filename: "[name].[hash].bundle.js",
      path: PUBLIC
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },

  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
          ]
        },

        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            "babel-loader",
            "awesome-typescript-loader",
          ]
        },
      ]
  },

  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: `${SRC}/assets/images/favicon.ico`,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  devServer: {
    contentBase: SRC,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    clientLogLevel: 'warning'
  },
};
