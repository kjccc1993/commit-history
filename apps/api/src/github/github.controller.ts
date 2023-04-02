import { GithubService } from './github.service'
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common'

@Controller('repos')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
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

  @Get(':owner/:repo')
  async getCommits(@Param('owner') owner: string, @Param('repo') repo: string) {
    try {
      return await this.githubService.getCommits(owner, repo)
    } catch (error) {
      //TODO Capture errors with an external platform like Rollbar or Sentry
      //to make the tracking and fixing easier
      //for now a simple console log xD
      console.log(error)

      throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
