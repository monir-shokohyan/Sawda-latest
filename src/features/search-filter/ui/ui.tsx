import styled from 'styled-components'
import { FiSearch, FiMic } from 'react-icons/fi'
import { ActionIcon, Flex, FlexProps, Input } from '@mantine/core'
import { VerticalBorder } from '@shared/styles'
import { useMediaQuery } from '@mantine/hooks'
import { Filter } from '@features/search-filter/ui/filter'
import { InputContainer } from '../styles'


const Ui = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

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
        w={{ base: '70vw', sm: '70vw', md: '55vw', lg: '55vw' }}
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
