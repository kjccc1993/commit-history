import * as React from 'react'
import { Link } from 'react-router-dom'

interface RepoCardProps {
  name: string
  owner: string
  description: string
  language: string
  ownerAvatarUrl: string
}

export const RepoCard: React.FC<RepoCardProps> = ({
  name,
  owner,
  description,
  language,
  ownerAvatarUrl,
}) => {
  return (
    <div className="flex justify-center w-full my-4">
      <div className="w-full rounded-lg p-6 border flex justify-between items-center">
        <div>
          <h5 className="text-xl font-medium t text-neutral-800">
            <Link className="text-blue-500" to={`/repos/${owner}/${name}`}>
              {owner}/{name}
            </Link>
          </h5>
          <p className="mb-2 text-xs sm:text-sm text-neutral-600">
            {description}
          </p>
          <p className="text-[11px] text-neutral-600">{language}</p>
        </div>

        <img
          className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
          src={ownerAvatarUrl}
          alt={name}
        />
      </div>
    </div>
  )
}

export default RepoCard
