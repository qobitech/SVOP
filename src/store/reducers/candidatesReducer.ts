import { candidatesType } from '../types'
import { ICandidatesReducer } from '../../interface/IReducer'

const initialState = {} as ICandidatesReducer

export default function voteReducer(state = initialState, action: any) {
  switch (action.type) {
    case candidatesType.getAll.dataAction:
      return {
        ...state,
        allCandidates: action.payload
      }
    case candidatesType.getAll.dataLoading:
      return {
        ...state,
        allCandidates_Loading: action.payload
      }
    case candidatesType.getAll.dataError:
      return {
        ...state,
        allCandidates_Error: action.payload
      }
    default:
      return state
  }
}
