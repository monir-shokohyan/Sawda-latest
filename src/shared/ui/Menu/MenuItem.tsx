import { Flex, useMantineTheme } from '@mantine/core'
import { HoveredItem, ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { ReactElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ExpandArrow } from '../expandArrow'
import { useAppSelector } from '@shared/hooks/redux-hooks'
import { SettingDropDownSelector } from '@features/mobile-model/reducers'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export interface Profiletype {
  label: string
  icon: ReactElement
  handleClick?: () => void
  path?: string
}
interface Props {
  option: Profiletype
}

const MenuItem = ({ option }: Props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const settingDropDown = useAppSelector(SettingDropDownSelector)
  const { colors } = useMantineTheme()
  
  return (
    <HoveredItem
      $isActive={pathname === option.path}
      onClick={() => {
        if (option.handleClick) {
          option.handleClick()
        } else if (option.path) {
          navigate(option.path)
        }
      }}
    >
      <Flex justify="space-between" w="100%">
      <Flex
        gap={20}
        c="primary"
        align="center"
      >
        {option.icon}
        <ResText
          fontSize={TypographySize.SemiLarge}
          c="darkText"
        >
          {option.label}
        </ResText>
      </Flex>
      {option.label.toLocaleLowerCase() === 'settings' && <ExpandArrow color={colors.primary[8]} isOpen={settingDropDown} />}
      {option.label.toLocaleLowerCase() !== 'settings' && <MdOutlineKeyboardArrowRight color={colors.primary[8]}  size={20} />}
      </Flex>
    </HoveredItem>
  )
}

export { MenuItem }
