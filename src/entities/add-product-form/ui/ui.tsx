import { AddProductSubmitProps } from '../types'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormInput } from '@shared/ui/form'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { CategoryConstants } from '@shared/ui/category/constant'
import { FormTextarea } from '@shared/ui/form/FormTextArea'
import { FormChipGroup } from '@shared/ui/form/FormChipGroup'
import { ConditionConstants, IsFreeConstants } from '../constant'
import { FormColorPicker } from '@shared/ui/form/FormColorPicker'
import { FormPriceInput } from '@shared/ui/form/FormPriceInput'
import { FormSlider } from '@shared/ui/form/FormSlider'
import { ProvinceConstants } from '@entities/filter-form/constant'
import { useManageAddProduct } from '../model'

const Ui = ({ onSubmit }: AddProductSubmitProps) => {
  const { isFree, isMobile, handleSubmit, control } = useManageAddProduct()

  return (
    <FormWrapper
      title="About Product"
      allowButton
      buttonTitle="Add Product"
      handleSubmit={handleSubmit(onSubmit)}
      buttonFullWidth={isMobile}
    >
      <FormInput
        label="Title"
        name="title"
        control={control}
        placeholder="write your title"
      />
      <FormSelect
        label="Category"
        name="category"
        placeholder="Select Category"
        control={control}
        data={CategoryConstants}
      />
      <FormTextarea
        label="About product"
        name="description"
        control={control}
        mb={0}
      />
      <FormChipGroup
        label="Condition"
        name="condition"
        multiple={false}
        control={control}
        options={ConditionConstants}
      />
      <FormSelect
        label="Province"
        name="province"
        placeholder="Select province"
        control={control}
        data={ProvinceConstants}
      />
      <FormColorPicker
        label="Pick a color"
        name="color"
        control={control}
        multiple
        maxColors={4}
      />

      <FormChipGroup
        label="Price"
        name="isfree"
        multiple={false}
        control={control}
        options={IsFreeConstants}
      />
      {isFree && (
        <>
          <FormPriceInput
            label=""
            name="price"
            placeholder="Select Price"
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
