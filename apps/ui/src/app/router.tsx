import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import GenericError from './components/GenericError'

const CommitHistory = lazy(() => import('./pages/CommitHistory'))
const Repositories = lazy(() => import('./pages/Repositories'))

const routes = [
  {
    path: '/',
    component: <Navigate replace to="/repos" />,
  },
  {
    path: '/repos',
    component: <Repositories />,
  },
  {
    path: '/repos/:owner/:repo',
    component: <CommitHistory />,
  },
  {
    path: '/404',
    component: (
      <GenericError message="We could not found the page you are looking for ☹" />
    ),
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
