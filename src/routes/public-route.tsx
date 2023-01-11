import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UNDER_CONSTRUCTION } from '../constants/global'
import { pageurl } from '../constants/pageurl'

const PublicRoute = () => {
  if (UNDER_CONSTRUCTION) {
    return <Navigate to={pageurl.UNDER_CONSTRUCTION} />
  } else {
    return <Outlet />
  }
}

export default PublicRoute
