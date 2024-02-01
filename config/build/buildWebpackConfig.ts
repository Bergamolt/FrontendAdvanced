import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig({
  mode,
  paths,
  devServer,
}: BuildOptions): webpack.Configuration {
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins({ template: paths.template }),
    devtool: 'inline-source-map',
    devServer: buildDevServer(devServer),
  }
}
