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
  },
  getAllApproved: {
    dataAction: 'GET_ALL_APPROVED_RESULTS',
    dataLoading: 'GET_ALL_APPROVED_RESULTS_LOADING',
    dataError: 'GET_ALL_APPROVED_RESULTS_ERROR'
  }
}

export const locationType = {
  state: {
    dataAction: 'GET_STATE',
    dataLoading: 'GET_STATE_LOADING',
    dataError: 'GET_STATE_ERROR'
  },
  zone: {
    dataAction: 'GET_ZONE',
    dataLoading: 'GET_ZONE_LOADING',
    dataError: 'GET_ZONE_ERROR'
  },
  geozone: {
    dataAction: 'GET_GEO_ZONE',
    dataLoading: 'GET_GEO_ZONE_LOADING',
    dataError: 'GET_GEO_ZONE_ERROR'
  },
  pollingUnit: {
    dataAction: 'GET_POOLING_UNIT',
    dataLoading: 'GET_POOLING_UNIT_LOADING',
    dataError: 'GET_POOLING_UNIT_ERROR'
  },
  ward: {
    dataAction: 'GET_WARD',
    dataLoading: 'GET_WARD_LOADING',
    dataError: 'GET_WARD_ERROR'
  },
  lga: {
    dataAction: 'GET_LGA',
    dataLoading: 'GET_LGA_LOADING',
    dataError: 'GET_LGA_ERROR'
  },
  party: {
    dataAction: 'GET_PARTY',
    dataLoading: 'GET_PARTY_LOADING',
    dataError: 'GET_PARTY_ERROR'
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
