import React, { createContext, useState } from "react"
import { useProgramme } from "../hooks/useProgramme"
import { Project } from "../types"

export interface DraftProjectContextType {
  project: Project
  setProject: (newProject: Project) => void
  saveToProgramme: () => void
  discardDraft: () => void
}

const DraftProjectContext = createContext<DraftProjectContextType>({
  project: {},
  saveToProgramme: () => null,
  setProject: project => null,
  discardDraft: () => null,
})

export const DraftProjectProvider = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[]
}): React.ReactElement => {
  const [project, setProject] = useState<Project>({})
  const { addProject } = useProgramme()

  /** commit the current wip project to the programme */
  const saveToProgramme = () => addProject(project)

  /** remove current work in progress */
  const discardDraft = () => setProject({})

  return (
    <DraftProjectContext.Provider
      value={{ project, setProject, discardDraft, saveToProgramme }}
    >
      {children}
    </DraftProjectContext.Provider>
  )
}

export default DraftProjectContext
