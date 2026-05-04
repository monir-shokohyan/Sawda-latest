import { Group, Menu, Stack, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useIsRtlLang } from '@shared/hooks'
import { ExpandArrow } from '@shared/ui/expandArrow'
import { FormNumberInput } from '@shared/ui/form/FormNumberInput'
import { Control, FieldValues, Path, useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const { dir } = useIsRtlLang()

  const hasValue = priceFrom > 0 || priceTo > 0

  const getDisplayText = () => {
    if (priceFrom > 0 && priceTo > 0) {
      return `${currencySymbol}${priceFrom} - ${currencySymbol}${priceTo}`
    }
    if (priceFrom > 0) {
      return `${currencySymbol}${priceFrom}`
    }
    if (priceTo > 0) {
      return `${currencySymbol}${priceTo}`
    }
    return t('product.price')
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
        <Stack
          gap="md"
          dir={dir}
        >
          <FormNumberInput
            name={priceFromName}
            control={control}
            label={`${t('product.priceFrom')} (${currencySymbol})`}
            placeholder={t('filter.from')}
            mb={0}
          />
          <FormNumberInput
            label={`${t('product.priceTo')}  (${currencySymbol})`}
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
              {t('common.apply')}
            </Button>
          </Group>
        </Stack>
      </Menu.Dropdown>
    </Menu>
  )
}

export { PriceFilterPill }
