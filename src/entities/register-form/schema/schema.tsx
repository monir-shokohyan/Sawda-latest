import * as yup from 'yup'

export const schema = yup.object().shape(
  {
    username: yup
      .string()
      .trim()
      .min(6, 'At least 6 characters')
      .required('Username is required'),

    email: yup
      .string()
      .trim()
      .email('Invalid email format')
      .when('phoneNumber', {
        is: (phone: string | undefined) => !phone?.trim(),
        then: (s) => s.required('Email or phone number is required'),
        otherwise: (s) => s.nullable().notRequired(),
      }),

    phoneNumber: yup
      .string()
      .trim()
      .when('email', {
        is: (email: string | undefined) => !email?.trim(),
        then: (s) =>
          s
            .required('Email or phone number is required')
            .matches(
              /^(?:\+93|0)?7[0-9]{8}$/,
              'Please enter a valid Afghan mobile number (e.g. 07X XXX XXXX or +937XXXXXXXX)',
            ),
        otherwise: (s) => s.nullable().notRequired(),
      }),

    password: yup
      .string()
      .trim()
      .min(8, 'At least 8 characters')
      .required('Password is required'),

    confirm_password: yup
      .string()
      .trim()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  },
  [['email', 'phoneNumber']],
)
