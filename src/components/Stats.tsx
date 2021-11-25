import s from "./Stats.module.scss"

interface StatProps {
  value: string
  caption: string
}

export const Stat = ({ value, caption }: StatProps): React.ReactElement => (
  <div className={s.stat}>
    <dd className={s.value}>{value}</dd>
    <dt className={s.caption}>{caption}</dt>
  </div>
)

interface Props {
  children: React.ReactChild[]
}

const Stats = ({ children }: Props): React.ReactElement => (
  <dl className={s.stats}>{children}</dl>
)

export default Stats
