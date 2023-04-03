/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'

import { RepoInfoType } from '@commit-history/types'
import { HttpService } from '../services/http'

const useGetRepos = () => {
  const [repos, setRepos] = useState<RepoInfoType[]>([])
  const [error, setError] = useState<boolean>(false)

  const getRepos = useCallback(async () => {
    try {
      const _repos = await HttpService.get('/repos')
      setRepos(_repos)
    } catch (error) {
      setError(true)
    }
  }, [])

  useEffect(() => {
    getRepos()
  }, [])

  return { repos, error }
}

export default useGetRepos
