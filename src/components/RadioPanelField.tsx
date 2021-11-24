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
    <p className={s.hint} id={`${name}-${value}-hint`}>
      {hint}
    </p>
  </div>
)

interface Props {
  name: string
  question: string
  choices: Choice[]
}

/** user can select one from a series of panels, with a hint and optional icon for each */
const RadioPanelField = ({
  name,
  question,
  choices,
}: Props): React.ReactElement => (
  <fieldset className={s.fieldset}>
    <legend className={s.legend}>{question}</legend>
    {choices.map(choice => (
      <RadioPanel key={choice.value} {...choice} />
    ))}
    <button className={s.help}>Help me choose</button>
  </fieldset>
)

export default RadioPanelField
