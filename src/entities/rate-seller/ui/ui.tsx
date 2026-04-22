import { Stack } from '@mantine/core'
import { useManageReviewForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormRating } from '@shared/ui/form/FormRating'
import { FormTextarea } from '@shared/ui/form/FormTextArea'

const Ui = () => {
  const { handleSubmit, onSubmit, control, t } = useManageReviewForm()

  return (
    <FormWrapper
      handleSubmit={handleSubmit(onSubmit)}
      allowButton
      buttonTitle={t('product.postReview')}
      buttonFullWidth
      title=""
      allowPadding={false}
      transparent
      marginTop="0px"
      fullSize={false}
    >
      <Stack gap="0px">
        <FormRating
          name="rate"
          control={control}
          mb={0}
        />
        <FormTextarea
          placeholder={t('product.writeReview')}
          label=""
          name="review"
          control={control}
          mb={0}
          rows={4}
          maxLength={200}
        />
      </Stack>
    </FormWrapper>
  )
}

export { Ui }
