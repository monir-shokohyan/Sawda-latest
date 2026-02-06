import { ProfileSection } from '@features/product-card/ui/profileSection'
import { Flex, Group, Rating, Select, Stack } from '@mantine/core'
import { useState } from 'react'
import { NewestToOldestObj } from '../constant'
import { Paragraph } from '@shared/typography/paragraph'
import { PrimaryHeading } from '@shared/typography/primary-heading'

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('newest')

  return (
    <>
      <Group
        justify="space-between"
        align="center"
        py={30}
      >
        <PrimaryHeading>Reviews</PrimaryHeading>

        <Select
          data={NewestToOldestObj}
          defaultValue={selectedFilter}
          value={selectedFilter}
          onChange={(value) => setSelectedFilter(value as string)}
          checkIconPosition="left"
          comboboxProps={{
            transitionProps: { transition: 'fade-down', duration: 400 },
          }}
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
                profile={{
                  username: 'monir198321',
                  timestamp: '12d 13m',
                }}
                allowPadding={false}
              />
              <Rating />
              <Paragraph>
                Good price for the item, though the description could have been
                clearer. Was really grateful that they were flexible for meeting
                up Thanks so much!
              </Paragraph>
            </Stack>
          </Flex>
        )
      })}
    </>
  )
}

export { Reviews }
