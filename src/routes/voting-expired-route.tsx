import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {
  isLogged,
  UNDER_CONSTRUCTION,
  VOTINGEXPIRED
} from '../constants/global'
import { pageurl } from '../constants/pageurl'

const VotingExpiredRoute = () => {
  if (UNDER_CONSTRUCTION) {
    return <Navigate to={pageurl.UNDER_CONSTRUCTION} />
  } else {
    if (!isLogged) {
      localStorage.clear()
      return <Navigate to={pageurl.GETSTARTED} />
    } else {
      if (!VOTINGEXPIRED) {
        return <Navigate to={pageurl.LANDINGPAGE} />
      } else {
        return <Outlet />
      }
    }
  }
}

export default VotingExpiredRoute
