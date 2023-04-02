export const mockGitHubAPiReposResponses = {
  'kjccc1993/commit-history': {
    name: 'commit-history',
    owner: {
      login: 'kjccc1993',
      avatar_url: 'https://avatars.githubusercontent.com/u/37909922?v=4',
    },
    description: 'Take-Home-Test Full Time Force',
    language: 'TypeScript',
  },
  '30-seconds/30-seconds-of-code': {
    name: '30-seconds-of-code',
    owner: {
      login: '30-seconds',
      avatar_url: 'https://avatars.githubusercontent.com/u/43479428?v=4',
    },
    description:
      'Short JavaScript code snippets for all your development needs',
    language: 'JavaScript',
  },
  'vinta/awesome-python': {
    name: 'awesome-python',
    owner: {
      login: 'vinta',
      avatar_url: 'https://avatars.githubusercontent.com/u/652070?v=4',
    },
    description:
      'A curated list of awesome Python frameworks, libraries, software and resources',
    language: 'Python',
  },
}

export const mockGithubApiCommitsResponse = [
  {
    sha: 'sha1',
    commit: {
      author: {
        date: '2023-03-28T19:41:54Z',
      },
      message: 'Wubba Lubba Dub Dub!',
    },
    author: {
      login: 'rick-sanchez',
      avatar_url: 'https://avatar.url/rick-sanchez.png',
    },
    html_url: 'https://commit.url',
  },
  {
    sha: 'sha2',
    commit: {
      author: {
        date: '2023-03-28T12:41:54Z',
      },
      message: 'I TURNED MYSELF INTO A PICKLE, MORTY! I AM PICKLE RI-I-I-ICK!',
    },
    author: {
      login: 'rick-sanchez',
      avatar_url: 'https://avatar.url/rick-sanchez.png',
    },
    html_url: 'https://commit.url',
  },
  {
    sha: 'sha3',
    commit: {
      author: {
        date: '2023-03-27T19:41:54Z',
      },
      message:
        'LEMME CHECK MY LIST OF POWERS AND WEAKNESSES: ABILITY TO DO ANYTHING, BUT ONLY WHENEVER I WANT.',
    },
    author: {
      login: 'rick-sanchez',
      avatar_url: 'https://avatar.url/rick-sanchez.png',
    },
    html_url: 'https://commit.url',
  },
]
