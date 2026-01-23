import { Flex } from '@mantine/core'
import { HoveredItem, ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { ReactElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
    </HoveredItem>
  )
}

export { MenuItem }
