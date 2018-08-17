'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name]-[hash].js',
    chunkFilename: 'js/[name]-[hash].js',
    sourceMapFilename: 'js/[name]-[hash].map'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8000,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'ConaBlue',
      myPageHeader: 'ConaBlue',
      template: 'public/index.html',
      filename: 'index.html',
      showErrors: true
    }),
    new WebpackPwaManifest({
      name: 'ConaBlue',
      short_name: 'conablue',
      description: 'Conatel application to interact with bluetooth devices',
      background_color: '#073B4C',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('public/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    }),
    new FriendlyErrorsWebpackPlugin()
  ]
};
