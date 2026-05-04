import { FiSearch } from 'react-icons/fi'
import { SActionIcon, SInput } from '@shared/styles'
import { InputContainer } from '../styles'
import { FilterButton } from './filterButton'
import { useNavigate } from 'react-router-dom'
import { Paths } from '@shared/api/paths/paths'
import { MenuFilter } from './MenuFilter'
import { useTranslation } from 'react-i18next'
import { useIsRtlLang } from '@shared/hooks'

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
  const { t } = useTranslation()
  const { isEnglish } = useIsRtlLang()

  const handleClick = () => {
    if (isMobile) {
      navigate(`${Paths.MobileModel}filters`)
      return
    }
    if (route === 'favorites') {
      navigate(`${Paths.Favorites}filters`)
    }
  }

  const isDashboard = route === 'dashboard'
  const getInputPl = () => {
    if (isMobile && isDashboard) {
      return '5px'
    } else if (!isMobile && isDashboard && isEnglish) {
      return '20px'
    } else {
      return '0px'
    }
  }
  return (
    <InputContainer
      h={isMobile ? 38 : 45}
      justify="center"
      align="center"
      bg="primary"
      pl={getInputPl()}
      pr={!isMobile && isDashboard && !isEnglish ? '20px' : '0px'}
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
        placeholder={t('common.search')}
        w={inputWidth}
        radius={0}
        h="100%"
        styles={{
          input: {
            height: isMobile ? '38px' : '45px',
          },
        }}
      />
      <SActionIcon
        size="input-md"
        radius="0px"
      >
        <FiSearch size={isMobile ? 13 : 16} />
      </SActionIcon>
    </InputContainer>
  )
}

export { Ui }
