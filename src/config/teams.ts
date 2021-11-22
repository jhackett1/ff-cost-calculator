export enum TeamType {
  Core,
  Tender,
  Squad,
}

export interface Team {
  name: string
  type: TeamType
  weeklyCost: number
}

const teams: Team[] = [
  {
    name: "Discovery",
    type: TeamType.Core,
    weeklyCost: 100,
  },
  {
    name: "Beta",
    type: TeamType.Core,
    weeklyCost: 100,
  },
]

export default teams
