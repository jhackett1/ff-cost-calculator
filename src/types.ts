import React from "react"

/** a collection of projects */
export interface Programme {
  projects: Project[]
}

/** a single piece of work */
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

export interface Choice {
  icon?: React.ReactChild
  label: string
  hint: string | React.ReactChild
  name: string
  value: string
}
