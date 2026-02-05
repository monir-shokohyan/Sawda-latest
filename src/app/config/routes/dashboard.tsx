import { DashboardPage } from '@pages/dashboard'
import { MobileModalPage } from '@pages/modal'
import { ProductDetailPage } from '@pages/product-details'
import { LoginPage } from '@shared/authentication'
import { ForgotPasswordPage } from '@shared/authentication/forgetPassword'
import { RegisterPage } from '@shared/authentication/registerPage'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'
import { SearchPage } from '@pages/search'
import { ProfileDetailPage } from '@pages/profile-details'

export const mainRoute: RouteType[] = [
  {
    key: 'profile-detail',
    guarded: '',
    path: '/profile/:id',
    element: (
      <ErrorSuspense suspenseKey="profile-detail">
        <ProfileDetailPage />
      </ErrorSuspense>
    ),
  },
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
  {
    key: 'search',
    guarded: '',
    path: '/search/:id',
    element: (
      <ErrorSuspense suspenseKey="search">
        <SearchPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'product-detail',
    guarded: '',
    path: '/product/:id',
    element: (
      <ErrorSuspense suspenseKey="product-detail">
        <ProductDetailPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'modal',
    guarded: '',
    path: '/model/:id',
    element: (
      <ErrorSuspense suspenseKey="modal">
        <MobileModalPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'register',
    guarded: '',
    path: '/register',
    element: (
      <ErrorSuspense suspenseKey="register">
        <RegisterPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'login',
    guarded: '',
    path: '/login',
    element: (
      <ErrorSuspense suspenseKey="login">
        <LoginPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'forget-password',
    guarded: '',
    path: '/forget-password',
    element: (
      <ErrorSuspense suspenseKey="forget-password">
        <ForgotPasswordPage />
      </ErrorSuspense>
    ),
  },
]
