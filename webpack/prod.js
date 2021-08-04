const common = require('./common.js');
const { merge } = require('webpack-merge');
const ZipPlugin = require('zip-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ZipPlugin({
      filename: '13kjs.zip',
      path: '../zip',
      fileOptions: {
        compress: true,
      },
    }),
  ],
});
