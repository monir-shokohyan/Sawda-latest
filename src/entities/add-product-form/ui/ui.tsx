import { AddProductSubmitProps } from '../types'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormInput } from '@shared/ui/form'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { FormTextarea } from '@shared/ui/form/FormTextArea'
import { FormChipGroup } from '@shared/ui/form/FormChipGroup'
import { FormColorPicker } from '@shared/ui/form/FormColorPicker'
import { FormPriceInput } from '@shared/ui/form/FormPriceInput'
import { FormSlider } from '@shared/ui/form/FormSlider'
import { ProvinceConstants } from '@entities/filter-form/constant'
import { useManageAddProduct } from '../model'

const Ui = ({ onSubmit }: AddProductSubmitProps) => {
  const { isFree, isMobile, handleSubmit, control, category, t, modifiedContant, modifiedConditionConstant } =
    useManageAddProduct()

  return (
    <FormWrapper
      title={t('product.aboutProduct')}
      allowButton
      buttonTitle={t('product.addProduct')}
      handleSubmit={handleSubmit(onSubmit)}
      buttonFullWidth={isMobile}
    >
      <FormInput
        label={t('product.title')}
        name="title"
        control={control}
        placeholder="write your title"
      />
      <FormSelect
        label={t('product.category')}
        name="category"
        placeholder={t('product.selectCategory')}
        control={control}
        data={category}
      />
      <FormTextarea
        label={t('product.aboutProduct')}
        name="description"
        control={control}
        mb={0}
      />
      <FormChipGroup
        label={t('product.condition')}
        name="condition"
        multiple={false}
        control={control}
        options={modifiedConditionConstant}
      />
      <FormSelect
        label={t('product.province')}
        name="province"
        placeholder={t('product.selectProvince')}
        control={control}
        data={ProvinceConstants}
      />
      <FormColorPicker
        label={t('product.pickColor')}
        name="color"
        control={control}
        multiple
        maxColors={4}
      />

      <FormChipGroup
        label={t('product.price')}
        name="isfree"
        multiple={false}
        control={control}
        options={modifiedContant}
      />
      {isFree && (
        <>
          <FormPriceInput
            label={t('product.price')}
            name="price"
            placeholder={t('product.selectPrice')}
            control={control}
          />
          <FormSlider
            label="Discount"
            name="discount"
            control={control}
            valueSuffix=" %"
          />
        </>
      )}
    </FormWrapper>
  )
}

export { Ui }
