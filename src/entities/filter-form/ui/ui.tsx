import { Flex } from '@mantine/core'
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
    category,
    t,
    modifiedCurrencyConstant,
    modifiedProvinceConstants,
  } = useManageFilterForm({ isPill: false })
  return (
    <FormWrapper
      title=""
      allowButton
      buttonTitle={t('filter.filterAds')}
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
          label={t('common.selectCategory')}
          placeholder={t('common.chooseCategory')}
          data={category}
          nothingFoundMessage="No category found"
          mb={10}
        />
        <FormSelect
          name="province"
          control={control}
          label={t('product.province')}
          placeholder={t('product.selectProvince')}
          data={modifiedProvinceConstants}
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
          label={t('product.district')}
          placeholder={t('product.selectDistrict')}
          data={getDistrictsForProvince()}
          disabled={!isProvinceActive}
          mb={10}
        />
        <FormSelect
          name="currency"
          control={control}
          label={t('product.currency')}
          placeholder={t('product.selectCurrency')}
          data={modifiedCurrencyConstant}
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
          label={`${t('product.priceFrom')} (${currencySymbol})`}
          placeholder={t('filter.from')}
          mb={10}
        />
        <FormNumberInput
          label={`${t('product.priceTo')} (${currencySymbol})`}
          name="priceTo"
          control={control}
          placeholder={t('filter.to')}
          mb={10}
        />
      </Flex>
    </FormWrapper>
  )
}

export { Ui }
