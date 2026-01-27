import { FiSearch, FiMic } from 'react-icons/fi'
import { SActionIcon, SInput, VerticalBorder } from '@shared/styles'
import { InputContainer } from '../styles'
import { FilterButton } from './filterButton'
import { useNavigate } from 'react-router-dom'
import { Paths } from '@shared/api/paths/paths'
import { MenuFilter } from './MenuFilter'

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
  const navigate = useNavigate()

  const handleClick = () => {
    if (isMobile) {
      navigate(`${Paths.MobileModel}filters`)
      return
    }
    if (route === 'favorites') {
      navigate(`${Paths.Favorites}filters`)
    }
  }
  const isDashboard = route === 'dashboard';
  return (
    <InputContainer
      justify="center"
      align="center"
      bg="primary"
      pl={isMobile && isDashboard? '5px' : !isMobile && isDashboard ?  '20px' : '0px'}
    >
      {isMobile && (
        <FilterButton
          iconSize="xl"
          handleClick={handleClick}
        />
      )}
      {!isMobile && !isDashboard && <MenuFilter arrowPosition="bottom" />}
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
