import { combineReducers } from 'redux'
import { IStates } from '../../interface/IReducer'

import {
  authReducer,
  votingReducer,
  otherReducer,
  categoryReducer
} from './allReducers'

const rootreducer = combineReducers<IStates>({
  auth: authReducer,
  voting: votingReducer,
  other: otherReducer,
  categories: categoryReducer
})

export default rootreducer
