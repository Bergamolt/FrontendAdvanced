export type BuildMode = 'development' | 'production'

export type BuildPaths = {
  entry: string
  output: string
  template: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
}
