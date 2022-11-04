import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './assets/style/main.scss';

import Unapproved from './components/pages/unapproved';
import Approved from './components/pages/approved';
import Login from './components/pages/auth/login';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={'/unapproved'} element={<Unapproved />}/>
          <Route path={'/approved'} element={<Approved />}/>
          <Route path={'/'} element={<Login />}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
