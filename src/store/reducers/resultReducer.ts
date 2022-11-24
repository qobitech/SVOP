import { resultType } from '../types'
import { IResultsReducer } from '../../interface/IReducer'

const initialState = {} as IResultsReducer

export default function resultReducer (state = initialState, action: any) {
  switch (action.type) {
    case resultType.getAllRejected.dataAction:
      return {
        ...state,
        getAllRejectedResults: action.payload
      }
    case resultType.getAllRejected.dataLoading:
      return {
        ...state,
        getAllRejectedResults_Loading: action.payload
      }
    case resultType.getAllRejected.dataError:
      return {
        ...state,
        getAllRejectedResults_Error: action.payload
      }
    case resultType.getAllApproved.dataAction:
      return {
        ...state,
        getAllApprovedResults: action.payload
      }
    case resultType.getAllApproved.dataLoading:
      return {
        ...state,
        getAllApprovedResults_Loading: action.payload
      }
    case resultType.getAllApproved.dataError:
      return {
        ...state,
        getAllApprovedResults_Error: action.payload
      }
    case resultType.getAllUnapproved.dataAction:
      return {
        ...state,
        getAllUnApprovedResults: action.payload
      }
    case resultType.getAllUnapproved.dataLoading:
      return {
        ...state,
        getAllUnApprovedResults_Loading: action.payload
      }
    case resultType.getAllUnapproved.dataError:
      return {
        ...state,
        getAllUnApprovedResults_Error: action.payload
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
