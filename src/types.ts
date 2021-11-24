export interface Programme {
  projects: Project[]
}

export interface Project {
  name: string
  type: ProjectType
  delivery: DeliveryType
}

export enum DeliveryType {
  InHouse,
  Tender,
}

export enum ProjectType {
  Big,
  Small,
}
