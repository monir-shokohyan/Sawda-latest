import { Group, Menu, Stack, Box, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ExpandArrow } from '@shared/ui/expandArrow'
import { FormNumberInput } from '@shared/ui/form/FormNumberInput'
import { Control, FieldValues, Path, useWatch } from 'react-hook-form'
import { IoIosArrowDown } from 'react-icons/io'

interface PriceFilterPillProps<T extends FieldValues> {
  control: Control<T>
  priceFromName: Path<T>
  priceToName: Path<T>
  currencySymbol: string
  currencyIcon: React.ReactNode
}

const PriceFilterPill = <T extends FieldValues>({
  control,
  priceFromName,
  priceToName,
  currencySymbol,
  currencyIcon,
}: PriceFilterPillProps<T>) => {
  const [opened, { close, toggle }] = useDisclosure(false)

  const priceFrom = useWatch({ control, name: priceFromName })
  const priceTo = useWatch({ control, name: priceToName })

  const hasValue = priceFrom > 0 || priceTo > 0

  const getDisplayText = () => {
    if (priceFrom > 0 && priceTo > 0) {
      return `${currencySymbol}${priceFrom} - ${currencySymbol}${priceTo}`
    }
    if (priceFrom > 0) {
      return `From ${currencySymbol}${priceFrom}`
    }
    if (priceTo > 0) {
      return `Up to ${currencySymbol}${priceTo}`
    }
    return 'Price'
  }

  const handleApply = () => {
    close()
  }

  return (
    <Menu
      shadow="md"
      width={200}
      position="bottom"
      withArrow
      opened={opened}
      onChange={toggle}
      closeOnItemClick={false}
      closeOnClickOutside={true}
      transitionProps={{ transition: 'fade-down', duration: 250 }}
    >
      <Menu.Target>
        <Button
          variant="default"
          onClick={toggle}
          leftSection={currencyIcon}
          rightSection={
            <ExpandArrow
              size={20}
              isOpen={opened}
            />
          }
          radius="xl"
          size="sm"
          styles={{
            root: {
              paddingLeft: '8px',
              paddingRight: '8px',
              borderRadius: '50px',
              fontWeight: '400',
              fontSize: '14px',
              borderColor: hasValue
                ? 'var(--mantine-color-blue-filled)'
                : undefined,
              borderWidth: hasValue ? '2px' : '1px',
            },
          }}
          bg="background.8"
          c={hasValue ? 'darkText' : 'dimmed'}
        >
          {getDisplayText()}
        </Button>
      </Menu.Target>

      <Menu.Dropdown p="md">
        <Stack gap="md">
          <FormNumberInput
            name={priceFromName}
            control={control}
            label={`Price From (${currencySymbol})`}
            placeholder="From"
            mb={0}
          />
          <FormNumberInput
            label={`Price To (${currencySymbol})`}
            name={priceToName}
            control={control}
            placeholder="To"
            mb={0}
          />
          <Group
            justify="flex-end"
            gap="xs"
            mt="xs"
          >
            <Button
              size="sm"
              onClick={handleApply}
            >
              Apply
            </Button>
          </Group>
        </Stack>
      </Menu.Dropdown>
    </Menu>
  )
}

export { PriceFilterPill }
