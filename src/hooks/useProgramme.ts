import { useContext } from "react"
import ProgrammeContext, {
  ProgrammeContextType,
} from "../contexts/programmeContext"

export const useProgramme = (): ProgrammeContextType =>
  useContext(ProgrammeContext)
