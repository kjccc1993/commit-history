import { Injectable } from '@nestjs/common'
import { environment as env } from '../environments/environment'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'
import { Github } from '../github/entities/github.entity'
import {
  CommitInfoType as CommitInfo,
  RepoInfoType as RepoInfo,
} from '@commit-history/types'

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  private githubRequest(url) {
    //We need to authenticate in order to avoid the
    //github api ratelimit (60 requests per hour)
    return this.httpService.axiosRef.get(`${env.github.baseUrl}/${url}`, {
      headers: {
        Authorization: `Bearer ${env.github.apiKey}`,
      },
    })
  }

  async getRepos(): Promise<RepoInfo[]> {
    //I wanted to show more than my list of commits
    //so I picked up some other public repos
    const reposList = Github.reposList

    const getRepo = (repoUrl) => this.githubRequest(repoUrl)

    const reposRequests = reposList.map<Promise<AxiosResponse>>(getRepo)
    const responses = await Promise.all(reposRequests)

    const translateRepo = ({ data }): RepoInfo => ({
      name: data.name,
      owner: data.owner.login,
      description: data.description,
      language: data.language,
      ownerAvatarUrl: data.owner.avatar_url,
    })

    const reposInfo: RepoInfo[] = responses.map(translateRepo)

    return reposInfo
  }

  async getCommits(owner: string, repo: string): Promise<CommitInfo[]> {
    const { data } = await this.githubRequest(`${owner}/${repo}/commits`)

    const translateCommit = (githubCommit): CommitInfo => ({
      sha: githubCommit.sha,
      author: {
        username: githubCommit.author.login,
        avatarUrl: githubCommit.author.avatar_url,
      },
      date: githubCommit.commit.author.date,
      htmlUrl: githubCommit.html_url,
      message: githubCommit.commit.message,
    })

    const commits: CommitInfo[] = data.map(translateCommit)

    return commits
  }
}
