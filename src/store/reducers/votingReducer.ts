import { votingType } from '../types'
import { IVotingReducer } from '../../interface/IReducer'

const initialState = {} as IVotingReducer

export default function voteReducer(state = initialState, action: any) {
  switch (action.type) {
    case votingType.vote.dataAction:
      return {
        ...state,
        vote: action.payload
      }
    case votingType.vote.dataLoading:
      return {
        ...state,
        vote_Loading: action.payload
      }
    case votingType.vote.dataError:
      return {
        ...state,
        vote_Error: action.payload
      }
    default:
      return state
  }
}
