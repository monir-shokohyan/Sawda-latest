import { MenuOption } from '@shared/ui/menu-dropdown/ui'
import { OptionMenuProps } from '../type'
import { useNavigate } from 'react-router-dom'
import { FaFlag, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Paths } from '@shared/api/paths/paths'
import { useMantineTheme } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { useDisclosure } from '@mantine/hooks'
import { Auth } from '@shared/authentication/auth'

const useManageOptionModel = ({ type, id }: OptionMenuProps) => {
  const navigate = useNavigate()
  const [opened, { open, close }] = useDisclosure(false)
  const { isAuth } = Auth()
  const theme = useMantineTheme()
  const { isMobile } = Responsive()
  const optionConstant: MenuOption[] = [
    {
      label: 'Report',
      icon: <FaFlag size={14} />,
      handleClick: () => Report(),
      disabled: !isAuth,
    },
    {
      label: `Edit ${type}`,
      icon: <FaRegEdit size={14} />,
      handleClick: () => Edit(),
      disabled: !isAuth,
    },
    {
      label: `Delete ${type}`,
      icon: <RiDeleteBin5Line size={14} />,
      handleClick: () => open(),
      color: 'red',
      disabled: !isAuth,
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
