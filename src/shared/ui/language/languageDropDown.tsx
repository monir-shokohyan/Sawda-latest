import { ButtonProps } from '@mantine/core'
import { LanguageContants } from './constant'
import { MenuDropDown } from '../menu-dropdown'

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
        props={props}
        triggerButton="English"
        width={120}
      />
    </>
  )
}

export { LanguageDropDown }
