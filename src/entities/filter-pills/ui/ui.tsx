import {
  CurrencyConstants,
  ProvinceConstants,
} from '@entities/filter-form/constant'
import { useManageFilterForm } from '@entities/filter-form/model'
import { Button, Divider, Flex, Group } from '@mantine/core'
import { CategoryConstants } from '@shared/ui/category/constant'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { PriceFilterPill } from './priceFilterPill'
import { MdOutlineCleaningServices } from 'react-icons/md'

const Ui = () => {
  const {
    control,
    getDistrictsForProvince,
    isProvinceActive,
    currencyIcon,
    currencySymbol,
    isMobile,
    resetForm,
  } = useManageFilterForm({ isPill: true })

  return (
    <Flex
      gap={10}
      mb={20}
      wrap="wrap"
    >
      <Group>
        <FormSelect
          name="category"
          control={control}
          label="Category"
          placeholder="category"
          data={CategoryConstants}
          nothingFoundMessage="No category found"
          mb={10}
          shape="pill"
        />
        <FormSelect
          name="province"
          control={control}
          label="Province"
          placeholder="province"
          data={ProvinceConstants}
          mb={10}
          shape="pill"
        />
        <FormSelect
          name="district"
          control={control}
          label="District"
          placeholder="district"
          data={getDistrictsForProvince()}
          disabled={!isProvinceActive}
          mb={10}
          shape="pill"
        />
        <FormSelect
          name="currency"
          control={control}
          label="Currency"
          placeholder="currency"
          data={CurrencyConstants}
          mb={10}
          shape="pill"
        />
        <PriceFilterPill
          control={control}
          priceFromName="priceFrom"
          priceToName="priceTo"
          currencySymbol={currencySymbol}
          currencyIcon={currencyIcon}
        />
        {!isMobile && <Divider orientation="vertical" />}
        <Button
          variant="default"
          radius="xl"
          size="sm"
          onClick={() => resetForm()}
          rightSection={<MdOutlineCleaningServices />}
          styles={{
            root: {
              paddingInline: '8px',
              borderRadius: '50px',
              fontWeight: '400',
              fontSize: '14px',
            },
          }}
          bg="background.8"
          w="7rem"
          c="dimmed"
        >
          Clear
        </Button>
      </Group>
    </Flex>
  )
}

export { Ui }
