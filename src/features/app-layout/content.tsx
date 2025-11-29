import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <main>
      <div className="h-full p-2">
        <Outlet />
      </div>
    </main>
  )
}
