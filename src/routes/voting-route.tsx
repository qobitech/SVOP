import React from 'react'
import {
  Navigate
  // Outlet
} from 'react-router-dom'
// import { ISADMIN, isLogged, VOTINGEXPIRED } from '../constants/global'
import { pageurl } from '../constants/pageurl'

const VotingRoute = () => {
  // if (!isLogged) {
  //   localStorage.clear()
  //   return <Navigate to={pageurl.GETSTARTED} />
  // } else {
  //   if (VOTINGEXPIRED && !ISADMIN) {
  //     return <Navigate to={pageurl.VOTE_EXPIRED} />
  //   } else {
  //     return <Outlet />
  //   }
  // }
  return <Navigate to={pageurl.UNDER_CONSTRUCTION} />
}

export default VotingRoute
