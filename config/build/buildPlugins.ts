import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({
  template,
}: {
  template: string
}): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    new webpack.ProgressPlugin(),
  ]
}
