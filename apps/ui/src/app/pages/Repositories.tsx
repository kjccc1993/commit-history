/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import RepoCard from '../components/RepoCard'
import { RepoInfoType } from '@commit-history/types'
import { HttpService } from '../services/http'
import Loading from '../components/Loading'
import GenericError from '../components/GenericError'

export const Repositories: React.FC = () => {
  const [repos, setRepos] = React.useState<RepoInfoType[]>([])
  const [error, setError] = React.useState<boolean>(false)

  const getRepos = React.useCallback(async () => {
    try {
      const _repos = await HttpService.get('/repos')
      setRepos(_repos)
    } catch (error) {
      setError(true)
    }
  }, [])

  React.useEffect(() => {
    getRepos()
  }, [])

  if (error) {
    return <GenericError />
  }

  if (!repos?.length) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 divide-y">
      <h2 className="text-xl font-semibold mb-3">Choose a Repo</h2>
      <div>
        {!!repos?.length &&
          repos.map((repo) => <RepoCard key={repo.name} {...repo} />)}
      </div>
    </div>
  )
}

export default Repositories
