import * as yup from 'yup'

export const Schema = yup.object({
  username: yup.string().defined(),
  fullName: yup.string().defined(),
  phoneNumber: yup.string().defined(),
  province: yup.string().defined(),
  emailAddress: yup.string().email('Invalid email').defined(),
  bio: yup.string().max(400, 'Bio must be 400 characters or less').defined(),
  email: yup.string().email('Invalid email').defined(),
  mobileNumber: yup.string().defined(),
  gender: yup.string().defined(),
  companyName: yup.string().defined(),
  businessRegistrationNumber: yup.string().defined(),
  contactNumber: yup.string().defined(),
  website: yup.string().url('Invalid URL').defined(),
  businessEmail: yup.string().email('Invalid email').defined(),
})

export const schema = yup.object({
  category: yup.string().defined(),
  title: yup.string().defined(),
  condition: yup.string().defined(),
  province: yup.string().defined(),
  isfree: yup.string().defined(),
  price: yup.number().defined().positive("Price must be positive"),
  discount: yup
    .number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100%")
    .defined().positive(),
  color: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one color must be selected")
    .max(4, "You can select up to 4 colors")
    .defined(),
  description: yup
  .string()
  .trim()
  .min(2, "Description must be at least 2 characters")
  .max(400, "Description cannot exceed 400 characters")
  .defined(),
});

