import { applyMiddleware, createStore, compose, StoreEnhancer } from 'redux'
import thunkMiddleware from 'redux-thunk'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import reducers from './reducers/rootreducer'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function configureStore (preloadedState?: any) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(reducers, preloadedState, composedEnhancers as StoreEnhancer<unknown, {}>)

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //     module?.hot?.accept('./reducers', () => store.replaceReducer(reducers));
  // }

  return store
}
