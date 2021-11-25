import React, { createContext, useState } from "react"
import { useProgramme } from "../hooks/useProgramme"
import { Project } from "../types"

export interface DraftProjectContextType {
  project: Project
  addToProject: (values: Project) => void
  addAndSaveToProgramme: (values: Project) => void
  discardDraft: () => void
  isEmpty?: boolean
}

const DraftProjectContext = createContext<DraftProjectContextType>({
  project: {},
  addAndSaveToProgramme: project => null,
  addToProject: project => null,
  discardDraft: () => null,
  isEmpty: undefined,
})

export const DraftProjectProvider = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[]
}): React.ReactElement => {
  const [project, setProject] = useState<Project>({})
  const { addProject } = useProgramme()

  /** commit the current wip project to the programme, and clear it from the drafts */
  const addAndSaveToProgramme = async (values: Project) => {
    addProject({
      ...project,
      ...values,
    })
    setProject({})
  }

  /** remove current work in progress */
  const discardDraft = () => setProject({})

  /** concatenate values onto project */
  const addToProject = (values: Project) =>
    setProject({
      ...project,
      ...values,
    })

  const isEmpty = Object.keys(project).length === 0

  return (
    <DraftProjectContext.Provider
      value={{
        project,
        addToProject,
        discardDraft,
        addAndSaveToProgramme,
        isEmpty,
      }}
    >
      {children}
    </DraftProjectContext.Provider>
  )
}

export default DraftProjectContext
