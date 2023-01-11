import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {
  isLogged,
  SHOWRESULTPAGE,
  UNDER_CONSTRUCTION,
  VOTINGEXPIRED
} from '../constants/global'
import { pageurl } from '../constants/pageurl'

const ResultRoute = () => {
  if (UNDER_CONSTRUCTION) {
    return <Navigate to={pageurl.UNDER_CONSTRUCTION} />
  } else {
    if (!isLogged) {
      localStorage.clear()
      return <Navigate to={pageurl.GETSTARTED} />
    } else {
      if (VOTINGEXPIRED && !SHOWRESULTPAGE) {
        return <Navigate to={pageurl.VOTE_EXPIRED} />
      } else {
        return <Outlet />
      }
    }
  }
}

export default ResultRoute
