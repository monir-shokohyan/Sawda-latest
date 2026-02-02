import { schema } from '../schema'
import * as yup from 'yup'

export interface ProductsDetailsProps {
  DetailsObject: {
    title: string
    description: string | string[]
  }[]
  DetailsList: {
    title: string
  }[]
}

export type AddProductFormData = yup.InferType<typeof schema>
