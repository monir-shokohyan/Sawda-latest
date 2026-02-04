import { MenuDropDown } from '@shared/ui/menu-dropdown'
import { OptionMenuProps } from '../type'
import { useManageOptionModel } from '../model'

function Ui({ type, id }: OptionMenuProps) {
  const { optionConstant } = useManageOptionModel({ type, id })
  return (
    <MenuDropDown
      showExpandArrow={false}
      options={optionConstant}
      width={180}
      position="bottom"
    />
  )
}

export { Ui }
