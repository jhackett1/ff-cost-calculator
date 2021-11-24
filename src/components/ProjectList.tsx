import { Project } from "../types"
import s from "./ProjectList.module.scss"

interface Props {
  projects: Project[]
}

const ProjectList = ({ projects }: Props): React.ReactElement => (
  <div className={s.outer}>
    <ul className={s.list}>
      {projects.map(project => (
        <li className={s.listItem} key={project.nickname}>
          <h2 className={s.name}>{project.nickname}</h2>
          <p className={s.meta}>
            {project.delivery} | {project.type}
          </p>
          <button className={s.remove}>Remove</button>
        </li>
      ))}
    </ul>
    <button className={s.addAnother}>Add another</button>
  </div>
)

export default ProjectList
