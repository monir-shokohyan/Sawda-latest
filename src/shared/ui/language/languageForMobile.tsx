import { Chip, Flex, Group } from '@mantine/core'
import { DarkMode } from '../darkMode/darkMode'

const LanguageForMobile = () => {
  return (
    <Flex justify="space-between">
      <Chip.Group>
        <Group
          justify="flex-start"
          gap={5}
        >
          <Chip
            variant="outline"
            value="1"
          >
            Eng
          </Chip>
          <Chip
            variant="outline"
            value="2"
          >
            دری
          </Chip>
          <Chip
            variant="outline"
            value="3"
          >
            پشتو
          </Chip>
        </Group>
      </Chip.Group>
      <DarkMode />
    </Flex>
  )
}

export default LanguageForMobile
