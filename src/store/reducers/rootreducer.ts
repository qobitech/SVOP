import { combineReducers } from 'redux'

import {
  authReducer,
  electionReducer,
  otherReducer,
  locationReducer
} from './allReducers'

const rootreducer = combineReducers({
  auth: authReducer,
  election: electionReducer,
  other: otherReducer,
  location: locationReducer
})

export default rootreducer
