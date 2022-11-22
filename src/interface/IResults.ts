import { ILocation, IPresidingOfficer, IVoteData } from './IResult'

export interface IResult {
  'id': string
  'election': string
  'poolingUnit': string
  'location': ILocation
  'ward': null
  'localGovernment': string
  'state': 'Kano'
  'presidingOfficer': IPresidingOfficer
  'votersOnRegister': number
  'accreditedVoters': number
  'ballotPapersIssuedToPoolingUnit': number
  'unusedBallotPapers': number
  'rejectedBallot': number
  'totalValidVotes': number
  'totalUsedBallotPapers': number
  'status': string
  'documentUrl': string
  'createAt': string
  'approvedBy': null
  'approvedAt': string
  'results': IVoteData[]
}

export interface IResults {
  'data': IResult[]
  'currentPage': number
  'lastPage': number
  'total': number
  'pageSize': number
}
