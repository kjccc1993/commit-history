import { Environment } from './environment.d'

export const environment: Environment = {
  github: {
    baseUrl: 'https://api.github.com/repos',
    apiKey: process.env.GITHUB_APIKEY,
  },
  port: 3333,
}
