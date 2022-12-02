export interface IElectionCategory {
  id: number
  name: string
}

export interface IElectionCategories {
  message: string
  statusCode: number
  isSuccessful: boolean
  data: IElectionCategory[]
}
