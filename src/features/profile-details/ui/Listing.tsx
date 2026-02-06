import { ProductScroll } from '@features/product-scroll/ui'
import { FilterButton } from '@features/search-filter/ui/filterButton'
import { MenuFilter } from '@features/search-filter/ui/MenuFilter'
import { Group, TextInput } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { Responsive } from '@shared/hooks/responsive'
import { SActionIcon } from '@shared/styles'
import { PrimaryHeading } from '@shared/typography/primary-heading'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Listing = () => {
  const { isMobile } = Responsive()
  const navigate = useNavigate()

  return (
    <>
      <Group
        justify="space-between"
        align="center"
        py={30}
      >
        <PrimaryHeading>Listing</PrimaryHeading>
        <Group
          justify="space-between"
          align="center"
        >
          <TextInput
            placeholder="Search listing..."
            radius={5}
            size="sm"
            rightSection={
              <SActionIcon variant="transparent">
                <FaSearch />
              </SActionIcon>
            }
          />

          {!isMobile && (
            <MenuFilter
              iconSize="lg"
              arrowPosition="bottom-end"
            />
          )}
          {isMobile && (
            <FilterButton
              iconSize="lg"
              handleClick={() => navigate(`${Paths.MobileModel}/filters`)}
            />
          )}
        </Group>
      </Group>
      <ProductScroll allowPadding={false} />
    </>
  )
}

export { Listing }
