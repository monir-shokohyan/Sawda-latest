import { ProductScroll } from '@features/product-scroll/ui'
import { FilterButton } from '@features/search-filter/ui/filterButton'
import { MenuFilter } from '@features/search-filter/ui/MenuFilter'
import { Group, TextInput } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { Responsive } from '@shared/hooks/responsive'
import { HoveredActionIcon, ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Listing = () => {
  const isMobile = Responsive()
  const navigate = useNavigate()
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
