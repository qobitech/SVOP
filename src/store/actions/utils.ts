import axios from 'axios'

export const header = () => ({
  'Content-type': 'application/json'
  // 'Access-Control-Allow-Origin': '*'
})

export const headerNoAuth = () => ({
  // 'Content-type': 'application/json',
  // 'Referrer-Policy': 'strict-origin-when-cross-origin'
  // 'Referrer-Policy': 'no-referrer-when-downgrade'
  // 'Access-Control-Allow-Origin': '*'
  // Authorization: localStorage.getItem('FMLBearerToken'),
})

let source: any

const cancelRequest = () => {
  if (source) {
    source.cancel()
  }
  const CancelToken = axios.CancelToken
  source = CancelToken.source()
}

const TIMEOUT = 1000 * 30

type I_API_REQUEST = (
  url: RequestInfo | URL,
  headers: { [key: string]: any },
  data: any,
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  timeout: number | null,
  validateStatus?: (status: number) => boolean
) => Promise<any>

const apiRequest: I_API_REQUEST = async (
  url,
  headers,
  data,
  method,
  timeout,
  validateStatus
) => {
  cancelRequest()
  // return await axios({
  //   url,
  //   method,
  //   data,
  //   timeout: timeout || 0,
  //   validateStatus,
  //   headers
  // }).then(res => res.data)
  return await fetch(url, {
    headers,
    mode: 'cors',
    method,
    body: data
  })
    .then(async (res) => await res.json())
    .then((res) => res)
}

export const getErrMsg = (error: any) => {
  if (error != null) {
    const { data } = error.response || {}
    if (typeof data === 'object') {
      const { message } = data || {}
      return message
    }
    return data
  }
  return ''
}

const statusFunction = (onStatus?: (res: any) => void, res?: any) => {
  if (typeof onStatus === 'function') onStatus(res)
}

const apiRespond = (
  dispatch: any,
  type: any,
  payload: any,
  onStatus?: (res: any) => void
) => {
  dispatch({ type, payload })
  statusFunction(onStatus, payload)
}

export interface I_ACTION_TYPE {
  dataLoading: string
  dataAction: string
  dataError: string
}

interface I_HTTPMETHOD {
  apiData: {
    url: string
    header: { [key: string]: any }
    customurl?: string
    data?: any
  }
  actionType: I_ACTION_TYPE
  onSuccess?: (res: any) => void
  onFailure?: (err: any) => void
}

export const httpGetMethod = ({
  apiData: { url, header, customurl },
  actionType: { dataLoading, dataAction, dataError },
  onSuccess,
  onFailure
}: I_HTTPMETHOD) => {
  const requesturl =
    customurl != null ? customurl : process.env.REACT_APP_BASE_URL + '' + url
  return (dispatch: any) => {
    dispatch({ type: dataLoading, payload: true })
    apiRequest(`${requesturl}`, header, null, 'get', null, () => true)
      .then((resp) => {
        apiRespond(dispatch, dataAction, resp, onSuccess)
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          apiRespond(dispatch, dataError, getErrMsg(error), onFailure)
        }
      })
      .finally(() => {
        dispatch({ type: dataLoading, payload: false })
      })
  }
}

export const httpPostMethod = ({
  apiData: { url, header, data, customurl },
  actionType: { dataLoading, dataAction, dataError },
  onSuccess,
  onFailure
}: I_HTTPMETHOD) => {
  const requesturl =
    customurl != null ? customurl : process.env.REACT_APP_BASE_URL + '' + url
  return (dispatch: any) => {
    dispatch({ type: dataLoading, payload: true })
    apiRequest(`${requesturl}`, header, data, 'post', TIMEOUT)
      .then((resp) => {
        const isSuccess = resp.status === 'success'
        apiRespond(
          dispatch,
          isSuccess ? dataAction : dataError,
          resp,
          isSuccess ? onSuccess : onFailure
        )
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          apiRespond(dispatch, dataError, getErrMsg(error), onFailure)
        }
      })
      .finally(() => {
        dispatch({ type: dataLoading, payload: false })
      })
  }
}

export const httpPutMethod = ({
  apiData: { url, header, data, customurl },
  actionType: { dataLoading, dataAction, dataError },
  onSuccess,
  onFailure
}: I_HTTPMETHOD) => {
  const requesturl =
    customurl != null ? customurl : process.env.REACT_APP_BASE_URL + '' + url
  return (dispatch: any) => {
    dispatch({ type: dataLoading, payload: true })
    apiRequest(`${requesturl}`, header, data, 'put', TIMEOUT)
      .then((resp) => {
        const isSuccess = resp.status === 'success'
        apiRespond(
          dispatch,
          isSuccess ? dataAction : dataError,
          resp,
          isSuccess ? onSuccess : onFailure
        )
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          apiRespond(dispatch, dataError, getErrMsg(error), onFailure)
        }
      })
      .finally(() => {
        dispatch({ type: dataLoading, payload: false })
      })
  }
}

export const httpUploadMediaMethod = ({
  apiData: { url, header, data, customurl },
  actionType: { dataLoading, dataAction, dataError },
  onSuccess,
  onFailure
}: I_HTTPMETHOD) => {
  const requesturl =
    customurl != null ? customurl : process.env.REACT_APP_BASE_URL + '' + url
  return (dispatch: any) => {
    dispatch({ type: dataLoading, payload: true })
    apiRequest(`${requesturl}`, header, data, 'post', TIMEOUT)
      .then((resp) => {
        apiRespond(dispatch, dataAction, resp, onSuccess)
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          apiRespond(dispatch, dataError, getErrMsg(error), onFailure)
        }
      })
      .finally(() => {
        dispatch({ type: dataLoading, payload: false })
      })
  }
}

export const httpPutVideoMethod = ({
  apiData: { url, header, data, customurl },
  actionType: { dataLoading, dataAction, dataError },
  onSuccess,
  onFailure
}: I_HTTPMETHOD) => {
  const requesturl =
    customurl != null ? customurl : process.env.REACT_APP_BASE_URL + '' + url
  return (dispatch: any) => {
    dispatch({ type: dataLoading, payload: true })
    apiRequest(`${requesturl}`, header, data, 'put', TIMEOUT)
      .then((resp) => {
        const isSuccess = resp.status === 'success'
        apiRespond(
          dispatch,
          isSuccess ? dataAction : dataError,
          resp,
          isSuccess ? onSuccess : onFailure
        )
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          apiRespond(dispatch, dataError, getErrMsg(error), onFailure)
        }
      })
      .finally(() => {
        dispatch({ type: dataLoading, payload: false })
      })
  }
}

export const clearHttp = ({
  actionType: { dataLoading, dataAction, dataError }
}: {
  actionType: I_ACTION_TYPE
}) => {
  return (dispatch: any) => {
    dispatch({ type: dataLoading, payload: false })
    dispatch({ type: dataAction, payload: [] })
    dispatch({ type: dataError, payload: '' })
  }
}

export const clearHttpByValue = ({
  actionType: { dataLoading, dataAction, dataError },
  dataActionValue
}: {
  actionType: I_ACTION_TYPE
  dataActionValue: any
}) => {
  return (dispatch: any) => {
    dispatch({ type: dataLoading, payload: false })
    dispatch({ type: dataAction, payload: dataActionValue })
    dispatch({ type: dataError, payload: '' })
  }
}

export const httpPatchMethod = ({
  apiData: { url, header, data, customurl },
  actionType: { dataLoading, dataAction, dataError },
  onSuccess,
  onFailure
}: I_HTTPMETHOD) => {
  const requesturl =
    customurl != null ? customurl : process.env.REACT_APP_BASE_URL + '' + url
  return (dispatch: any) => {
    dispatch({ type: dataLoading, payload: true })
    apiRequest(`${requesturl}`, header, data, 'patch', TIMEOUT)
      .then((resp) => {
        apiRespond(dispatch, dataAction, resp, onSuccess)
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          apiRespond(dispatch, dataError, getErrMsg(error), onFailure)
        }
      })
      .finally(() => {
        dispatch({ type: dataLoading, payload: false })
      })
  }
}
