import { AddEditProductPage } from '@pages/add-edit-product'
import { ChangePasswordPage } from '@pages/change-password'
import { EditProfilePage } from '@pages/edit-profile'
import { FavoritesPage } from '@pages/favorites'
import { MessageDetailsPage } from '@pages/message-details'
import { NotificationPage } from '@pages/notification'
import { PrivacyPage } from '@pages/privacy'
import { SecureMobileModalPage } from '@pages/secure-modal'
import { ThemePage } from '@pages/theme'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'

export const protectRoutes: RouteType[] = [
    {
      key: 'secure-modal',
      guarded: '',
      path: '/secure-model/:id',
      element: (
        <ErrorSuspense suspenseKey="secure-modal">
          <SecureMobileModalPage />
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
    key: 'add-edit-product',
    guarded: '',
    path: '/add-edit-product/:category',
    element: (
      <ErrorSuspense suspenseKey="add-edit-product">
        <AddEditProductPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'message-detail',
    guarded: '',
    path: '/message/:id',
    element: (
      <ErrorSuspense suspenseKey="message-detail">
        <MessageDetailsPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'favorites',
    guarded: '',
    path: '/favorites/:id',
    element: (
      <ErrorSuspense suspenseKey="favorites">
        <FavoritesPage />
      </ErrorSuspense>
    ),
  },
]
