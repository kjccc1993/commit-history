import { Environment } from './environment.d'

export const environment: Environment = {
  production: process.env.APP_ENV === 'prod',
  environment: process.env.APP_ENV,
  githubApiBaseUrl: process.env.GITHUB_API_BASEURL,
  port: 3333
}
