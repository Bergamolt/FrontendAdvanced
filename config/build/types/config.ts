export type BuildMode = 'development' | 'production'

export type BuildPaths = {
  entry: string
  output: string
  template: string
  src: string
}

export type BuildEnv = {
  mode: BuildMode
  port: number
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
