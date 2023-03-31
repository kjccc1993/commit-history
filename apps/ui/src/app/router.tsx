import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const CommitHistory = lazy(() => import('./pages/CommitHistory'))
const Repositories = lazy(() => import('./pages/Repositories'))
const Welcome = lazy(() => import('./pages/Welcome'))

const routes = [
  {
    path: '/',
    component: <Welcome title="ui" />,
  },
  {
    path: '/repos',
    component: <Repositories />,
  },
  {
    path: '/repos/:owner/:name',
    component: <CommitHistory />,
  },
  {
    path: '/404',
    component: <div>not found</div>,
  },
  {
    path: '*',
    component: <Navigate replace to="/404" />,
  },
]

const router = createBrowserRouter(
  routes.map(({ path, component }) => ({
    path,
    element: <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>,
  }))
)

export default router
