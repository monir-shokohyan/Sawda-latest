import * as yup from 'yup'
import { schema } from '../schema'

export type ReviewType = yup.InferType<typeof schema>
