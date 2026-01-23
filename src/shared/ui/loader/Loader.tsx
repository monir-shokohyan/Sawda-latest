import { Loader as MantineLoader } from '@mantine/core'
import { LoaderContainer } from './container'

const Loader = () => {
  return (
    <LoaderContainer>
      <MantineLoader color="primary" />
    </LoaderContainer>
  )
}

export { Loader }
