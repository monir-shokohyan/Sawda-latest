import { FiSearch, FiMic } from 'react-icons/fi'
import { SActionIcon, SInput, VerticalBorder } from '@shared/styles'
import { Filter } from '@features/search-filter/ui/filter'
import { InputContainer } from '../styles'

const Ui = ({ isMobile }: { isMobile: boolean }) => {
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
        w={{ base: '90vw', sm: '90vw', md: '55vw', lg: '70vw' }}
        radius={0}
      />
      <SActionIcon size="input-md" radius="0px">
        <FiSearch size={isMobile ? 13 : 16} />
      </SActionIcon>
      <VerticalBorder />
      <SActionIcon size="input-md" radius="0px" >
        <FiMic size={isMobile ? 13 : 16} />
      </SActionIcon>
    </InputContainer>
  )
}

export { Ui }
