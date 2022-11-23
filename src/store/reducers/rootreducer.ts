import { combineReducers } from 'redux'

import {
  authReducer,
  resultReducer,
  otherReducer
} from './allReducers'

const rootreducer = combineReducers({
  auth: authReducer,
  result: resultReducer,
  other: otherReducer
})

export default rootreducer
