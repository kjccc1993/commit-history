export function types(): string {
  return 'types'
}

export type RepoInfoType = {
  name: string
  owner: string
  description: string
  language: string
  ownerAvatarUrl: string
}

export type CommitInfoType = {
  sha: string
  author: {
    username: string
    avatarUrl: string
  }
  date: string
  htmlUrl: string
  message: string
}
