import { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { LoadingScreen } from 'components'

// Pages
import MainLayout from 'layouts/main'

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )

// Pages public
const Home = Loadable(lazy(() => import('pages/Home')))
const PublicLogin = Loadable(lazy(() => import('pages/PublicAuth/Login')))
const NotFound = Loadable(lazy(() => import('pages/NotFound')))

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ element: <Home />, path: '/' }],
    },
    {
      path: '/login',
      children: [{ element: <PublicLogin />, path: '/login' }],
    },
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ])
}
