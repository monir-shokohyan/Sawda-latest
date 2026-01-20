import { LoaderContainer } from './container'
import { LoadingSkeleton } from './LoadingSkeleton'

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingSkeleton />
    </LoaderContainer>
  )
}

export { Loader }
