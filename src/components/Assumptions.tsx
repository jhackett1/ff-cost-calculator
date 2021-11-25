import s from "./Assumptions.module.scss"

interface AssumptionProps {
  icon: React.ReactChild
  children: React.ReactChild[]
}

export const Assumption = ({
  icon,
  children,
}: AssumptionProps): React.ReactElement => (
  <li className={s.li}>
    {icon}

    <div className={s.inner}>{children}</div>
  </li>
)

interface Props {
  children: React.ReactChild[]
}

const Assumptions = ({ children }: Props): React.ReactElement => (
  <ul className={s.ul}>{children}</ul>
)

export default Assumptions
