import { DashboardPage } from '@pages/dashboard'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'

export const protectRoutes: RouteType[] = [
  {
    key: 'auth',
    guarded: 'true',
    path: '/auth',
    element: (
      <ErrorSuspense suspenseKey="auth">
        <h1>hello</h1>
      </ErrorSuspense>
    ),
  },

]
