import * as React from 'react'
import RepoCard from '../components/RepoCard'

interface RepoInfo {
  name: string
  owner: string
  description: string
  language: string
}

const repos: RepoInfo[] = [
  {
    name: 'commit-history',
    owner: 'kjccc1993',
    description: 'Task home fulltime force',
    language: 'TypeScript',
  },
  {
    name: 'EbookFoundation',
    owner: 'free-programming-books',
    description: 'free books ',
    language: 'JavaScript',
  },
]

export const Repositories: React.FC = () => {
  const [age, setAge] = React.useState('')

  return (
    <div className="grid grid-cols-1 divide-y">
      <h2 className="text-xl font-semibold mb-3">Choose a Repo</h2>
      <div>
        {repos.map((repo) => (
          <RepoCard {...repo} />
        ))}
      </div>
    </div>
  )
}

export default Repositories
