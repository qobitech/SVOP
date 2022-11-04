import axios from 'axios';

export const header = () => ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: localStorage.getItem('FMLBearerToken'),
});

let source: any;

const cancelRequest = () => {
    if(source){
        source.cancel();
    }
    const CancelToken = axios.CancelToken;
    source = CancelToken.source();
}

const TIMEOUT = 1000 * 30;

interface I_API_REQUEST {
    (
        url: string | undefined,
        headers: {[key: string]: any},
        data: any,
        method: "get" | "post" | "put" | "delete" | "patch",
        timeout: number | null,
        validateStatus?: (status: number)=> boolean
    ): Promise<any>
}

const api_request: I_API_REQUEST = async (url, headers, data, method, timeout, validateStatus) => {
    cancelRequest()
    return axios({
        url,
        method,
        data,
        timeout: !!timeout ? timeout : 0,
        validateStatus,
        headers,       
    }).then(res => res.data);
}

export const getErrMsg = (error: any) => {
    if (error != null) {
        const { data } = error.response || {};
        if (typeof data === 'object') {
            const { message } = data || {};
            return message;
        }
        return data;
    }
    return '';
};

const statusFunction = (onStatus:(res: any)=> void, res: any) => {
    if (typeof onStatus === 'function') onStatus(res);
};

const apiRespond = (dispatch: any, type: any, payload: any, onStatus:(res: any)=> void) => {
    const { message } = payload || {}
    if (message){
        // logout
    }else{
        setTimeout(() => {
            dispatch({ type, payload });
            statusFunction(onStatus, payload);
        }, 2000);
    }
};

interface I_ACTION_TYPE {
    dataLoading: string;
    dataAction: string;
    dataError: string;
}

interface I_HTTPMETHOD {
    apiData: { 
        url: string; 
        header: {[key: string]: any};
        customurl?: string;
        data?: any;
    };
    actionType: I_ACTION_TYPE;
    onSuccess?: (res: any)=> void;
    onFailure?: (res: any)=> void;
}

export const httpGetMethod = ({
    apiData: { url, header, customurl },
    actionType: { dataLoading, dataAction, dataError },
    onSuccess = (res) => {},
    onFailure = (err) => {},
}: I_HTTPMETHOD) => {
    const requesturl = customurl != null ? customurl : (process.env.REACT_APP_BASE_URL + '' + url)
    return (dispatch: any) => {
        dispatch({ type: dataLoading, payload: true });
        api_request(`${requesturl}`, header,null,'get',null,()=>true)
            .then((resp) => {
                apiRespond(
                    dispatch,
                    dataAction,
                    resp,
                    resp.success ? onSuccess : onFailure,
                );
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                }else{
                    apiRespond(
                        dispatch,
                        dataError,
                        getErrMsg(error),
                        onFailure,
                    );
                }
            })
            .finally(() => {
                dispatch({ type: dataLoading, payload: false });
            });
    };
};

export const httpPostMethod = ({
    apiData: { url, header, data, customurl },
    actionType: { dataLoading, dataAction, dataError },
    onSuccess = (res) => {},
    onFailure = (err) => {},
}: I_HTTPMETHOD) => {
    const requesturl = customurl != null ? customurl : (process.env.REACT_APP_BASE_URL + '' + url)
    return (dispatch: any) => {
        dispatch({ type: dataLoading, payload: true });
        api_request(`${requesturl}`, header, data,'post',TIMEOUT)
            .then((resp) => {
                apiRespond(
                    dispatch,
                    dataAction,
                    resp,
                    onSuccess,
                );
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                }else{
                    apiRespond(
                        dispatch,
                        dataError,
                        getErrMsg(error),
                        onFailure,
                    );
                }
            })
            .finally(() => {
                dispatch({ type: dataLoading, payload: false });
            });
    };
};

export const httpUpload_Media_Method = ({
    apiData: { url, header, data, customurl },
    actionType: { dataLoading, dataAction, dataError },
    onSuccess = (res) => {},
    onFailure = (err) => {},
}: I_HTTPMETHOD) => {
    const requesturl = customurl != null ? customurl : (process.env.REACT_APP_BASE_URL + '' + url)
    return (dispatch: any) => {
        dispatch({ type: dataLoading, payload: true });
        api_request(`${requesturl}`, header, data,'post',TIMEOUT)
        .then((resp) => {
            apiRespond(
                dispatch,
                dataAction,
                resp,
                onSuccess,
            );
        })
        .catch((error) => {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            }else{
                apiRespond(
                    dispatch,
                    dataError,
                    getErrMsg(error),
                    onFailure
                );
            }
        })
        .finally(() => {
            dispatch({ type: dataLoading, payload: false });
        });
    };
};

export const httpPutVideoMethod = ({
    apiData: { url, header, data, customurl },
    actionType: { dataLoading, dataAction, dataError },
    onSuccess = (res) => {},
    onFailure = (err) => {},
}: I_HTTPMETHOD) => {
    const requesturl = customurl != null ? customurl : (process.env.REACT_APP_BASE_URL + '' + url)
    return (dispatch: any) => {
        dispatch({ type: dataLoading, payload: true });
        api_request(`${requesturl}`, header, data,'put',TIMEOUT)
        .then((resp) => {
            apiRespond(
                dispatch,
                dataAction,
                resp,
                onSuccess
            );
        })
        .catch((error) => {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            }else{
                apiRespond(
                    dispatch,
                    dataError,
                    getErrMsg(error),
                    onFailure
                );
            }
        })
        .finally(() => {
            dispatch({ type: dataLoading, payload: false });
        });
    };
};

export const clearHttp = ({
    actionType: {
        dataLoading,
        dataAction,
        dataError
    },
}: { actionType: I_ACTION_TYPE }) => {
    return (dispatch: any) => {
        dispatch({ type: dataLoading, payload: false });
        dispatch({ type: dataAction, payload: [] });
        dispatch({ type: dataError, payload: '' });
    };
};

export const clearHttpByValue = ({
    actionType: {
        dataLoading,
        dataAction,
        dataError
    },
    dataActionValue
}:{ actionType: I_ACTION_TYPE, dataActionValue: any }) => {
    return (dispatch: any) => {
        dispatch({ type: dataLoading, payload: false });
        dispatch({ type: dataAction, payload: dataActionValue});
        dispatch({ type: dataError, payload: '' });
    };
};

export const httpPutMethod = ({
    apiData: { url, header, data, customurl },
    actionType: { dataLoading, dataAction, dataError },
    onSuccess = (res) => {},
    onFailure = (err) => {},
}: I_HTTPMETHOD) => {
    const requesturl = customurl != null ? customurl : (process.env.REACT_APP_BASE_URL + '' + url)
    return (dispatch: any) => {
        dispatch({ type: dataLoading, payload: true });
        api_request(`${requesturl}`, header, data,'put',TIMEOUT)
            .then((resp) => {
                apiRespond(
                    dispatch,
                    dataAction,
                    resp,
                    onSuccess
                );
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                }else{
                    apiRespond(
                        dispatch,
                        dataError,
                        getErrMsg(error),
                        onFailure
                    );
                }
            })
            .finally(() => {
                dispatch({ type: dataLoading, payload: false });
            });
    };
};

export const httpPatchMethod = ({
    apiData: { url, header, data, customurl },
    actionType: { dataLoading, dataAction, dataError },
    onSuccess = (res) => {},
    onFailure = (err) => {},
}: I_HTTPMETHOD) => {
    const requesturl = customurl != null ? customurl : (process.env.REACT_APP_BASE_URL + '' + url)
    return (dispatch: any) => {
        dispatch({ type: dataLoading, payload: true });
        api_request(`${requesturl}`, header, data,'patch',TIMEOUT)
            .then((resp) => {
                apiRespond(
                    dispatch,
                    dataAction,
                    resp,
                    onSuccess
                );
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                }else{
                    apiRespond(
                        dispatch,
                        dataError,
                        getErrMsg(error),
                        onFailure
                    );
                }
            })
            .finally(() => {
                dispatch({ type: dataLoading, payload: false });
            });
    };
};
