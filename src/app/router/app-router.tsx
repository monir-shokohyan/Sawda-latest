import { Route, Routes } from 'react-router-dom'

import { ErrorSuspense } from '@shared/ui/error-suspense'

import { routes } from '../config/routes'
import { Layout } from './layout'
import { Authenticated } from '@refinedev/core'
import { protectRoutes } from '@app/config/routes/secured-routes'

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
            <Authenticated
              key="authentication"
              loading={<div>Loading auth status...</div>}
              // fallback={<div>You are not authorized. Please log in.</div>}
              redirectOnFail="/login"
            >
              <Layout />
            </Authenticated>
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
