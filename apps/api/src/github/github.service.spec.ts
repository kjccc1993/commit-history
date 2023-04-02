import { Test, TestingModule } from '@nestjs/testing'
import { GithubService } from './github.service'
import { HttpModule } from '@nestjs/axios'
import { stubReposReponse } from '../github/__stub-data/stub-repos-response'
import { stubCommitsResponse } from '../github/__stub-data/stub-commit-response'
import {
  mockGitHubAPiReposResponses,
  mockGithubApiCommitsResponse,
} from '../github/__stub-data/stub-gitbuapi-responses'
import nock from 'nock'
import { environment } from '../environments/environment'
import { Github } from './entities/github.entity'

describe('GithubService', () => {
  let githubService: GithubService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [GithubService],
    }).compile()

    githubService = module.get<GithubService>(GithubService)
  })

  it('should be defined', () => {
    expect(githubService).toBeDefined()
  })

  it('should return an array of repos', async () => {
    //Creates a mock response for each repo
    //makes sure we do not hit the github api while testing
    Github.reposList.forEach((repoUrl) => {
      nock(environment.github.baseUrl)
        .get(`/${repoUrl}`)
        .reply(200, mockGitHubAPiReposResponses[repoUrl])
    })

    const repos = await githubService.getRepos()
    expect(repos).toEqual(stubReposReponse)
  })

  it('should return an array of commits', async () => {
    const owner = 'kjccc1993'
    const repo = 'commits-history'
    nock(environment.github.baseUrl)
      .get(`/${owner}/${repo}/commits`)
      .reply(200, mockGithubApiCommitsResponse)

    const commits = await githubService.getCommits(owner, repo)
    expect(commits).toEqual(stubCommitsResponse)
  })
})
