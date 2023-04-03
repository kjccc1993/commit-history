/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'

import { CommitInfoType } from '@commit-history/types'
import { HttpService } from '../services/http'

const useGetCommits = ({ owner, repo }: { owner: string; repo: string }) => {
  const [commits, setCommits] = useState<CommitInfoType[]>([])
  const [error, setError] = useState<boolean>(false)

  const getCommits = useCallback(async () => {
    try {
      setCommits([])
      const _commits = await HttpService.get(`/repos/${owner}/${repo}`)
      setCommits(_commits)
    } catch (error) {
      setError(true)
    }
  }, [])

  useEffect(() => {
    getCommits()
  }, [])

  return { commits, error, getCommits }
}

export default useGetCommits
