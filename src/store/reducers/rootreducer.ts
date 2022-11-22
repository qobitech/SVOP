import { combineReducers } from 'redux'

import {
  authReducer,
  resultReducer
} from './allReducers'

const rootreducer = combineReducers({
  auth: authReducer,
  result: resultReducer
})

export default rootreducer
