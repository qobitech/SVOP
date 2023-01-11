import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLogged, UNDER_CONSTRUCTION } from '../constants/global'
import { pageurl } from '../constants/pageurl'

const AuthRoute = () => {
  if (UNDER_CONSTRUCTION) {
    return <Navigate to={pageurl.UNDER_CONSTRUCTION} />
  } else {
    return !isLogged ? <Outlet /> : <Navigate to={pageurl.VOTE} />
  }
}

export default AuthRoute
