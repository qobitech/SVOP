import { I_ACTION_TYPE } from '../store/actions/utils'

export interface IActions {
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
  loginUserAction: (data: {
    email: string
    password: string
    otp: string
  }) => (dispatch: any) => void
  sendOtpAction: (data: { userName: string }) => (dispatch: any) => void
  getElectionCycle: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getElection: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getElectionCategory: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getStates: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getApprovedResultsAction: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getZone: () => (dispatch: any) => void
  getGEOZone: () => (dispatch: any) => void
  getPoolingUnit: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getWard: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getLGA: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
}
