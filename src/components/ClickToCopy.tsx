import { useState } from "react"
import Clipboard from "react-clipboard.js"
import s from "./ClickToCopy.module.scss"

interface Props {
  text: string
}

const ClickToCopy = ({ text = "test text" }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false)

  return (
    <Clipboard
      className={s.clipboard}
      data-clipboard-text={text}
      onClick={() => setClicked(!clicked)}
    >
      <span>{clicked ? "Copied to clipboard" : text}</span>

      <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
        <path
          d="M3.5 9.5H3C1.89543 9.5 1 8.60457 1 7.5V3.5C1 2.39543 1.89543 1.5 3 1.5H13C14.1046 1.5 15 2.39543 15 3.5V3.5"
          stroke="#CCCBC3"
          stroke-width="2"
        />
        <rect
          x="6"
          y="5.5"
          width="14"
          height="8"
          rx="2"
          stroke="#CCCBC3"
          stroke-width="2"
        />
      </svg>
    </Clipboard>
  )
}

export default ClickToCopy
