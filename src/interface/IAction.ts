import { I_ACTION_TYPE } from '../store/actions/utils'

export interface IActions {
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
  loginUserAction: (data: { email: string, password: string, otp: string }) => (dispatch: any) => void
  sendOtpAction: (data: { userName: string }) => (dispatch: any) => void
  getAllResultsAction: (pageSize?: number, pageNumber?: number, sort?: string) => (dispatch: any) => void
  getResultByIdAction: (id: string) => (dispatch: any) => void
}
