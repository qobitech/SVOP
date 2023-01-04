import { I_ACTION_TYPE } from '../store/actions/utils'

interface IAuthActions {
  loginAction: (data: {
    matriculationNumber: string
  }) => (dispatch: any) => void
}
interface IVotingActions {
  voteAction: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
}
interface ICategoryActions {
  getCategories: (
    pageSize?: number,
    pageNumber?: number,
    sort?: string
  ) => (dispatch: any) => void
}
interface IOtherActions {
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
  setMenuOpen: (menuOpen: boolean) => (dispatch: any) => void
  setSubMenuOpen: (subMenuOpen: number) => (dispatch: any) => void
}

export interface IActions
  extends IAuthActions,
    IVotingActions,
    ICategoryActions,
    IOtherActions {}
