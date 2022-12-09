import { ILocation, IPresidingOfficer, IVoteData } from './IResult'

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

export interface IResult {
  id: string
  election: string
  poolingUnit: string
  location: ILocation
  ward: null
  localGovernment: string
  state: 'Kano'
  presidingOfficer: IPresidingOfficer
  votersOnRegister: number
  accreditedVoters: number
  ballotPapersIssuedToPoolingUnit: number
  unusedBallotPapers: number
  rejectedBallot: number
  totalValidVotes: number
  totalUsedBallotPapers: number
  status: string
  documentUrl: string
  createAt: string
  approvedBy: null
  approvedAt: string
  results: IVoteData[]
}

export interface IResults {
  data: IResult[]
  currentPage: number
  lastPage: number
  total: number
  pageSize: number
}
