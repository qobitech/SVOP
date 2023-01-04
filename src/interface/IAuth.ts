export interface IUser {
  userName: string
  firstName: string
  lastName: string
  middleName: string
  mobile: string
}

export interface IToken {
  exp: number
  iat: number
  isNew: boolean
  _doc: {
    matriculationNumber: string
    name: string
    votedFor: Array<{
      level: number
      category: Array<{
        candidateId: string

        id: string
        voted: boolean
      }>
    }>
    _id: string
  }
}
export interface ILogin {
  status: string
  token: string
  data: {
    voter: {
      votedFor: []
      _id: string
      name: string
      matriculationNumber: string
    }
  }
}
