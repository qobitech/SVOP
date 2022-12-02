export type IResultStatus = 'Pending Approval'

export interface IVoteData {
  partyId: number
  partyName: string
  votes: number
}

export interface IPresidingOfficer {
  id: string
  name: string
}

export interface ILocation {
  address: string
  longitude: string
  latitude: string
}
