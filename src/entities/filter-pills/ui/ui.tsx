import { useManageFilterForm } from '@entities/filter-form/model'
import { Button, Divider, Flex, Group } from '@mantine/core'
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
    category,
    t,
    modifiedProvinceConstants,
    modifiedCurrencyConstant,
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
          label={t('product.category')}
          placeholder={t('product.category')}
          data={category}
          nothingFoundMessage="No category found"
          mb={10}
          shape="pill"
        />
        <FormSelect
          name="province"
          control={control}
          label={t('product.province')}
          placeholder={t('product.province')}
          data={modifiedProvinceConstants}
          mb={10}
          shape="pill"
        />
        <FormSelect
          name="district"
          control={control}
          label={t('product.district')}
          placeholder={t('product.district')}
          data={getDistrictsForProvince()}
          disabled={!isProvinceActive}
          mb={10}
          shape="pill"
        />
        <FormSelect
          name="currency"
          control={control}
          label={t('product.currency')}
          placeholder={t('product.currency')}
          data={modifiedCurrencyConstant}
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
          {t('common.clear')}
        </Button>
      </Group>
    </Flex>
  )
}

export { Ui }