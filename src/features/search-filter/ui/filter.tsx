import {
  ActionIcon,
  Flex,
  Group,
  Menu,
  NumberInput,
  Select,
  Text,
} from '@mantine/core'
import { CategoryConstants } from '@shared/ui/category/constant'
import { Categorytype } from '@shared/ui/category/types'
import { useState } from 'react'
import {
  MdAttachMoney,
  MdCheck,
  MdClose,
  MdOutlineManageSearch,
} from 'react-icons/md'
import { CurrencyConstants, ProvinceConstants } from '../constant'
import { TbAdjustmentsHorizontal, TbCurrencyAfghani } from 'react-icons/tb'
import { useMediaQuery } from '@mantine/hooks'
import { HoveredSelect, SActionIcon, SButton } from '@shared/styles'

const Filter = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [opened, setOpened] = useState(false)

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
    <Menu
      shadow="md"
      width={isMobile ? '90%' : '81vw'}
      position="bottom-start"
      withArrow
      opened={opened}
      onChange={setOpened}
      closeOnItemClick={false}
      closeOnClickOutside={false}
    >
      <Menu.Target>
        <SActionIcon size="xl">
          <MdOutlineManageSearch size={isMobile ? 18 : 20} />
        </SActionIcon>
      </Menu.Target>

      <Menu.Dropdown
        px={10}
        py={20}
      >
        <Group
          justify="space-between"
          align="center"
          mb="md"
        >
          <Menu.Label>
            <MdOutlineManageSearch size={13} />
            <span style={{ marginLeft: '5px' }}>Filter</span>
          </Menu.Label>

          <ActionIcon
            variant="subtle"
            color="gray"
            onClick={() => setOpened(false)}
            aria-label="Close filter menu"
          >
            <MdClose size={18} />
          </ActionIcon>
        </Group>

        <Flex
          gap={isMobile ? 5 : 20}
          px={10}
          wrap={isMobile ? 'wrap' : 'nowrap'}
        >
          <HoveredSelect
            label="Select Category"
            placeholder="Choose a category"
            data={CategoryConstants}
            searchable
            clearable
            nothingFoundMessage="No category found"
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
            searchable
            clearable
            value={selectedProvince}
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
            searchable
            clearable
            value={selectedDistrict}
            onChange={setSelectedDistrict}
            disabled={!selectedProvince}
            nothingFoundMessage={
              selectedProvince
                ? 'No districts found'
                : 'Select a province first'
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
      </Menu.Dropdown>
    </Menu>
  )
}

export { Filter }
