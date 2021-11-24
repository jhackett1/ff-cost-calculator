import React, { createContext, useState } from "react"
import { useProgramme } from "../hooks/useProgramme"
import { Project } from "../types"

export interface DraftProjectContextType {
  project: Project
  addToProject: (values: Project) => void
  saveToProgramme: () => void
  discardDraft: () => void
}

const DraftProjectContext = createContext<DraftProjectContextType>({
  project: {},
  saveToProgramme: () => null,
  addToProject: project => null,
  discardDraft: () => null,
})

export const DraftProjectProvider = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[]
}): React.ReactElement => {
  const [project, setProject] = useState<Project>({})
  const { addProject } = useProgramme()

  /** commit the current wip project to the programme, and clear it from the drafts */
  const saveToProgramme = async () => {
    addProject(project)
    // TODO: fix this, it interferes
    // setProject({})
  }

  /** remove current work in progress */
  const discardDraft = () => setProject({})

  /** concatenate values onto project */
  const addToProject = (values: Project) =>
    setProject({
      ...project,
      ...values,
    })

  return (
    <DraftProjectContext.Provider
      value={{ project, addToProject, discardDraft, saveToProgramme }}
    >
      {JSON.stringify(project)}
      {children}
    </DraftProjectContext.Provider>
  )
}

export default DraftProjectContext
