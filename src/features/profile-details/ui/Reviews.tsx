import { ProfileSection } from '@features/product-card/ui/profileSection'
import { Flex, Group, Rating, Select, Stack } from '@mantine/core'
import { ResText } from '@shared/styles'
import { useState } from 'react'
import { NewestToOldestObj } from '../constant'
import { TypographySize } from '@shared/typography'

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('newest')

  return (
    <>
      <Group
        justify="space-between"
        align="center"
        py={30}
      >
        <ResText
          fontSize={TypographySize.Large}
          c="textPrimary"
        >
          Reviews
        </ResText>

        <Select
          data={NewestToOldestObj}
          defaultValue={selectedFilter}
          value={selectedFilter}
          onChange={(value) => setSelectedFilter(value as string)}
          checkIconPosition="left"
          comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 400 } }}
        />
      </Group>
      {Array.from({ length: 10 }).map(() => {
        return (
          <Flex
            style={{ borderBottom: '1px solid lightgray' }}
            py={20}
          >
            <Stack>
              <ProfileSection
                product={{
                  username: 'monir198321',
                  timestamp: '12d 13m',
                }}
                allowPadding={false}
              />
              <Rating />
              <ResText fontSize={TypographySize.SemiSmall}>
                Good price for the item, though the description could have been
                clearer. Was really grateful that they were flexible for meeting
                up Thanks so much!
              </ResText>
            </Stack>
          </Flex>
        )
      })}
    </>
  )
}

export { Reviews }
