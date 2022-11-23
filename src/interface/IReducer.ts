import { ILogin, IOTP } from './IAuth'
import { IResult, IResults } from './IResults'

export interface IAuthReducer {
  signin: ILogin
  signin_Loading: boolean
  signin_Error: any
  sendOtp: IOTP
  sendOtp_Loading: boolean
  sendOtp_Error: any
}
export interface IResultsReducer {
  getAllApprovedResults: IResults
  getAllApprovedResults_Loading: boolean
  getAllApprovedResults_Error: any
  getAllUnApprovedResults: IResults
  getAllUnApprovedResults_Loading: boolean
  getAllUnApprovedResults_Error: any
  getResultById: IResult
  getResultById_Loading: boolean
  getResultById_Error: any
  approveResult: IResult
  approveResult_Loading: boolean
  approveResult_Error: any
  rejectResult: IResult
  rejectResult_Loading: boolean
  rejectResult_Error: any
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
  result: IResultsReducer
  other: IOtherReducer
}
