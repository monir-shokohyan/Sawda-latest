import * as yup from 'yup'
import { schema } from '../schema'

export type AddProductFormData = yup.InferType<typeof schema>
export interface AddProductSubmitProps {
  onSubmit: (data: AddProductFormData) => void
}