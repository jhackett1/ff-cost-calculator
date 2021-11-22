export interface Role {
  name: string
  salary: {
    min: number
    max: number
  }
}

const roles: Role[] = [
  {
    name: "Executive management, band 1",
    salary: {
      min: 80,
      max: 110000,
    },
  },
  {
    name: "Executive management, band 2",
    salary: {
      min: 65,
      max: 75,
    },
  },
]

export default roles
