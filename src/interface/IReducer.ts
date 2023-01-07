import { ILogin } from './IAuth'
import { ICandidates, ITotalVotes } from './ICandidates'
import { ICategories } from './ICategory'
import { IVotes } from './IVotes'

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
  vote: IVotes
  vote_Loading: boolean
  vote_Error: IError
}
export interface ICategoryReducer {
  allCategories: ICategories
  allCategories_Loading: boolean
  allCategories_Error: IError
}
export interface ICandidatesReducer {
  allCandidates: ICandidates
  allCandidates_Loading: boolean
  allCandidates_Error: IError
  totalVotes: ITotalVotes
  totalVotes_Loading: boolean
  totalVotes_Error: IError
}

export interface IStates {
  auth: IAuthReducer
  voting: IVotingReducer
  other: IOtherReducer
  categories: ICategoryReducer
  candidates: ICandidatesReducer
}
