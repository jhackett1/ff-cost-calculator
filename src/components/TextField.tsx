import { Field, FormikValues, useFormikContext } from "formik"
import s from "./TextField.module.scss"

interface Props {
  name: string
  label: string
  hint?: string
  placeholder?: string
  required?: boolean
}

const TextField = ({ name, label, hint, required, placeholder }: Props) => {
  const { touched, errors } = useFormikContext<FormikValues>()
  const errorToShow = touched[name] && errors[name]

  return (
    <div className={s.outer}>
      <label className={s.label} htmlFor={name}>
        {label}
      </label>

      {hint && (
        <p className={s.hint} id={`${name}-hint`}>
          {hint}
        </p>
      )}

      {errorToShow && <p className={s.error}>{errorToShow}</p>}

      <Field
        className={s.input}
        name={name}
        id={name}
        placeholder={placeholder}
        aria-describedby={hint && `${name}-hint`}
        required={required}
      />
    </div>
  )
}

export default TextField
