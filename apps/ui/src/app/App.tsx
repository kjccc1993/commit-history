import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './app.module.css'
import Header from './components/Header'

const headerHeight = 85

export default function App() {
  return (
    <StrictMode>
      <div>
        <Header />
        <div
          className="p-6 max-w-3xl md:mx-auto"
          style={{ paddingTop: headerHeight }}
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </StrictMode>
  )
}
