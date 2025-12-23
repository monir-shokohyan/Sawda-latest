import { FiSearch, FiMic } from 'react-icons/fi'
import { ActionIcon, Input } from '@mantine/core'
import { VerticalBorder } from '@shared/styles'
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

      <Input
        type="text"
        placeholder="Search"
        size="md"
        w={{ base: '90vw', sm: '90vw', md: '55vw', lg: '70vw' }}
        radius={0}
      />
      <ActionIcon size="input-md">
        <FiSearch size={isMobile ? 13 : 16} />
      </ActionIcon>
      <VerticalBorder />
      <ActionIcon size="input-md">
        <FiMic size={isMobile ? 13 : 16} />
      </ActionIcon>
    </InputContainer>
  )
}

export { Ui }
