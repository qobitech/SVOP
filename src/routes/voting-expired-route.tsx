import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLogged, VOTINGEXPIRED } from '../constants/global'
import { pageurl } from '../constants/pageurl'

const VotingExpiredRoute = () => {
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

export default VotingExpiredRoute
