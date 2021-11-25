import { FormikValues, useFormikContext } from "formik"
import s from "./ErrorSummary.module.scss"

const ErrorSummary = () => {
  const { errors, submitCount } = useFormikContext<FormikValues>()

  if (Object.keys(errors).length > 0 && submitCount > 0)
    return (
      <p className={s.errors}>
        Whoa there - answer all the questions before continuing 👆
      </p>
    )

  return null
}

export default ErrorSummary
