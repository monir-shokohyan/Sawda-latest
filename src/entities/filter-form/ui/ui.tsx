import { Flex } from '@mantine/core'
import { CategoryConstants } from '@shared/ui/category/constant'
import { CurrencyConstants, ProvinceConstants } from '../constant'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { FormNumberInput } from '@shared/ui/form/FormNumberInput'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { useManageFilterForm } from '../model'

const Ui = () => {
  const {
    isMobile,
    control,
    getDistrictsForProvince,
    isProvinceActive,
    currencyIcon,
    currencySymbol,
    handleSubmit,
    onSubmit,
  } = useManageFilterForm({isPill: false})
  return (
    <FormWrapper
      title=""
      allowButton
      buttonTitle="Filter ads"
      buttonLeftSection={<TbAdjustmentsHorizontal />}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Flex
        gap={isMobile ? 5 : 20}
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <FormSelect
          name="category"
          control={control}
          label="Select Category"
          placeholder="Choose a category"
          data={CategoryConstants}
          nothingFoundMessage="No category found"
          mb={10}
        />
        <FormSelect
          name="province"
          control={control}
          label="Select Province"
          placeholder="Choose a province"
          data={ProvinceConstants}
          mb={10}
        />
      </Flex>

      <Flex
        gap={isMobile ? 5 : 20}
        mt={isMobile ? 30 : 10}
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <FormSelect
          name="district"
          control={control}
          label="Select District"
          placeholder="Choose a district"
          data={getDistrictsForProvince()}
          disabled={!isProvinceActive}
          mb={10}
        />
        <FormSelect
          name="currency"
          control={control}
          label="Currency"
          placeholder="Select currency"
          data={CurrencyConstants}
          leftSection={currencyIcon}
          mb={10}
        />
      </Flex>

      <Flex
        gap={isMobile ? 5 : 20}
        mt={isMobile ? 30 : 10}
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <FormNumberInput
          name="priceFrom"
          control={control}
          label={`Price From (${currencySymbol})`}
          placeholder="From"
          mb={10}
        />
        <FormNumberInput
          label={`Price To (${currencySymbol})`}
          name="priceTo"
          control={control}
          placeholder="To"
          mb={10}
        />
      </Flex>
    </FormWrapper>
  )
}

export { Ui }
