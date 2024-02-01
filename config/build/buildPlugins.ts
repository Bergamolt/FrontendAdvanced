import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export function buildPlugins({
  template,
}: {
  template: string
}): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template,
    }),
    new webpack.ProgressPlugin(),
  ]
}
