
export type IResultStatus = 'Pending Approval'

export interface IVoteData {
  'partyName': string
  'Votes': number
}

export interface IPresidingOfficer {
  'Id': string
  'Name': string
}

export interface ILocation {
  'address': string
  'longitude': string
  'latitude': string
}

export interface IResult {
  'Election'?: string
  'PoolingUnit'?: string
  'location'?: ILocation
  'Ward'?: string
  'LocalGovernment'?: string
  'State'?: string
  'PresidingOfficer'?: IPresidingOfficer
  'VotersOnRegister'?: number
  'AccreditedVoters'?: number
  'BallotPapersIssuedToPoolingUnit'?: number
  'UnusedBallotPapers'?: number
  'RejectedBallot'?: number
  'TotalValidVotes'?: number
  'TotalUsedBallotPapers'?: number
  'Status'?: IResultStatus
  'DocumentUrl'?: string
  'results'?: IVoteData[]
}

export interface IResults {
  results: IResult[]
}
