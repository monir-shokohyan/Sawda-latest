import * as yup from 'yup'
import { schema } from '../schema'

export type FilterFormType = yup.InferType<typeof schema>
