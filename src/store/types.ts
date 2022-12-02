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

export const electionType = {
  electionCycle: {
    dataAction: 'GET_ALL_ELECTION_CYCLE_RESULTS',
    dataLoading: 'GET_ALL_ELECTION_CYCLE_LOADING',
    dataError: 'GET_ALL_ELECTION_CYCLE_ERROR'
  },
  electionCategories: {
    dataAction: 'GET_ALL_ELECTION_CATEGORIES_RESULTS',
    dataLoading: 'GET_ALL_ELECTION_CATEGORIES_LOADING',
    dataError: 'GET_ALL_ELECTION_CATEGORIES_ERROR'
  },
  election: {
    dataAction: 'GET_ALL_ELECTION_RESULTS',
    dataLoading: 'GET_ALL_ELECTION_LOADING',
    dataError: 'GET_ALL_ELECTION_ERROR'
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
