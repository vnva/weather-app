import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const isDevelopment = mode === 'development';

const devServer: WebpackDevServerConfiguration = {
  static: './src',
  hot: true,
  port: 3000,
};

const config: WebpackConfiguration = {
  mode,
  devtool: isDevelopment ? 'source-map' : false,
  entry: './src/index.tsx',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: isDevelopment ? '[name].js' : '[name].[chunkhash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.html', '.scss'],
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCSSExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[chunkhash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[chunkhash].css',
    }),
  ],
  devServer,
};

export default config;
