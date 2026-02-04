import { ButtonProps } from '@mantine/core'
import { LanguageContants } from './constant'
import { MenuDropDown } from '../menu-dropdown'
import { TriggerButton } from '../buttons/triggerButton'

const LanguageDropDown = (props: ButtonProps) => {
  const modifiedLanguage = LanguageContants.map((language) => {
    return {
      ...language,
      handleClick: () => {
        console.log(language)
      },
    }
  })
  return (
    <>
      <MenuDropDown
        options={modifiedLanguage}
        triggerButton={
          <TriggerButton
            content="English"
            props={props}
          />
        }
        width={120}
      />
    </>
  )
}

export { LanguageDropDown }
