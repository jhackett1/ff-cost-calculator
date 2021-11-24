import { useContext } from "react"
import DraftProjectContext, {
  DraftProjectContextType,
} from "../contexts/daftProjectContext"

export const useDraftProject = (): DraftProjectContextType =>
  useContext(DraftProjectContext)
