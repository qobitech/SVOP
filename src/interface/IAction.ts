import { I_ACTION_TYPE } from '../store/actions/utils'

export interface IActions {
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
  loginUserAction: (data: { email: string, password: string, otp: string }) => (dispatch: any) => void
  sendOtpAction: (data: { userName: string }) => (dispatch: any) => void
  getUnapprovedResultsAction: (pageSize?: number, pageNumber?: number, sort?: string) => (dispatch: any) => void
  getApprovedResultsAction: (pageSize?: number, pageNumber?: number, sort?: string) => (dispatch: any) => void
  getResultByIdAction: (id: string) => (dispatch: any) => void
  setMenuOpen: (menuOpen: boolean) => (dispatch: any) => void
  setSubMenuOpen: (subMenuOpen: number) => (dispatch: any) => void
  approveResultAction: (data: { otp: string }) => (dispatch: any) => void
  rejectResultAction: (data: { otp: string, comment: string }) => (dispatch: any) => void
}
