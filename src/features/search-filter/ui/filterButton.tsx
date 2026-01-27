import { forwardRef } from 'react'
import { Responsive } from '@shared/hooks/responsive'
import { SActionIcon } from '@shared/styles'
import { MdOutlineManageSearch } from 'react-icons/md'

interface Props {
  iconSize?: 'xl' | 'md' | 'lg' | 'sm' | string
  handleClick?: () => void
}

const FilterButton = forwardRef<HTMLButtonElement, Props>(
  ({ iconSize, handleClick, ...others }, ref) => {
    const { isMobile } = Responsive()

    return (
      <SActionIcon
        ref={ref}
        size={iconSize}
        {...others}
        onClick={handleClick}
        radius="50%"
      >
        <MdOutlineManageSearch size={isMobile ? 18 : 20} />
      </SActionIcon>
    )
  },
)

export { FilterButton }
