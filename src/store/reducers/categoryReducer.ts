import { categoryType } from '../types'
import { ICategoryReducer } from '../../interface/IReducer'

const initialState = {} as ICategoryReducer

export default function voteReducer(state = initialState, action: any) {
  switch (action.type) {
    case categoryType.getAll.dataAction:
      return {
        ...state,
        allCategories: action.payload
      }
    case categoryType.getAll.dataLoading:
      return {
        ...state,
        allCategories_Loading: action.payload
      }
    case categoryType.getAll.dataError:
      return {
        ...state,
        allCategories_Error: action.payload
      }
    default:
      return state
  }
}
