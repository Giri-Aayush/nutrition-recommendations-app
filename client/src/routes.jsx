import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorBoundary from '@components/ErrorBoundary'

import address from './routes.address'
import Chat from './app/Chat'

const router = createBrowserRouter(
  [
    {
      path: address.root,
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
