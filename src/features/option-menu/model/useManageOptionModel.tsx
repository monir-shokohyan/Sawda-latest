import { MenuOption } from '@shared/ui/menu-dropdown/ui'
import { OptionMenuProps } from '../type'
import { useNavigate } from 'react-router-dom'
import { FaFlag, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Paths } from '@shared/api/paths/paths'
import { modals } from '@mantine/modals'
import { Text, useMantineTheme } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { useDisclosure } from '@mantine/hooks'

const useManageOptionModel = ({ type, id }: OptionMenuProps) => {
  const navigate = useNavigate()
  const [opened, { open, close }] = useDisclosure(false)
  const theme = useMantineTheme()
  const { isMobile } = Responsive()
  const optionConstant: MenuOption[] = [
    {
      label: 'Report',
      icon: <FaFlag size={14} />,
      handleClick: () => Report(),
    },
    {
      label: 'Edit Account',
      icon: <FaRegEdit size={14} />,
      handleClick: () => Edit(),
    },
    {
      label: 'Delete Account',
      icon: <RiDeleteBin5Line size={14} />,
      handleClick: () => open(),
      color: 'red',
    },
  ]
  const Report = () => {
    alert(`report : ${id}`)
  }

  const Edit = () => {
    if (type === 'account') {
      navigate(`${Paths.EditProfile}${id}`)
      return
    }
    if (isMobile) {
      navigate(Paths.AddProductMobile)
      return
    }
    navigate(Paths.AddProduct)
  }

  const Delete = () => {
    alert(id)
  }

  return {
    optionConstant,
    theme,
    opened,
    close,
    Delete,
  }
}

export { useManageOptionModel }
