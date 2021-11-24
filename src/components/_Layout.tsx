import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import s from "./_Layout.module.scss"

interface Props {
  title?: string
  children: React.ReactChild | React.ReactChild[]
}

const Layout = ({ title, children }: Props): React.ReactElement => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a href="#main" className={s.skipLink}>
        Skip to main content
      </a>

      <div className={s.wrapper}>
        <header className={s.header}>
          <div className={s.top}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className={s.logo}
            >
              <path
                d="M7.73864 5.95172H5.01989V4.92047C5.01989 3.89774 5.44602 3.32672 6.59659 3.32672C7.08239 3.32672 7.49148 3.43751 7.74716 3.51422L8.36932 1.12785C7.96875 0.991489 7.09091 0.769897 6.02557 0.769897C3.75 0.769897 1.93466 2.07388 1.93466 4.71592V5.95172H0V8.33808H1.93466V19.0426H5.01989V8.33808H7.73864V5.95172Z"
                fill="#333333"
              />
              <path
                d="M16.7855 5.95172H14.0668V4.92047C14.0668 3.89774 14.4929 3.32672 15.6435 3.32672C16.1293 3.32672 16.5384 3.43751 16.794 3.51422L17.4162 1.12785C17.0156 0.991489 16.1378 0.769897 15.0724 0.769897C12.7969 0.769897 10.9815 2.07388 10.9815 4.71592V5.95172H9.04688V8.33808H10.9815V19.0426H14.0668V8.33808H16.7855V5.95172Z"
                fill="#333333"
              />
              <path
                d="M19.7429 19.2301C20.7486 19.2301 21.6094 18.3949 21.6179 17.3551C21.6094 16.3324 20.7486 15.4972 19.7429 15.4972C18.7031 15.4972 17.8594 16.3324 17.8679 17.3551C17.8594 18.3949 18.7031 19.2301 19.7429 19.2301Z"
                fill="#333333"
              />
            </svg>

            <a className={s.link} href="mailto:hello@ff.studio">
              hello@ff.studio
            </a>
          </div>

          {title ? (
            <h1 className={s.smallHeadline}>{title}</h1>
          ) : (
            <>
              <h1 className={s.headline}>Digital cost calculator</h1>
              <p className={s.caption}>
                What's the true cost of digital transformation?
              </p>
            </>
          )}
        </header>

        <main id="main">{children}</main>

        <footer className={s.footer}>
          A project by <a href="https://ff.studio">ff.studio</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
