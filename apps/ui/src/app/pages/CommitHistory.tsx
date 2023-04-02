import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import CommitCard from '../components/CommitCard'
import { environment } from '../../environments/environment'

export const CommitHistory: React.FC = () => {
  //const [commits, setCommits] = React.useState<RepoInfoType[]>()
  const { owner, repo } = useParams()

  const getCommits = async () => {
    const response = await fetch(`${environment.apiUrl}/repos/${owner}/${repo}`)
    const json = await response.json()
    //setCommits(json)
  }


  // React.useEffect(() => {

  // }, [])
  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-3">
          {owner}/{repo}
        </h2>
        <Link className="text-blue-500 text-sm" to={`/repos`}>
          {'<'} back to repos
        </Link>
      </div>
      <div className="border rounded-md divide-y mt-2">
        {commits.map((commit) => (
          <CommitCard
            {...commit}
            url={commit.html_url}
            authorName={commit.author.username}
            authorAvatarUrl={commit.author.avatar_url}
          />
        ))}
      </div>
    </div>
  )
}

export default CommitHistory

const commits = new Array(30).fill('').map(() => ({
  sha: '5e34517d8c0698a4c9d97e2f800fc1fd016b1d15',
  author: {
    username: 'kjccc1993',
    avatar_url: 'https://avatars.githubusercontent.com/u/37909922?v=4',
  },
  date: '2020-01-31T03:31:35Z',
  html_url:
    'https://github.com/kjccc1993/commit-history/commit/5e34517d8c0698a4c9d97e2f800fc1fd016b1d15',
  message:
    "commit-history | UI | Creating base project\n\n- Using NX to create a monorepo\n- Created a base React ui app and a NestJs api app\n- Created react routes skeleton including '/404' route",
}))

// const commits = [
//   {
//     sha: '5e34517d8c0698a4c9d97e2f800fc1fd016b1d15',
//     author: {
//       username: 'kjccc1993',
//       avatar_url: 'https://avatars.githubusercontent.com/u/37909922?v=4',
//     },
//     date: '2020-01-31T03:31:35Z',
//     html_url:
//       'https://github.com/kjccc1993/commit-history/commit/5e34517d8c0698a4c9d97e2f800fc1fd016b1d15',
//     message:
//       "commit-history | UI | Creating base project\n\n- Using NX to create a monorepo\n- Created a base React ui app and a NestJs api app\n- Created react routes skeleton including '/404' route",
//   },
//   {
//     sha: '9a2ad54b723ba90310aa555f86ec351a33f0a686',
//     author: {
//       username: 'kjccc1993',
//       avatar_url: 'https://avatars.githubusercontent.com/u/37909922?v=4',
//     },
//     date: '2023-03-31T03:12:12Z',
//     html_url:
//       'https://github.com/kjccc1993/commit-history/commit/9a2ad54b723ba90310aa555f86ec351a33f0a686',
//     message: 'Initial commit',
//   },
// ]
