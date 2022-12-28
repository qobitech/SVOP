import { I_ACTION_TYPE } from '../store/actions/utils'

interface IAuthActions {
  loginUserAction: (data: {
    email: string
    password: string
    otp: string
  }) => (dispatch: any) => void
  sendOtpAction: (data: { userName: string }) => (dispatch: any) => void
}
interface IVotingActions {
  voteAction: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
}
interface IOtherActions {
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
  setMenuOpen: (menuOpen: boolean) => (dispatch: any) => void
  setSubMenuOpen: (subMenuOpen: number) => (dispatch: any) => void
}

export interface IActions extends IAuthActions, IVotingActions, IOtherActions {}
