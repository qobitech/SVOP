export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('FMLState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('FMLState', serializedState);
    } catch (err) {}
};

export const clearState = () => {
    try {
        localStorage.clear();
    } catch (err) {}
};
