import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv } from './config/build/types/config'

export default (env: BuildEnv) => {
  const PORT = env.port || 3000
  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src/app', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      template: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src')
    },
    isDev,
    devServer: {
      port: PORT,
    },
  })
}
