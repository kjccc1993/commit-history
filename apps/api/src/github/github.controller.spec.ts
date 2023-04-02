import { Test, TestingModule } from '@nestjs/testing'
import { GithubController } from './github.controller'
import { GithubService } from './github.service'
import { stubReposReponse } from './__stub-data/stub-repos-response'
import { HttpModule } from '@nestjs/axios'
import { stubCommitsResponse } from './__stub-data/stub-commit-response'

describe('GithubController', () => {
  let githubController: GithubController
  let githubService: GithubService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [GithubController],
      providers: [GithubService],
    }).compile()

    githubController = module.get<GithubController>(GithubController)
    githubService = module.get<GithubService>(GithubService)
  })

  it('should be defined', () => {
    expect(githubController).toBeDefined()
  })

  it('should return an array of repos', async () => {
    jest
      .spyOn(githubService, 'getRepos')
      .mockImplementation(() => Promise.resolve(stubReposReponse))

    expect(await githubController.getRepos()).toBe(stubReposReponse)
  })

  it('should return an array of commits', async () => {
    jest
      .spyOn(githubService, 'getCommits')
      .mockImplementation(() => Promise.resolve(stubCommitsResponse))

    const owner = 'kjccc1993'
    const repo = 'commits-history'

    expect(await githubController.getCommits(owner, repo)).toBe(
      stubCommitsResponse
    )
  })
})
