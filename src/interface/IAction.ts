import { I_ACTION_TYPE } from '../store/actions/utils'

export interface IActions {
  loginUserAction: (data: { userName: string, password: string }) => (dispatch: any) => void
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
}
