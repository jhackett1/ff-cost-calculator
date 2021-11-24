import s from "./Panel.module.scss"

interface Props {
  children: React.ReactChild | React.ReactChild[]
  title?: string
  colour?: "blue" | "yellow"
}

const Panel = ({ children, title, colour }: Props): React.ReactElement => (
  <section className={s.section}>
    {title && (
      <header
        className={
          colour === "blue"
            ? s.headerBlue
            : colour === "yellow"
            ? s.headerYellow
            : s.headerBlack
        }
      >
        <h2 className={s.heading}>{title}</h2>
      </header>
    )}
    <div className={s.inner}>{children}</div>
  </section>
)

export default Panel
