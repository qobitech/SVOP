import React, { Suspense } from 'react'
import './assets/style/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import ProtectedRoute from './routes/protected-route'
// import AuthRoute from './routes/auth-route'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Unapproved from './components/pages/unapproved'
// import UploadDocument from './components/pages/upload-documents'
// import Overview from './components/pages/overview'
// import ViewResult from './components/pages/view-result'
import Approved from './components/pages/approved'
// import Login from './components/pages/auth/login'
// import Profile from './components/pages/profile'
// import Instruction from './components/pages/instruction'
import Page404 from './components/pages/page404'

import { pageurl } from './constants/pageurl'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<></>}>
        <Routes>
          {/* <Route path={pageurl.OVERVIEW} element={<ProtectedRoute />} >
            <Route path={pageurl.OVERVIEW} element={<Overview />} />
          </Route> */}
          {/* <Route path={pageurl.UNAPPROVED} element={<ProtectedRoute />} >
            <Route path={pageurl.UNAPPROVED} element={<Unapproved />} />
          </Route> */}
          {/* <Route path={'/:page/:id'} element={<ProtectedRoute />} >
            <Route path={'/:page/:id'} element={<ViewResult />} />
          </Route> */}
          {/* <Route path={pageurl.UPLOAD} element={<ProtectedRoute />} >
            <Route path={pageurl.UPLOAD} element={<UploadDocument />} />
          </Route> */}
          <Route path={pageurl.HOME} element={<ProtectedRoute />}>
            <Route path={pageurl.HOME} element={<Approved />} />
          </Route>
          {/* <Route path={pageurl.PROFILE} element={<ProtectedRoute />}>
            <Route path={pageurl.PROFILE} element={<Profile />} />
          </Route> */}
          {/* <Route path={pageurl.INSTRUCTIONS} element={<ProtectedRoute />}>
            <Route path={pageurl.INSTRUCTIONS} element={<Instruction />} />
          </Route> */}
          {/* <Route path={pageurl.LOGIN} element={<AuthRoute />} >
            <Route path={pageurl.LOGIN} element={<Login />} />
          </Route> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
