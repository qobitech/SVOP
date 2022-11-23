import { ILogin, IToken, IUser } from '../interface/IAuth'

import jwtDecode from 'jwt-decode'
interface IResponse {
  user: IUser
  token: IToken
}

const data = localStorage.getItem('userData')
const user: ILogin = data ? JSON.parse(data) : {} as ILogin

const { token, ...userDataProps } = user

export const userData: IResponse = {
  user: userDataProps,
  token: token ? jwtDecode(token) : {} as IToken
}

export const isLogged = userData.token?.exp ? !(userData?.token?.exp * 1000 < Date.now()) : false

export const userRole = {
  PRESIDING_OFFICER: 'Presiding Officer'
}
