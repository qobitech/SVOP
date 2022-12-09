import { locationType } from '../types'
import { ILocationReducer } from '../../interface/IReducer'

const initialState = {} as ILocationReducer

export default function locationReducer(state = initialState, action: any) {
  switch (action.type) {
    case locationType.state.dataAction:
      return {
        ...state,
        getAllLocationStates: action.payload
      }
    case locationType.state.dataLoading:
      return {
        ...state,
        getAllLocationStates_Loading: action.payload
      }
    case locationType.state.dataError:
      return {
        ...state,
        getAllLocationStates_Error: action.payload
      }
    default:
      return state
  }
}
