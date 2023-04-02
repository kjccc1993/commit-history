type GitHub = {
  baseUrl: string
  apiKey: string
}

export type Environment = {
  production: boolean
  environment: string
  port: number
  github: GitHub
}
