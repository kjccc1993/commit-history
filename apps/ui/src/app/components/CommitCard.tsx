import * as React from 'react'
import { Link } from 'react-router-dom'
import format from 'date-fns/format'

interface CommitCardProps {
  message: string
  authorName: string
  authorAvatarUrl: string
  date: string
  sha: string
  url: string
}

export const CommitCard: React.FC<CommitCardProps> = ({
  message,
  authorName,
  authorAvatarUrl,
  date,
  sha,
  url,
}) => {
  const [title, comments] = message.split('\n\n')

  const Comments = () => {
    return (
      <>
        {comments.split('\n').map((comment, i) => (
          <p key={i} className="text-[11px] text-gray-600">
            {comment}
          </p>
        ))}
      </>
    )
  }

  return (
    <div className="flex items-center w-full">
      <div className="w-full py-2 px-3">
        <h5 className="text-md font-medium text-neutral-800">
          <Link className="text-blue-500" to={url} target="_blank">
            {title}
          </Link>
        </h5>

        {/* Comments */}
        {comments && <Comments />}

        {/* Commit footer */}
        <div className="flex gap-2 items-center text-xs mt-2">
          <img
            src={authorAvatarUrl}
            alt={authorName}
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          />
          <p className="text-neutral-600 font-semibold">{authorName}</p>
          <p className="text-neutral-600">
            commited on {format(new Date(date), 'MMM dd, yyyy')}
          </p>
        </div>
      </div>

      <div className="m-4 p-2 border rounded bg-gray-100 text-xs">
        {sha.slice(0, 7)}
      </div>
    </div>
  )
}

export default CommitCard
