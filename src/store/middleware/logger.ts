const logger = (store: any) => (next: any) => (action: any) => {
    // console.log(action.type)
    // console.info('dispatching',action)
    if (action.payload && action.payload.message === 'User not found') {
        localStorage.removeItem('FMLBearerToken');
        localStorage.clear()
        window.location.href = '/';
    }
    let result = next(action);
    // console.log('next state', store.getState())
    // console.groupEnd()
    return result;
};

export default logger;
