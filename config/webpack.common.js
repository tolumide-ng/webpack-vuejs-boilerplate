const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { join, resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: './index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.vue', '.js', '.scss', '.sass'],
  },
  module: {
    rules: [
      //   {
      //     enforce: 'pre',
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     loader: 'eslint-loader',
      //   },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(s?[ac]ss$)/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new Dotenv(),
    new HTMLWebpackPlugin({
      //   showErrors: env.mode === 'development',
      title: 'Basic Vue webpack setup',
      favicon: join(__dirname, '../assets/martial-arts.png'),
      template: join(__dirname, '../index.html'),
    }),
  ],
};
