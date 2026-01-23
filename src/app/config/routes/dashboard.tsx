import { DashboardPage } from '@pages/dashboard'
import { MobileModalPage } from '@pages/modal'
import { ProductDetailPage } from '@pages/product-details'
import { ProfileDetailPage } from '@pages/profile-details'
import { EditProfilePage } from '@pages/edit-profile'
import { LoginPage } from '@shared/authentication'
import { ForgotPasswordPage } from '@shared/authentication/forgetPassword'
import { RegisterPage } from '@shared/authentication/registerPage'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'
import { ChangePasswordPage } from '@pages/change-password'
import { NotificationPage } from '@pages/notification'
import { PrivacyPage } from '@pages/privacy'
import { ThemePage } from '@pages/theme'

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
    key: 'edit-profile',
    guarded: '',
    path: '/settings/edit-profile/:id',
    element: (
      <ErrorSuspense suspenseKey="edit-profile">
        <EditProfilePage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'change-password',
    guarded: '',
    path: '/settings/change-password/:id',
    element: (
      <ErrorSuspense suspenseKey="change-password">
        <ChangePasswordPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'notification',
    guarded: '',
    path: '/settings/notification/:id',
    element: (
      <ErrorSuspense suspenseKey="notification">
        <NotificationPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'privacy',
    guarded: '',
    path: '/settings/privacy/:id',
    element: (
      <ErrorSuspense suspenseKey="privacy">
        <PrivacyPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'theme',
    guarded: '',
    path: '/settings/theme/:id',
    element: (
      <ErrorSuspense suspenseKey="theme">
        <ThemePage />
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
