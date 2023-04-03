/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import RepoCard from '../components/RepoCard'
import Loading from '../components/Loading'
import GenericError from '../components/GenericError'
import useGetRepos from '../hooks/useGetRepos'

export const Repositories: React.FC = () => {
  const { repos, error } = useGetRepos()

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
