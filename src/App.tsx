import React, { Suspense } from 'react'
import './assets/style/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import ProtectedRoute from './routes/protected-route'
import AuthRoute from './routes/auth-route'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from './components/pages/landing'
import Page404 from './components/pages/page404'
import { pageurl } from './constants/pageurl'
import GetStarted from './components/pages/getstarted'
import Sponsorship from './components/pages/sponsorship'
import Voting from './components/pages/voting'
import Results from './components/pages/results'
import VoteSuccess from './components/pages/vote-success'
import VoteExpired from './components/pages/vote-expired'
import VotingRoute from './routes/voting-route'
import ResultRoute from './routes/result-route'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={pageurl.LANDINGPAGE} element={<LandingPage />} />
          <Route path={pageurl.SPONSORSHIP} element={<Sponsorship />} />
          <Route path={pageurl.VOTE_EXPIRED} element={<VoteExpired />} />
          <Route path={pageurl.GETSTARTED} element={<AuthRoute />}>
            <Route path={pageurl.GETSTARTED} element={<GetStarted />} />
          </Route>
          <Route path={`${pageurl.VOTE}/:id`} element={<VotingRoute />}>
            <Route path={`${pageurl.VOTE}/:id`} element={<Voting />} />
          </Route>
          <Route path={`${pageurl.RESULTS}/:id`} element={<ResultRoute />}>
            <Route path={`${pageurl.RESULTS}/:id`} element={<Results />} />
          </Route>
          <Route
            path={`${pageurl.VOTE_SUCCESS}/:id`}
            element={<ProtectedRoute />}
          >
            <Route
              path={`${pageurl.VOTE_SUCCESS}/:id`}
              element={<VoteSuccess />}
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
