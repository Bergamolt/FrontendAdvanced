import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default buildWebpackConfig({
  mode: 'development',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    template: path.resolve(__dirname, 'public', 'index.html'),
  },
  isDev: true,
})
