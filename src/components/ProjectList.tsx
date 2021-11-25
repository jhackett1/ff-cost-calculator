import { useProgramme } from "../hooks/useProgramme"
import s from "./ProjectList.module.scss"

const ProjectList = (): React.ReactElement => {
  const { programme, removeProject } = useProgramme()

  const { projects } = programme

  /** remove project from the programme by index */
  const handleRemove = (i: number) => {
    if (window.confirm("Are you sure you want to remove this project?"))
      removeProject(i)
  }

  return (
    <div className={s.outer}>
      <ul className={s.list}>
        {projects.map((project, i) => (
          <li className={s.listItem} key={project.nickname}>
            <div>
              <h3 className={s.name}>{project.nickname}</h3>
              <p className={s.meta}>
                {project.delivery} · {project.type}
              </p>
            </div>

            <button className={s.remove} onClick={() => handleRemove(i)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect
                  x="1.35474"
                  width="17.8831"
                  height="1.91604"
                  transform="rotate(45 1.35474 0)"
                  fill="#CCCBC3"
                />
                <rect
                  x="14"
                  y="1.35486"
                  width="17.8831"
                  height="1.91604"
                  transform="rotate(135 14 1.35486)"
                  fill="#CCCBC3"
                />
              </svg>

              <span className="visually-hidden">Remove</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectList
