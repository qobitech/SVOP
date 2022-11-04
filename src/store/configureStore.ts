// import { applyMiddleware, createStore, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';

// import monitorReducerEnhancer from './enhancers/monitorReducer';
// import loggerMiddleware from './middleware/logger';
import reducers from './reducers/rootreducer';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
      ...reducers,
    },
  })

// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// export default function configureStore(preloadedState: any) {
//     const middlewares = [loggerMiddleware, thunkMiddleware];
//     const middlewareEnhancer = applyMiddleware(...middlewares);

//     const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
//     // const composedEnhancers = composeWithDevTools(...enhancers);
//     const composedEnhancers = compose(...enhancers);

//     const store = createStore(reducers, preloadedState, composedEnhancers);

//     if (process.env.NODE_ENV !== 'production' && module.hot) {
//         module.hot.accept('./reducers', () => store.replaceReducer(reducers));
//     }

//     return store;
// }
