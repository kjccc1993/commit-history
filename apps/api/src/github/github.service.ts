import { Injectable } from '@nestjs/common'
import { environment as env } from '../environments/environment'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

type RepoInfo = {
  name: string
  owner: string
  description: string
  language: string
  ownerAvatarUrl: string
}

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  async getRepos(): Promise<RepoInfo[]> {
    //I wanted to show more than my list of commits
    //so I picked up some other public repos
    const reposList = [
      'kjccc1993/commit-history',
      '30-seconds/30-seconds-of-code',
      'vinta/awesome-python',
    ]

    const getRepo = (repo) =>
      this.httpService.axiosRef.get(`${env.githubApiBaseUrl}${repo}`)
    const reposRequests = reposList.map<Promise<AxiosResponse>>(getRepo)
    const responses = await Promise.all(reposRequests)

    const reposInfo: RepoInfo[] = responses.map(({ data }) => ({
      name: data.name,
      owner: data.owner.login,
      description: data.description,
      language: data.language,
      ownerAvatarUrl: data.owner.avatar_url,
    }))

    return reposInfo
  }
}
