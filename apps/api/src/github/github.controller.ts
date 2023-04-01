import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'
import { GithubService } from './github.service'

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('repos')
  getRepos() {
    try {
      return this.githubService.getRepos()
    } catch (error) {
      //TODO Capture errors with an external platform like Rollbar or Sentry
      //to make the tracking and fixing easier
      //for now a simple console log xD
      console.log(error)

      throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}