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

export const categoryType = {
  getAll: {
    dataAction: 'GET_ALL_CATEGORIES',
    dataLoading: 'GET_ALL_CATEGORIES_LOADING',
    dataError: 'GET_ALL_CATEGORIES_ERROR'
  }
}

export const candidatesType = {
  getAll: {
    dataAction: 'GET_ALL_CANDIDATES',
    dataLoading: 'GET_ALL_CANDIDATES_LOADING',
    dataError: 'GET_ALL_CANDIDATES_ERROR'
  },
  getTotalVotes: {
    dataAction: 'GET_TOTAL_VOTES',
    dataLoading: 'GET_TOTAL_VOTES_LOADING',
    dataError: 'GET_TOTAL_VOTES_ERROR'
  }
}

export const votingType = {
  vote: {
    dataAction: 'VOTE',
    dataLoading: 'VOTE_LOADING',
    dataError: 'VOTE_ERROR'
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
