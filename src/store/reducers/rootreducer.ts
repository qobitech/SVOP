import { combineReducers } from 'redux';

import { authReducer } from './allReducers';

const rootreducer = combineReducers({
    auth: authReducer,
});

export default rootreducer;
