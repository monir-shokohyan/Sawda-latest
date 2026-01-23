import * as yup from 'yup';

export const schema = yup.object({
  currentPassword: yup
    .string()
    .required('Current password is required')
    .min(6, 'Password must be at least 6 characters'),

  newPassword: yup
    .string()
    .required('New password is required')
    .min(8, 'New password must be at least 8 characters'),

  confirmPassword: yup
    .string()
    .required('Please confirm your new password')
    .oneOf([yup.ref('newPassword')], 'Passwords must match'),
});