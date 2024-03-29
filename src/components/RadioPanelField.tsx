import { Field, FormikValues, useFormikContext } from "formik"
import { Choice } from "../types"
import s from "./RadioPanelField.module.scss"

const RadioPanel = ({ icon, label, hint, name, value }: Choice) => (
  <div className={s.panel}>
    <Field
      className={s.input}
      type="radio"
      name={name}
      value={value}
      id={`${name}-${value}`}
      aria-describedby={`${name}-${value}-hint`}
    />
    <label className={s.label} htmlFor={`${name}-${value}`}>
      {label}
    </label>
    <div className={s.hint} id={`${name}-${value}-hint`}>
      {hint}
    </div>
  </div>
)

interface Props {
  question: string
  choices: Choice[]
  guidance: React.ReactChild
}

/** user can select one from a series of panels, with a hint and optional icon for each */
const RadioPanelField = ({
  question,
  choices,
  guidance,
}: Props): React.ReactElement => {
  const { touched, errors } = useFormikContext<FormikValues>()
  const errorToShow = touched[choices[0].name] && errors[choices[0].name]

  return (
    <fieldset className={s.fieldset}>
      <legend className={s.legend}>{question}</legend>

      {errorToShow && <p className={s.error}>{errorToShow}</p>}

      <details className={s.help}>
        <summary>
          <span>Help me choose</span>
        </summary>
        <div className={s.helpText}>{guidance}</div>
      </details>

      {choices.map(choice => (
        <RadioPanel key={choice.value} {...choice} />
      ))}
    </fieldset>
  )
}

export default RadioPanelField
