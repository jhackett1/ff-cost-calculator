import s from "./Panel.module.scss"

interface Props {
  children: React.ReactChild | React.ReactChild[]
  title?: string
  colour?: "blue" | "yellow" | "glass"
}

const Panel = ({ children, title, colour }: Props): React.ReactElement => (
  <section className={colour === "glass" ? s.glassSection : s.section}>
    {title && (
      <header
        className={
          colour === "blue"
            ? s.headerBlue
            : colour === "glass"
            ? s.headerGlass
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
