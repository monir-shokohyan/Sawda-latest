import { ButtonProps } from '@mantine/core'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { Responsive } from '@shared/hooks/responsive'
import { useProfileDropDown } from './hook'
import { MenuDropDown } from '../menu-dropdown'
import { TriggerButton } from '../buttons/triggerButton'

const ProfileDropDown = (props: ButtonProps) => {
  const { isMobile } = Responsive()
  const { ProfileConstant } = useProfileDropDown({ id: 'monir' })
const modifiedProfile = ProfileConstant.filter(
  profile => profile.label !== "Following" && profile.label !== "Notification"
);  return (
    <>
      <MenuDropDown
        options={modifiedProfile}
        triggerButton={
          <TriggerButton
            content={
              isMobile ? <MdOutlinePersonOutline size={20} /> : 'User name'
            }
            props={props}
          />
        }
        width={160}
        leftSection={isMobile ? null : <MdOutlinePersonOutline size={20} />}
      />
    </>
  )
}

export { ProfileDropDown }