// import { createStore } from "redux"

// const round = (number) => Math.round(number * 100) / 100;

type mS = (state: any, action: any) => any

const monitorReducerEnhancer =
  (createStore: any) => (reducer: any, initialState: any, enhancer: any) => {
    const monitorReducer: mS = (state: any, action: any) => {
      // const start = performance.now();
      const newState = reducer(state, action)
      // const end = performance.now();
      // const diff = round(end - start);
      // console.log('reducer process time:', diff);
      return newState
    }
    return createStore(monitorReducer, initialState, enhancer)
  }

export default monitorReducerEnhancer
