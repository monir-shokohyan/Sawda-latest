import { FiSearch, FiMic } from 'react-icons/fi'
import { SActionIcon, SInput, VerticalBorder } from '@shared/styles'
import { Filter } from '@features/search-filter/ui/filter'
import { InputContainer } from '../styles'

const Ui = ({
  isMobile,
  route = 'dashboard',
}: {
  isMobile: boolean
  route?: string
}) => {
  const inputWidth =
    route === 'favorites'
      ? { base: '90vw', sm: '90vw', md: '40vw', lg: '40vw' }
      : { base: '90vw', sm: '90vw', md: '55vw', lg: '70vw' }
  return (
    <InputContainer
      justify="center"
      align="center"
      bg="primary"
      pl={isMobile ? '5px' : '20px'}
    >
      {isMobile && <Filter />}

      <SInput
        type="text"
        placeholder="Search"
        size="md"
        w={inputWidth}
        radius={0}
      />
      <SActionIcon
        size="input-md"
        radius="0px"
      >
        <FiSearch size={isMobile ? 13 : 16} />
      </SActionIcon>
      {route !== 'favorites' && (
        <>
          <VerticalBorder />
          <SActionIcon
            size="input-md"
            radius="0px"
          >
            <FiMic size={isMobile ? 13 : 16} />
          </SActionIcon>
        </>
      )}
    </InputContainer>
  )
}

export { Ui }
