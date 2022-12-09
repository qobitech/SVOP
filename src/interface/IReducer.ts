import { ILogin, IOTP } from './IAuth'
import {
  IElections,
  IElectionCycles,
  IElectionCategories,
  IResults
} from './IElection'
import { ILocationStates } from './ILocation'

export interface IAuthReducer {
  signin: ILogin
  signin_Loading: boolean
  signin_Error: any
  sendOtp: IOTP
  sendOtp_Loading: boolean
  sendOtp_Error: any
}
export interface IElectionReducer {
  getAllElectionCycles: IElectionCycles
  getAllElectionCycles_Loading: boolean
  getAllElectionCycles_Error: any
  getAllElections: IElections
  getAllElections_Loading: boolean
  getAllElections_Error: any
  getAllElectionCategory: IElectionCategories
  getAllElectionCategory_Loading: boolean
  getAllElectionCategory_Error: any
  getAllApprovedResults: IResults
  getAllApprovedResults_Loading: boolean
  getAllApprovedResults_Error: any
}
export interface ILocationReducer {
  getAllLocationStates: ILocationStates
  getAllLocationStates_Loading: boolean
  getAllLocationStates_Error: any
}
export interface IOtherReducer {
  menuOpen: boolean
  menuOpen_Loading: boolean
  menuOpen_Error: any
  subMenuOpen: number
  subMenuOpen_Loading: boolean
  subMenuOpen_Error: any
}

export interface IStates {
  auth: IAuthReducer
  election: IElectionReducer
  location: ILocationReducer
  other: IOtherReducer
}
