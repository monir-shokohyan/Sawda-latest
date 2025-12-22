import authProvider from '@app/config/auth/authSupaBase'
import { supabaseClient } from '@app/config/client'
import { Refine } from '@refinedev/core'
import { dataProvider, liveProvider } from '@refinedev/supabase'
import routerProvider from '@refinedev/react-router'

export const AdminRefineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Refine
      dataProvider={dataProvider(supabaseClient)}
      liveProvider={liveProvider(supabaseClient)}
      authProvider={authProvider}
      routerProvider={routerProvider}
      options={{
        syncWithLocation: true,
        liveMode: 'auto',
      }}
      resources={[
        {
          name: 'blog_posts',
          list: '/admin/posts',
          create: '/admin/posts/create',
          edit: '/admin/posts/edit/:id',
          show: '/admin/posts/show/:id',
        },
      ]}
    >
      {children}
    </Refine>
  )
}
