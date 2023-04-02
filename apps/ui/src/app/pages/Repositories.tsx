import * as React from 'react'
import RepoCard from '../components/RepoCard'
import { RepoInfoType } from '@commit-history/types'

export const Repositories: React.FC = () => {
  const [repos, setRepos] = React.useState<RepoInfoType[]>()

  const getRepos = async () => {
    const response = await fetch('http://localhost:3333/api/repos')
    const json = await response.json()
    setRepos(json)
  }

  React.useEffect(() => {
    getRepos()
  }, [])

  return (
    <div className="grid grid-cols-1 divide-y">
      <h2 className="text-xl font-semibold mb-3">Choose a Repo</h2>
      <div>
        {!!repos?.length && repos.map((repo) => <RepoCard {...repo} />)}
      </div>
    </div>
  )
}

export default Repositories
