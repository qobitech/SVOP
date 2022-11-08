import { ILogin, IToken, IUser } from '../interface/IAuth'

import jwtDecode from 'jwt-decode'
interface IResponse {
  user: IUser
  token: string
}

const data = localStorage.getItem('userData')
const user: IResponse = data ? JSON.parse(data) : {} as IResponse

export const userData: ILogin = {
  user: user.user,
  token: user.token ? jwtDecode(user.token) : {} as IToken
}

export const isLogged = userData.token?.exp ? !(userData?.token?.exp * 1000 < Date.now()) : false

export const userRole = {
  PRESIDING_OFFICER: 'Presiding Officer'
}
