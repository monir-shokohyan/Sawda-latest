import { Flex, Group, NumberInput, Select, Text } from '@mantine/core'
import { CategoryConstants } from '@shared/ui/category/constant'
import { Categorytype } from '@shared/ui/category/types'
import { useState } from 'react'
import { MdAttachMoney, MdCheck } from 'react-icons/md'
import { CurrencyConstants, ProvinceConstants } from '../constant'
import { TbAdjustmentsHorizontal, TbCurrencyAfghani } from 'react-icons/tb'
import { HoveredSelect, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'

const Filter = () => {
  const { isMobile } = Responsive()
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)
  const [selectedCurrency, setSelectedCurrency] = useState<string>('AFN')

  const getDistrictsForProvince = () => {
    if (!selectedProvince) return []
    const province = ProvinceConstants.find((p) => p.value === selectedProvince)
    return province?.districts || []
  }

  const handleProvinceChange = (value: string | null) => {
    setSelectedProvince(value)
    setSelectedDistrict(null)
  }

  const currencyIcon =
    selectedCurrency === 'AFN' ? (
      <TbCurrencyAfghani size={20} />
    ) : (
      <MdAttachMoney size={20} />
    )

  const currencySymbol = selectedCurrency === 'AFN' ? '؋' : '$'

  return (
    <>
      <Flex
        gap={isMobile ? 5 : 20}
        px={10}
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <HoveredSelect
          label="Select Category"
          placeholder="Choose a category"
          data={CategoryConstants}
          nothingFoundMessage="No category found"
          comboboxProps={{
            transitionProps: { transition: 'fade-down', duration: 400 },
          }}
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
          w={isMobile ? '100%' : '50%'}
        />
        <Select
          label="Select Province"
          placeholder="Choose a province"
          data={ProvinceConstants}
          value={selectedProvince}
          comboboxProps={{
            transitionProps: { transition: 'fade-down', duration: 400 },
          }}
          onChange={handleProvinceChange}
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
          w={isMobile ? '100%' : '50%'}
        />
      </Flex>

      <Flex
        gap={isMobile ? 5 : 20}
        px={10}
        mt={isMobile ? 30 : 10}
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <Select
          label="Select District"
          placeholder="Choose a district"
          data={getDistrictsForProvince()}
          value={selectedDistrict}
          onChange={setSelectedDistrict}
          comboboxProps={{
            transitionProps: { transition: 'fade-down', duration: 400 },
          }}
          disabled={!selectedProvince}
          nothingFoundMessage={
            selectedProvince ? 'No districts found' : 'Select a province first'
          }
          w={isMobile ? '100%' : '50%'}
          renderOption={({ option, checked }) => (
            <Group
              gap="sm"
              c="textPrimary"
            >
              {checked && <MdCheck />}
              <Text
                c="textPrimary"
                size="sm"
              >
                {option.label}
              </Text>
            </Group>
          )}
        />
        <Select
          label="Currency"
          placeholder="Select currency"
          data={CurrencyConstants}
          value={selectedCurrency}
          onChange={(value) => setSelectedCurrency(value || 'AFN')}
          clearable={false}
          comboboxProps={{
            transitionProps: { transition: 'fade-down', duration: 400 },
          }}
          leftSection={currencyIcon}
          w={isMobile ? '100%' : '50%'}
          renderOption={({ option, checked }) => (
            <Group
              gap="sm"
              c="textPrimary"
            >
              {checked && <MdCheck />}
              <Text
                c="textPrimary"
                size="sm"
              >
                {option.label}
              </Text>
            </Group>
          )}
        />
      </Flex>

      <Flex
        gap={isMobile ? 5 : 20}
        px={10}
        mt={isMobile ? 30 : 10}
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <NumberInput
          label={`Price From (${currencySymbol})`}
          placeholder="From"
          w={isMobile ? '100%' : '50%'}
          decimalScale={2}
          min={0}
          rightSection={currencyIcon}
          rightSectionWidth={40}
        />
        <NumberInput
          label={`Price To (${currencySymbol})`}
          placeholder="To"
          w={isMobile ? '100%' : '50%'}
          decimalScale={2}
          min={0}
          rightSection={currencyIcon}
          rightSectionWidth={40}
        />
      </Flex>

      <Flex
        px={10}
        mt={30}
      >
        <SButton
          leftSection={<TbAdjustmentsHorizontal />}
          fullWidth
        >
          Filter ads
        </SButton>
      </Flex>
    </>
  )
}

export { Filter }
