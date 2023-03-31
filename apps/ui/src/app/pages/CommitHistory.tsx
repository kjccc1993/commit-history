import * as React from 'react'

export const CommitHistory: React.FC = () => {
  return <div>Commit history</div>
}

export default CommitHistory

const commits = [
  {
    sha: '5e34517d8c0698a4c9d97e2f800fc1fd016b1d15',
    commit: {
      author: {
        name: 'Kevin Camargo',
        email: 'kjcamargo2012@gmail.com',
        date: '2023-03-31T03:31:35Z',
      },
      message:
        "commit-history | UI | Creating base project\n\n- Using NX to create a monorepo\n- Created a base React ui app and a NestJs api app\n- Created react routes skeleton including '/404' route",
    },
    url: 'https://api.github.com/repos/kjccc1993/commit-history/commits/5e34517d8c0698a4c9d97e2f800fc1fd016b1d15',
    author: {
      login: 'kjccc1993',
      avatar_url: 'https://avatars.githubusercontent.com/u/37909922?v=4',
    },
  },
  {
    sha: '9a2ad54b723ba90310aa555f86ec351a33f0a686',
    commit: {
      author: {
        name: 'Kevin Camargo',
        email: '37909922+kjccc1993@users.noreply.github.com',
        date: '2023-03-31T03:12:12Z',
      },
      message: 'Initial commit',
    },
    url: 'https://api.github.com/repos/kjccc1993/commit-history/commits/9a2ad54b723ba90310aa555f86ec351a33f0a686',
    author: {
      login: 'kjccc1993',
      avatar_url: 'https://avatars.githubusercontent.com/u/37909922?v=4',
    },
  },
]
