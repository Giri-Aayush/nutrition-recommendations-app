import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorBoundary from '@components/ErrorBoundary'

import Chat from './app/Chat'

const router = createBrowserRouter(
  [
    {
      path: `/`,
      errorElement: <ErrorBoundary />,
      element: <Chat />,
    },
  ],
  {},
)

const RoutesContainer = () => {
  return <RouterProvider router={router} />
}

export default RoutesContainer
