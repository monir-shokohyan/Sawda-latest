import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <main style={{ width: '100%' }}>
        <Outlet />
    </main>
  )
}
