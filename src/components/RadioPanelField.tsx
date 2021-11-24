import { Choice } from "../types"
import s from "./RadioPanelField.module.scss"

const RadioPanel = ({ icon, label, hint, name, value }: Choice) => (
  <div className={s.panel}>
    <input
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
}: Props): React.ReactElement => (
  <fieldset className={s.fieldset}>
    <legend className={s.legend}>{question}</legend>

    <details className={s.help}>
      <summary>Help me choose</summary>
      <div className={s.helpText}>{guidance}</div>
    </details>

    {choices.map(choice => (
      <RadioPanel key={choice.value} {...choice} />
    ))}
  </fieldset>
)

export default RadioPanelField
