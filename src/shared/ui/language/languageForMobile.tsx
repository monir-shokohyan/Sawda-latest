import { Chip, Flex, Group } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { DarkMode } from '../darkMode/darkMode'

const LanguageForMobile = () => {
  const { i18n } = useTranslation()

  return (
    <Flex justify="space-between">
      <Chip.Group
        value={i18n.language}
        onChange={(val) => i18n.changeLanguage(val as string)}
      >
        <Group justify="flex-start" gap={5}>
          <Chip variant="outline" value="en">Eng</Chip>
          <Chip variant="outline" value="fa">دری</Chip>
          <Chip variant="outline" value="ps">پښتو</Chip>
        </Group>
      </Chip.Group>
      <DarkMode />
    </Flex>
  )
}

export default LanguageForMobile