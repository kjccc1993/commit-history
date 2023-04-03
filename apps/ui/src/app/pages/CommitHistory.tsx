/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import CommitCard from '../components/CommitCard'
import Loading from '../components/Loading'
import GenericError from '../components/GenericError'
import useGetCommits from '../hooks/useGetCommits'

export const CommitHistory: React.FC = () => {
  const { owner = '', repo = '' } = useParams()
  const { commits, error, getCommits } = useGetCommits({ owner, repo })

  if (error) {
    return <GenericError />
  }

  if (!commits?.length) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-between items-center">
        <h2 className="sm:text-xl font-semibold mb-3">
          {owner}/{repo}
        </h2>
        <Link className="text-blue-500 text-xs md:text-sm" to={`/repos`}>
          {'<'} back to repos
        </Link>
      </div>
      <p className="text-[11px]">
        Displaying the last {commits.length} commits
        <button
          className="mx-2 p-1 border rounded bg-blue-500 text-white"
          onClick={getCommits}
        >
          Refresh
        </button>
      </p>

      {/* Commits list */}
      <div className="border rounded-md divide-y mt-2">
        {!!commits.length &&
          commits.map((commit) => (
            <CommitCard
              key={commit.sha}
              {...commit}
              url={commit.htmlUrl}
              authorName={commit.author.username}
              authorAvatarUrl={commit.author.avatarUrl}
            />
          ))}
      </div>
    </div>
  )
}

export default CommitHistory
