export interface IElection {
  id: number
  name: string
  electionCycleId: number
  constituencyId: number
  electionCycle: string | null
  constituency: string | null
  candidates: null
  presidingOfficers: null
}

export interface IElections {
  message: string
  statusCode: number
  isSuccessful: boolean
  currentPage: number
  pageSize: number
  totalCount: number
  totalPages: number
  data: IElection[]
}
