import { I_ACTION_TYPE } from '../store/actions/utils'

interface IAuthActions {
  loginUserAction: (data: {
    email: string
    password: string
    otp: string
  }) => (dispatch: any) => void
  sendOtpAction: (data: { userName: string }) => (dispatch: any) => void
}
interface IElectionActions {
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
  getApprovedResultsAction: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
}
interface ILocationActions {
  getZone: () => (dispatch: any) => void
  getGEOZone: () => (dispatch: any) => void
  getStates: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getLGA: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getLGAsInState: (data: { stateIds: number[] }) => (dispatch: any) => void
  getWard: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getWardsInLGA: (data: { lgaIds: number[] }) => (dispatch: any) => void
  getPoolingUnit: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
  getPartyAction: () => (dispatch: any) => void
}
interface IOtherActions {
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
}

export interface IActions
  extends IAuthActions,
    IElectionActions,
    ILocationActions,
    IOtherActions {}
