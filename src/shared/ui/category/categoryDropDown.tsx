import { MdOutlineApps } from 'react-icons/md'
import { CategoryConstants } from './constant'
import { Paths } from '@shared/api/paths/paths'
import { useNavigate } from 'react-router-dom'
import { MenuDropDown } from '../menu-dropdown'
import { ButtonProps } from '@mantine/core'

const CategoryDropDown = (props: ButtonProps) => {
  const navigate = useNavigate()

  const modifiedCategory = CategoryConstants.map((category) => {
    return {
      ...category,
      handleClick: () => {
        navigate(`${Paths.Search}monir?category=${category?.id}`)
      },
    }
  })

  return (
    <MenuDropDown
      options={modifiedCategory}
      triggerButton="All Categories"
      leftSection={<MdOutlineApps size={20} />}
      width={290}
      props={props}
    />
  )
}

export { CategoryDropDown }
