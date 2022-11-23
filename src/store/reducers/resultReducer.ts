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
    case resultType.approve.dataAction:
      return {
        ...state,
        approveResult: action.payload
      }
    case resultType.approve.dataLoading:
      return {
        ...state,
        approveResult_Loading: action.payload
      }
    case resultType.approve.dataError:
      return {
        ...state,
        approveResult_Error: action.payload
      }
    case resultType.reject.dataAction:
      return {
        ...state,
        rejectResult: action.payload
      }
    case resultType.reject.dataLoading:
      return {
        ...state,
        rejectResult_Loading: action.payload
      }
    case resultType.reject.dataError:
      return {
        ...state,
        rejectResult_Error: action.payload
      }
    default:
      return state
  }
}
