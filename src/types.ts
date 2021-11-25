import React from "react"

/** a collection of projects */
export interface Programme {
  projects: Project[]
}

/** a single piece of work */
export interface Project {
  nickname?: string
  type?: ProjectType
  delivery?: DeliveryType
}

export enum DeliveryType {
  InHouse = "INHOUSE",
  Tender = "TENDER",
}

export enum ProjectType {
  Big = "BIG",
  Small = "SMALL",
}

export interface Choice {
  icon?: React.ReactChild
  label: string
  hint: string | React.ReactChild
  name: string
  value: string
}
