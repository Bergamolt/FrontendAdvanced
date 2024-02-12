import { Configuration } from 'webpack-dev-server'
import { BuildDevServer } from './types/config'

export function buildDevServer({ port }: BuildDevServer): Configuration {
  return {
    port,
    open: true,
    historyApiFallback: true,
  }
}
