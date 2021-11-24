import React, { createContext, useState } from "react"
import { Project } from "../types"

export interface DraftProjectContextType {
  project: Project
  setProject: (newProject: Project) => void
  startOver: () => void
}

const DraftProjectContext = createContext<DraftProjectContextType>({
  project: {},
  setProject: project => null,
  startOver: () => null,
})

export const DraftProjectProvider = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[]
}): React.ReactElement => {
  const [project, setProject] = useState<Project>({})

  /** remove work in progress */
  const startOver = () => setProject({})

  return (
    <DraftProjectContext.Provider value={{ project, setProject, startOver }}>
      {children}
    </DraftProjectContext.Provider>
  )
}

export default DraftProjectContext
