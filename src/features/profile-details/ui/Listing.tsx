import { ProductScroll } from '@features/product-scroll/ui'
import { Filter } from '@features/search-filter/ui/filter'
import { Group, TextInput } from '@mantine/core'
import { HoveredActionIcon, ResText } from '@shared/styles'
import { FaSearch } from 'react-icons/fa'

const Listing = () => {
  return (
    <>
      <Group
        justify="space-between"
        align="center"
        py={30}
      >
        <ResText
          fontSize={24}
          c="textPrimary"
        >
          Listing
        </ResText>
        <Group
          justify="space-between"
          align="center"
        >
          <TextInput
            placeholder="Search listing..."
            radius={5}
            size="sm"
            rightSection={
              <HoveredActionIcon variant="transparent">
                <FaSearch />
              </HoveredActionIcon>
            }
          />

          <Filter
            iconSize="lg"
            arrowPosition="bottom-end"
          />
        </Group>
      </Group>
      <ProductScroll allowPadding={false} />
    </>
  )
}

export { Listing }
