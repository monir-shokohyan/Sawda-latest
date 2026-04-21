import { ButtonProps } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { MenuDropDown } from '../menu-dropdown'
import { MdLanguage } from 'react-icons/md'

const LanguageDropDown = (props: ButtonProps) => {
  const { i18n } = useTranslation()

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'دری', value: 'fa' },
    { label: 'پښتو', value: 'ps' },
  ]

  const options = languages.map((lang) => ({
    label: lang.label,
    icon: <MdLanguage size={20} />,
    handleClick: () => i18n.changeLanguage(lang.value),
  }))

  const currentLabel = languages.find((l) => l.value === i18n.language)?.label ?? 'English'

  return (
    <MenuDropDown
      options={options}
      props={props}
      triggerButton={currentLabel}
      width={120}
    />
  )
}

export { LanguageDropDown }