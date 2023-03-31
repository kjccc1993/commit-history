import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

export default function App() {
  return (
    <StrictMode>
      <div className='m-6 p-6 max-w-3xl md:mx-auto'>
        <RouterProvider router={router} />
      </div>
    </StrictMode>
  )
}
