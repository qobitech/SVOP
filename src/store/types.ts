
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
  getAllApproved: {
    dataAction: 'GET_ALL_APPROVED_RESULTS',
    dataLoading: 'GET_ALL_APPROVED_RESULTS_LOADING',
    dataError: 'GET_ALL_APPROVED_RESULTS_ERROR'
  },
  getAllUnapproved: {
    dataAction: 'GET_ALL_UNAPPROVED_RESULTS',
    dataLoading: 'GET_ALL_UNAPPROVED_RESULTS_LOADING',
    dataError: 'GET_ALL_UNAPPROVED_RESULTS_ERROR'
  },
  getById: {
    dataAction: 'GET_RESULTS_BY_ID',
    dataLoading: 'GET_RESULTS_BY_ID_LOADING',
    dataError: 'GET_RESULTS_BY_ID_ERROR'
  },
  approve: {
    dataAction: 'APPROVE_RESULT',
    dataLoading: 'APPROVE_RESULT_LOADING',
    dataError: 'APPROVE_RESULT_ERROR'
  },
  reject: {
    dataAction: 'REJECT_RESULT',
    dataLoading: 'REJECT_RESULT_LOADING',
    dataError: 'REJECT_RESULT_ERROR'
  }
}

export const otherType = {
  menuOpen: {
    dataAction: 'MENU_OPEN',
    dataLoading: 'MENU_OPEN_LOADING',
    dataError: 'MENU_OPEN_ERROR'
  },
  subMenuOpen: {
    dataAction: 'SUB_MENU_OPEN',
    dataLoading: 'SUB_MENU_OPEN_LOADING',
    dataError: 'SUB_MENU_OPEN_ERROR'
  }
}
