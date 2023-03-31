import * as React from 'react'
import { Link } from 'react-router-dom'

interface RepoCardProps {
  name: string
  owner: string
  description: string
  language: string
}

export const RepoCard: React.FC<RepoCardProps> = ({
  name,
  owner,
  description,
  language,
}) => {
  return (
    <div className="flex justify-center w-full my-4">
      <div className="w-full rounded-lg p-6 border">
        <h5 className="text-xl font-medium t text-neutral-800">
          <Link className='text-blue-500' to={`/repos/${owner}/${name}`}>
            {owner}/{name}
          </Link>
        </h5>
        <p className="mb-2 text-base text-neutral-600">{description}</p>
        <p className="text-xs text-neutral-600">{language}</p>
      </div>
    </div>
  )
}

export default RepoCard
