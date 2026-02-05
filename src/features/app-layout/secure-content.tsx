import { Paths } from '@shared/api/paths/paths'
import { Auth } from '@shared/authentication/auth'
import { Navigate, Outlet } from 'react-router-dom'

export const SecureContent = () => {
  const { isAuth } = Auth()
  
  return (
    <main style={{ width: '100%' }}>
      { isAuth ?<Outlet /> : <Navigate to={Paths.Register} /> }
    </main>
  )
}
