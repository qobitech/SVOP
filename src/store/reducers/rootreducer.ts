import { combineReducers } from 'redux'
import { IStates } from '../../interface/IReducer'

import {
  authReducer,
  votingReducer,
  otherReducer,
  categoryReducer,
  candidatesReducer
} from './allReducers'

const rootreducer = combineReducers<IStates>({
  auth: authReducer,
  voting: votingReducer,
  other: otherReducer,
  categories: categoryReducer,
  candidates: candidatesReducer
})

export default rootreducer
