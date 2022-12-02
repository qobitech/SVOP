export interface IElectionCycle {
  id: number
  name: string
  schedule: string
}

export interface IElectionCycles {
  message: 'Success'
  statusCode: 201
  isSuccessful: true
  data: IElectionCycle[]
}
