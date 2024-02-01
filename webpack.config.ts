import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

const PORT = 3000
const isDev = process.env.NODE_ENV === 'development'

export default buildWebpackConfig({
  mode: 'development',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    template: path.resolve(__dirname, 'public', 'index.html'),
  },
  isDev,
  devServer: {
    port: PORT,
  },
})
