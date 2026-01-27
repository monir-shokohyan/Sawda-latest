import { SearchFilter } from '@features/search-filter/ui'
import { Group, Stack, Text } from '@mantine/core'
import { GradientContainer } from '@shared/ui/containers'
import { ProductScroll } from '@features/product-scroll/ui'
import { Responsive } from '@shared/hooks/responsive'
import { HoveredSelect } from '@shared/styles'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CategoryConstants } from '@shared/ui/category/constant'
import { MdCheck } from 'react-icons/md'
import { Categorytype } from '@shared/ui/category/types'
import { Paths } from '@shared/api/paths/paths'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') ?? 'Untitled'
  const navigate = useNavigate()

  const selectCategory = (value: string | null) => {
    navigate(`${Paths.Search}/monir?category=${value}`)
  }
  return (
    <Stack
      w="100%"
      gap={0}
      px={isMobile ? '10px' : '0px'}
    >
      <GradientContainer>
        <Group
          w="100%"
          justify="space-between"
          py="xl"
          wrap="wrap"
        >
          <HoveredSelect
            placeholder="Choose a category"
            data={CategoryConstants}
            nothingFoundMessage="No category found"
            comboboxProps={{
              transitionProps: { transition: 'fade-down', duration: 400 },
            }}
            onChange={selectCategory}
            defaultValue={category || '1'}
            renderOption={({ option, checked }) => (
              <Group
                gap="sm"
                c="textPrimary"
              >
                {checked && <MdCheck />}
                {(option as Categorytype).icon}
                <Text
                  c="textPrimary"
                  size="sm"
                >
                  {option.label}
                </Text>
              </Group>
            )}
            w={isMobile ? '100%' : '30%'}
          />
          <SearchFilter
            isMobile={isMobile}
            route="favorites"
          />
        </Group>
      </GradientContainer>

      <ProductScroll allowPadding={false} />
    </Stack>
  )
}

export { Ui }
