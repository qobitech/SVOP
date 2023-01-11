import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {
  isLogged,
  VOTINGEXPIRED,
  UNDER_CONSTRUCTION
} from '../constants/global'
import { pageurl } from '../constants/pageurl'

const AdminRoute = () => {
  if (UNDER_CONSTRUCTION) {
    return <Navigate to={pageurl.UNDER_CONSTRUCTION} />
  } else {
    if (!isLogged) {
      localStorage.clear()
      return <Navigate to={pageurl.GETSTARTED} />
    } else {
      if (VOTINGEXPIRED) {
        return <Navigate to={pageurl.VOTE_EXPIRED} />
      } else {
        return <Outlet />
      }
    }
  }
}

export default AdminRoute
