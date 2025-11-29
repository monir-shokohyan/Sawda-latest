import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '../ErrorFallBack'
import { Loader } from '../loader/Loader'

const ErrorSuspense = ({
  suspenseKey,
  children,
}: {
  suspenseKey: string
  children: React.ReactNode
}) => {
  return (
    <Suspense
      key={suspenseKey}
      fallback={<Loader />}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Suspense>
  )
}

export { ErrorSuspense }
