import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Zoo from './Zoo';
import AdminPage from './AdminPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <Zoo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
