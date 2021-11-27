import { DeliveryType, ProjectType } from "../types"

/** lookup a human-readable value for a delivery type */
export const prettyDeliveryType = {
  [DeliveryType.InHouse]: "In house",
  [DeliveryType.Tender]: "Tender",
}

/** lookup a human-readable value for a project type */
export const prettyProjectType = {
  [ProjectType.Big]: "Project build",
  [ProjectType.Small]: "Experiment",
}

const monthNames = [
  "Janu",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export const prettyDate = (date: Date): string => {
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
}
