import { authType } from '../../types'
import { IAuthReducer } from '../../../interface/IReducer'

const initialState: IAuthReducer = {} as unknown as IAuthReducer

export default function authReducer (state = initialState, action: any) {
  switch (action.type) {
    case authType.login.dataAction:
      return {
        ...state,
        signin: action.payload
      }
    case authType.login.dataLoading:
      return {
        ...state,
        signin_Loading: action.payload
      }
    case authType.login.dataError:
      return {
        ...state,
        signin_Error: action.payload
      }
    default:
      return state
  }
}
