import { CommitInfoType } from '@commit-history/types'

export const stubCommitsResponse: CommitInfoType[] = [
  {
    sha: 'sha1',
    author: {
      username: 'rick-sanchez',
      avatarUrl: 'https://avatar.url/rick-sanchez.png',
    },
    date: '2023-03-28T19:41:54Z',
    htmlUrl: 'https://commit.url',
    message: 'Wubba Lubba Dub Dub!',
  },
  {
    sha: 'sha2',
    author: {
      username: 'rick-sanchez',
      avatarUrl: 'https://avatar.url/rick-sanchez.png',
    },
    date: '2023-03-28T12:41:54Z',
    htmlUrl: 'https://commit.url',
    message: 'I TURNED MYSELF INTO A PICKLE, MORTY! I AM PICKLE RI-I-I-ICK!',
  },
  {
    sha: 'sha3',
    author: {
      username: 'rick-sanchez',
      avatarUrl: 'https://avatar.url/rick-sanchez.png',
    },
    date: '2023-03-27T19:41:54Z',
    htmlUrl: 'https://commit.url',
    message:
      'LEMME CHECK MY LIST OF POWERS AND WEAKNESSES: ABILITY TO DO ANYTHING, BUT ONLY WHENEVER I WANT.',
  },
]
