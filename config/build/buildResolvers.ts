import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers({
  paths,
}: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {},
  }
}
