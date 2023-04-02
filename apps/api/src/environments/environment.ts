import { Environment } from './environment.d'

export const environment: Environment = {
  production: process.env.APP_ENV === 'prod',
  environment: process.env.APP_ENV,
  github: {
    baseUrl: process.env.GITHUB_API_BASEURL,
    apiKey: process.env.GITHUB_APIKEY,
  },
  port: 3333,
}
