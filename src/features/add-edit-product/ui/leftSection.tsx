import { Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { CategoryConstants } from '@shared/ui/category/constant'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { FormChipGroup } from '@shared/ui/form/FormChipGroup'
import { ConditionConstants, IsFreeConstants } from '../constant'
import { ProvinceConstants } from '@features/search-filter/constant'
import { FormPriceInput } from '@shared/ui/form/FormPriceInput'
import { FormSlider } from '@shared/ui/form/FormSlider'
import { FormColorPicker } from '@shared/ui/form/FormColorPicker'
import { FormTextarea } from '@shared/ui/form/FormTextArea'
import { FormInput } from '@shared/ui/form'
import { SettingsListConentWrapper } from '@shared/ui/setting-list-content-wrapper'
import {
  Control,
  UseFormHandleSubmit,
  UseFormWatch,
  UseFormSetValue,
} from 'react-hook-form'
import { AddProductFormData } from '../types'

interface LeftSectionProps {
  control: Control<AddProductFormData>
  handleSubmit: UseFormHandleSubmit<AddProductFormData>
  watch: UseFormWatch<AddProductFormData>
  setValue: UseFormSetValue<AddProductFormData>
  onSubmit: (data: AddProductFormData) => void
}

const LeftSection = ({
  control,
  handleSubmit,
  watch,
  setValue,
  onSubmit,
}: LeftSectionProps) => {
  const { isMobile } = Responsive()

  return (
    <Stack w={isMobile ? '100%' : '62%'}>
      <SettingsListConentWrapper
        title="About Product"
        allowButton
        buttonTitle="Add Product"
        handleSubmit={handleSubmit(onSubmit)}
      >
        <FormSelect
          label="Category"
          name="category"
          placeholder="Select Category"
          control={control}
          data={CategoryConstants}
        />
        <FormInput
          label="Title"
          name="title"
          control={control}
          placeholder="write your title"
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
        {watch('isfree') === '1' && (
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
      </SettingsListConentWrapper>
    </Stack>
  )
}

export { LeftSection }
