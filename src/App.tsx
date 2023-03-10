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
import VotingExpiredRoute from './routes/voting-expired-route'
import UnderConstruction from './components/pages/under-construction'
import PublicRoute from './routes/public-route'
import { UNDER_CONSTRUCTION } from './constants/global'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={pageurl.LANDINGPAGE} element={<PublicRoute />}>
            <Route path={pageurl.LANDINGPAGE} element={<LandingPage />} />
          </Route>

          <Route path={pageurl.SPONSORSHIP} element={<PublicRoute />}>
            <Route path={pageurl.SPONSORSHIP} element={<Sponsorship />} />
          </Route>

          <Route path={pageurl.GETSTARTED} element={<PublicRoute />}>
            <Route path={pageurl.GETSTARTED} element={<GetStarted />} />
          </Route>

          {UNDER_CONSTRUCTION && (
            <Route
              path={pageurl.UNDER_CONSTRUCTION}
              element={<UnderConstruction />}
            />
          )}

          <Route path={pageurl.GETSTARTED} element={<AuthRoute />}>
            <Route path={pageurl.GETSTARTED} element={<GetStarted />} />
          </Route>
          <Route path={`${pageurl.VOTE}/:id`} element={<VotingRoute />}>
            <Route path={`${pageurl.VOTE}/:id`} element={<Voting />} />
          </Route>
          <Route path={pageurl.VOTE_EXPIRED} element={<VotingExpiredRoute />}>
            <Route path={pageurl.VOTE_EXPIRED} element={<VoteExpired />} />
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
