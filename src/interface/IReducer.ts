import { ILogin, IOTP } from './IAuth'
export interface IAuthReducer {
  signin: ILogin
  signin_Loading: boolean
  signin_Error: any
  sendOtp: IOTP
  sendOtp_Loading: boolean
  sendOtp_Error: any
}
export interface IOtherReducer {
  menuOpen: boolean
  menuOpen_Loading: boolean
  menuOpen_Error: any
  subMenuOpen: number
  subMenuOpen_Loading: boolean
  subMenuOpen_Error: any
}

export interface IVotingReducer {
  vote: boolean
  vote_Loading: boolean
  vote_Error: any
}

export interface IStates {
  auth: IAuthReducer
  voting: IVotingReducer
  other: IOtherReducer
}
