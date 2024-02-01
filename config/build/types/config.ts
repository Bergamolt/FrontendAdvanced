export type BuildMode = 'development' | 'production'

export type BuildPaths = {
  entry: string
  output: string
  template: string
}

export type BuildDevServer = {
  port: number
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  devServer: BuildDevServer
}
