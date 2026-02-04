import { Route, Routes } from 'react-router-dom'

import { ErrorSuspense } from '@shared/ui/error-suspense'

import { routes } from '../config/routes'
import { Layout } from './layout'
import { Authenticated } from '@refinedev/core'
import { protectRoutes } from '@app/config/routes/secured-routes'
import { Loader } from '@shared/ui/loader/Loader'
import { IsAuthLayout } from './secure-layout'

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <ErrorSuspense suspenseKey="/layout">
            <Layout />
          </ErrorSuspense>
        }
      >
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
      <Route
        element={
          <ErrorSuspense suspenseKey="/auth-layout">    
              <IsAuthLayout />
          </ErrorSuspense>
        }
      >
        {protectRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  )
}
