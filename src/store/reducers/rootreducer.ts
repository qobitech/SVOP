import { combineReducers } from 'redux'

import { authReducer, electionReducer, otherReducer } from './allReducers'

const rootreducer = combineReducers({
  auth: authReducer,
  election: electionReducer,
  other: otherReducer
})

export default rootreducer
