import { PropsWithChildren, ReactNode, Suspense } from 'react'

interface Props extends PropsWithChildren {
  loader?: ReactNode
}

export const WithLoader = ({ loader, children }: Props) => {
  return (
    <Suspense fallback={loader ?? <h1>loading ....</h1>}>{children}</Suspense>
  )
}
