import { DashboardPage } from '@pages/dashboard'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'

export const mainRoute: RouteType[] = [
  {
    key: 'dashboard',
    guarded: '',
    path: '/',
    element: (
      <ErrorSuspense suspenseKey="dashboard">
        <DashboardPage />
      </ErrorSuspense>
    ),
  },
]
