import { ILogin } from './IAuth'

export interface IAuthReducer {
  signin: ILogin
  signin_Loading: boolean
  signin_Error: any
}

export interface IStates {
  authState: { auth: IAuthReducer }
}
