import { useProgramme } from "../hooks/useProgramme"
import {
  prettyDate,
  prettyDeliveryType,
  prettyProjectType,
} from "../lib/formatters"
import { DeliveryType, ProjectType } from "../types"
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
                {prettyDeliveryType[project.delivery as DeliveryType]} ·{" "}
                {prettyProjectType[project.type as ProjectType]} ·{" "}
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5.5C0 3.84315 1.34315 2.5 3 2.5H10C11.6569 2.5 13 3.84315 13 5.5V11.5C13 13.1569 11.6569 14.5 10 14.5H3C1.34315 14.5 0 13.1569 0 11.5V5.5ZM3 5.5C2.44772 5.5 2 5.94772 2 6.5V11.5C2 12.0523 2.44772 12.5 3 12.5H10C10.5523 12.5 11 12.0523 11 11.5V6.5C11 5.94772 10.5523 5.5 10 5.5H3Z"
                    fill="#CCCBC3"
                  />
                  <rect
                    x="8"
                    y="0.5"
                    width="2"
                    height="7"
                    rx="1"
                    fill="#CCCBC3"
                  />
                  <rect
                    x="3"
                    y="0.5"
                    width="2"
                    height="7"
                    rx="1"
                    fill="#CCCBC3"
                  />
                </svg>
                {prettyDate(new Date(project.startDate as string))}
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
