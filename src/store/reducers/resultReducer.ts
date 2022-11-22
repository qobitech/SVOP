import { resultType } from '../types'
import { IResultsReducer } from '../../interface/IReducer'

const initialState = {} as unknown as IResultsReducer

export default function resultReducer (state = initialState, action: any) {
  switch (action.type) {
    case resultType.getAll.dataAction:
      return {
        ...state,
        getAllResults: action.payload
      }
    case resultType.getAll.dataLoading:
      return {
        ...state,
        getAllResults_Loading: action.payload
      }
    case resultType.getAll.dataError:
      return {
        ...state,
        getAllResults_Error: action.payload
      }
    case resultType.getById.dataAction:
      return {
        ...state,
        getResultById: action.payload
      }
    case resultType.getById.dataLoading:
      return {
        ...state,
        getResultById_Loading: action.payload
      }
    case resultType.getById.dataError:
      return {
        ...state,
        getResultById_Error: action.payload
      }
    default:
      return state
  }
}
