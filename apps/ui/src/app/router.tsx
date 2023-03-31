import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const CommitHistory = lazy(() => import('./pages/CommitHistory'))
const Welcome = lazy(() => import('./pages/Welcome'))

const router = createBrowserRouter([
  {
    path: '/welcome',
    element: <Welcome title="ui" />,
  },
  {
    path: '/commit-history',
    element: <CommitHistory />,
  },
  {
    path: '/404',
    element: <div>not found</div>,
  },
  {
    path: '*',
    element: <Navigate replace to="/404" />,
  },
])

export default router
