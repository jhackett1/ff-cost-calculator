import s from "./Dots.module.scss"

interface Props {
  filled: number
  unfilled: number
}

const Dots = ({ filled, unfilled }: Props): React.ReactElement => (
  <div className={s.dots} title={`Step ${filled} of ${unfilled + filled}`}>
    {[...Array(filled)].map(dot => (
      <div className={s.filledDot}></div>
    ))}

    {[...Array(unfilled)].map(dot => (
      <div></div>
    ))}
  </div>
)

export default Dots
