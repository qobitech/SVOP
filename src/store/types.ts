
export const authType = {
  login: {
    dataAction: 'SIGN_IN',
    dataLoading: 'SIGN_IN_LOADING',
    dataError: 'SIGN_IN_ERROR'
  },
  sendOtp: {
    dataAction: 'SEND_OTP',
    dataLoading: 'SEND_OTP_LOADING',
    dataError: 'SEND_OTP_ERROR'
  }
}

export const resultType = {
  getAll: {
    dataAction: 'GET_ALL_RESULTS',
    dataLoading: 'GET_ALL_RESULTS_LOADING',
    dataError: 'GET_ALL_RESULTS_ERROR'
  },
  getById: {
    dataAction: 'GET_RESULTS_BY_ID',
    dataLoading: 'GET_RESULTS_BY_ID_LOADING',
    dataError: 'GET_RESULTS_BY_ID_ERROR'
  }
}
