import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorBoundary from '@components/ErrorBoundary'

import ReportList from './app/ReportList'
import ReportDetails from './app/ReportDetails'
import PreviewReport from './app/PreviewReport'
import CreateReport from './app/CreateReport'
import address from './routes.address'

const router = createBrowserRouter(
  [
    {
      path: address.root,
      errorElement: <ErrorBoundary />,
      element: <ReportList />,
    },
    {
      path: address.create,
      errorElement: <ErrorBoundary />,
      element: <CreateReport />,
    },
    {
      path: address.preview,
      errorElement: <ErrorBoundary />,
      element: <PreviewReport />,
    },
    {
      path: address.details,
      errorElement: <ErrorBoundary />,
      element: <ReportDetails />,
    },
  ],
  {},
)

const RoutesContainer = () => {
  return <RouterProvider router={router} />
}

export default RoutesContainer
