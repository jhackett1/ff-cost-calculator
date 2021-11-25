import React from "react"
import { Link } from "react-router-dom"
import s from "./Button.module.scss"

interface Props {
  children: React.ReactChild
  href?: string
  icon?: React.ReactChild
  secondary?: boolean
  [key: string]: any
  // iconLeft?: boolean
}

const Button = ({
  children,
  href,
  icon,
  // iconLeft,
  secondary,
  ...props
}: Props): React.ReactElement => {
  if (href)
    return (
      <Link
        to={href}
        className={secondary ? s.secondaryButton : s.primaryButton}
        {...props}
      >
        {children}
        {icon}
      </Link>
    )

  return (
    <button
      className={secondary ? s.secondaryButton : s.primaryButton}
      {...props}
    >
      {children}
      {icon}
    </button>
  )
}

export default Button
