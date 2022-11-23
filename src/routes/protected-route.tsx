import React from 'react'
import {
  Navigate,
  Outlet
} from 'react-router-dom'
import { isLogged } from '../constants/global'
import { pageurl } from '../constants/pageurl'

const ProtectedRoute = () => {
  if (!isLogged) {
    localStorage.clear()
    return <Navigate to={pageurl.LOGIN}/>
  } else {
    return <Outlet/>
  }
}

export default ProtectedRoute
