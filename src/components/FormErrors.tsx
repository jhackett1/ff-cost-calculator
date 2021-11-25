import { FormikValues, useFormikContext } from "formik"
import s from "./FormErrors.module.scss"

const FormErrors = () => {
  const { errors } = useFormikContext<FormikValues>()

  if (Object.keys(errors).length > 0)
    return (
      <p className={s.errors}>
        Whoa there - answer all the questions before continuing 👆
      </p>
    )

  return null
}

export default FormErrors
