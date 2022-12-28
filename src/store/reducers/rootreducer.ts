import { combineReducers } from 'redux'

import { authReducer, votingReducer, otherReducer } from './allReducers'

const rootreducer = combineReducers({
  auth: authReducer,
  voting: votingReducer,
  other: otherReducer
})

export default rootreducer
