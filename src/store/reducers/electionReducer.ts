import { electionType } from '../types'
import { IElectionReducer } from '../../interface/IReducer'

const initialState = {} as IElectionReducer

export default function electionReducer(state = initialState, action: any) {
  switch (action.type) {
    case electionType.electionCycle.dataAction:
      return {
        ...state,
        getAllElectionCycles: action.payload
      }
    case electionType.electionCycle.dataLoading:
      return {
        ...state,
        getAllElectionCycles_Loading: action.payload
      }
    case electionType.electionCycle.dataError:
      return {
        ...state,
        getAllElectionCycles_Error: action.payload
      }
    default:
      return state
  }
}
