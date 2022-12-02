import { ILogin, IOTP } from './IAuth'
import { IElectionCycles } from './IElectionCycle'
import { IElections } from './IElection'

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
  other: IOtherReducer
}
