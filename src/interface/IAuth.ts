
export interface IUser {
  id: number
  userName: string
  firstName: string
  lastName: string
  middleName: string
  profileUrl: string | null
  phoneNumber: string
  mobile: string
}
export interface IToken {
  email: string
  exp: number
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/homephone': string
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone': string
  iat: number
  nameid: string[]
  nbf: number
  role: string
  unique_name: string[]
}

export interface ILogin {
  user: IUser | undefined
  token: IToken | undefined
}
