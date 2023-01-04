import { ILogin } from './IAuth'
import { ICategories } from './ICategory'

interface IError {
  status: string
  message: string
}
export interface IAuthReducer {
  signin: ILogin
  signin_Loading: boolean
  signin_Error: IError
}

export interface IOtherReducer {
  menuOpen: boolean
  menuOpen_Loading: boolean
  menuOpen_Error: IError
  subMenuOpen: number
  subMenuOpen_Loading: boolean
  subMenuOpen_Error: IError
}

export interface IVotingReducer {
  vote: boolean
  vote_Loading: boolean
  vote_Error: IError
}
export interface ICategoryReducer {
  allCategories: ICategories
  allCategories_Loading: boolean
  allCategories_Error: IError
}

export interface IStates {
  auth: IAuthReducer
  voting: IVotingReducer
  other: IOtherReducer
  categories: ICategoryReducer
}
