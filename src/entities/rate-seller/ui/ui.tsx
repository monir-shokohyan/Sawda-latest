import { Stack } from '@mantine/core'
import { useManageReviewForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormRating } from '@shared/ui/form/FormRating'
import { FormTextarea } from '@shared/ui/form/FormTextArea'

const Ui = () => {
  const { handleSubmit, onSubmit, control } = useManageReviewForm()

  return (
    <FormWrapper
      handleSubmit={handleSubmit(onSubmit)}
      allowButton
      buttonTitle="Post Review"
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
          placeholder="Write your review"
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
