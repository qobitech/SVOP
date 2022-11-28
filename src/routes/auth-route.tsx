import React from 'react'
import {
  // Navigate,
  Outlet
} from 'react-router-dom'
// import { isLogged } from '../constants/global'
// import { pageurl } from '../constants/pageurl'

const AuthRoute = () => {
  // return !isLogged ? <Outlet/> : <Navigate to={pageurl.APPROVED}/>
  return <Outlet />
}

export default AuthRoute
