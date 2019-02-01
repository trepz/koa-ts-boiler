import * as yup from 'yup'

export const StorePayload = yup.object({
  name: yup
    .string()
    .required()
    .min(3)
    .max(100),
})
