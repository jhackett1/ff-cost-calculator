import React, { createContext, useState } from "react"
import { Programme, Project } from "../types"

export interface ProgrammeContextType {
  programme: Programme
  addProject: (newProject: Project) => void
  removeProject: (index: number) => void
  startOver: () => void
}

const ProgrammeContext = createContext<ProgrammeContextType>({
  programme: {
    projects: [],
  },
  addProject: (newProject: Project) => null,
  removeProject: () => null,
  startOver: () => null,
})

export const ProgrammeProvider = ({
  children,
}: {
  children: React.ReactChild
}): React.ReactElement => {
  const [programme, setProgramme] = useState<Programme>({
    projects: [],
  })

  /** add a project to the programme */
  const addProject = (newProject: Project) =>
    setProgramme({
      ...programme,
      projects: programme.projects.concat(newProject),
    })

  /** remove a project from the programme by index */
  const removeProject = (iToRemove: number) =>
    setProgramme({
      ...programme,
      projects: programme.projects.filter((project, i) => i !== iToRemove),
    })

  /** remove everything */
  const startOver = () =>
    setProgramme({
      projects: [],
    })

  return (
    <ProgrammeContext.Provider
      value={{ programme, addProject, removeProject, startOver }}
    >
      {JSON.stringify(programme)}
      <br />
      {children}
    </ProgrammeContext.Provider>
  )
}

export default ProgrammeContext
