import * as Yup from "yup"

export const savedResultSchema = Yup.object().shape({
  foo: Yup.string(),
  bar: Yup.string(),
})
